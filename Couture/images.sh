#!/usr/bin/env bash

IMAGE_DIR="images"
OUTPUT_JS="images.js"
INTERVAL=10000   # 10 seconds

TMP_ARRAY=$(mktemp)

#####################################
### Generate image array
#####################################

echo "const images = [" > "$TMP_ARRAY"

find "$IMAGE_DIR" -maxdepth 1 -type f \
  \( -iname "*.jpg" -o -iname "*.jpeg" -o -iname "*.png" -o -iname "*.webp" \) \
  -printf '%f\n' | sort | while IFS= read -r file; do
    encoded=$(jq -Rr @json <<<"$file")
    echo "  $encoded," >> "$TMP_ARRAY"
done

echo "];" >> "$TMP_ARRAY"

#####################################
### Write images.js
#####################################

cat "$TMP_ARRAY" > "$OUTPUT_JS"

cat >> "$OUTPUT_JS" <<EOF

// ---- Config ----
const IMAGE_DIR = "images";
const SLIDE_INTERVAL = $INTERVAL;

// ---- Safety ----
if (!images.length) {
  console.error("No images found in images folder");
}

// ---- Optional shuffle ----
function shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}
shuffle(images);

// ---- Slideshow ----
const img = document.getElementById("image");

if (!img) {
  console.error("No <img id=\\"image\\"> found in HTML");
}

let index = 0;

function showNextImage() {
  // 🔑 THIS IS THE FIX
  img.src = \`\${IMAGE_DIR}/\${encodeURIComponent(images[index])}\`;
  index = (index + 1) % images.length;
}

// Initial image
showNextImage();

// Start slideshow
setInterval(showNextImage, SLIDE_INTERVAL);
EOF

#####################################
### Cleanup
#####################################

rm "$TMP_ARRAY"

count=$(find "$IMAGE_DIR" -type f | wc -l)
echo "✅ images.js generated with $count images."