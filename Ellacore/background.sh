#!/usr/bin/env bash

IMAGE_DIR="images"
OUTPUT_MAIN="background.js"
OUTPUT_ALT="background_alt.js"

# Generate JS array of images once, reuse for both outputs
TMP_ARRAY=$(mktemp)

# Start array
echo "const images = [" > "$TMP_ARRAY"

# Fill array using jq for safe encoding
find "$IMAGE_DIR" -maxdepth 1 -type f -printf '%f\n' | sort | while IFS= read -r file; do
    encoded=$(jq -Rr @json <<<"$file")
    echo "  $encoded," >> "$TMP_ARRAY"
done

echo "];" >> "$TMP_ARRAY"


#####################################
### Generate MAIN background.js   ###
#####################################
cat "$TMP_ARRAY" > "$OUTPUT_MAIN"

cat >> "$OUTPUT_MAIN" <<'EOF'

const randomIndex = Math.floor(Math.random() * images.length);
const imagePath = `images/${images[randomIndex]}`;

document.body.style.backgroundImage = `url('${imagePath}')`;
document.body.style.backgroundSize = "cover";
document.body.style.backgroundPosition = "center";
document.body.style.backgroundAttachment = "fixed";
EOF



########################################
### Generate ALT background_alt.js    ###
### (New version w/ wrapper, z-index) ###
########################################

cat "$TMP_ARRAY" > "$OUTPUT_ALT"

cat >> "$OUTPUT_ALT" <<'EOF'

// Shuffle images for random slideshow order
function shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}
shuffle(images);

// Ensure a wrapper exists that lives behind the blur
let wrapper = document.getElementById("bg-wrapper");

if (!wrapper) {
  wrapper = document.createElement("div");
  wrapper.id = "bg-wrapper";
  document.body.prepend(wrapper);
}

wrapper.style.position = "fixed";
wrapper.style.top = "0";
wrapper.style.left = "0";
wrapper.style.width = "100%";
wrapper.style.height = "100%";
wrapper.style.zIndex = "-2";  // MUST stay behind blur layer
wrapper.style.overflow = "hidden";

// Create two cross-fade layers inside wrapper
const bg1 = document.createElement("div");
const bg2 = document.createElement("div");

[bg1, bg2].forEach((bg) => {
  bg.style.position = "absolute";
  bg.style.top = "0";
  bg.style.left = "0";
  bg.style.width = "100%";
  bg.style.height = "100%";
  bg.style.backgroundSize = "cover";
  bg.style.backgroundPosition = "center";
  bg.style.backgroundAttachment = "fixed";
  bg.style.transition = "opacity 2s ease-in-out";
  bg.style.zIndex = "-2";
  bg.style.opacity = "0";
});

wrapper.appendChild(bg1);
wrapper.appendChild(bg2);

// Slideshow logic
let index = 0;
let showingFirst = true;

function setBackground() {
  const imagePath = `images/${images[index]}`;

  if (showingFirst) {
    bg2.style.backgroundImage = `url('${imagePath}')`;
    bg2.style.opacity = "1";
    bg1.style.opacity = "0";
  } else {
    bg1.style.backgroundImage = `url('${imagePath}')`;
    bg1.style.opacity = "1";
    bg2.style.opacity = "0";
  }

  showingFirst = !showingFirst;
  index = (index + 1) % images.length;
}

// Start slideshow
setBackground();
setInterval(setBackground, 10000);
EOF


#####################################
### Cleanup + Finish
#####################################
rm "$TMP_ARRAY"

count=$(find "$IMAGE_DIR" -type f | wc -l)
echo "✅ background.js and background_alt.js generated with $count images."