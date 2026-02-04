const images = [
  "Ella1",
  "Ella10",
  "Ella100",
  "Ella101",
  "Ella102",
  "Ella103",
  "Ella104",
  "Ella105",
  "Ella106",
  "Ella107",
  "Ella108",
  "Ella109",
  "Ella11",
  "Ella110",
  "Ella111",
  "Ella112",
  "Ella113",
  "Ella114",
  "Ella115",
  "Ella116",
  "Ella117",
  "Ella118",
  "Ella119",
  "Ella12",
  "Ella120",
  "Ella121",
  "Ella122",
  "Ella123",
  "Ella124",
  "Ella125",
  "Ella126",
  "Ella127",
  "Ella128",
  "Ella129",
  "Ella13",
  "Ella130",
  "Ella131",
  "Ella132",
  "Ella133",
  "Ella134",
  "Ella135",
  "Ella136",
  "Ella137",
  "Ella138",
  "Ella14",
  "Ella15",
  "Ella16",
  "Ella17",
  "Ella18",
  "Ella19",
  "Ella2",
  "Ella20",
  "Ella21",
  "Ella22",
  "Ella23",
  "Ella24",
  "Ella25",
  "Ella26",
  "Ella27",
  "Ella28",
  "Ella29",
  "Ella3",
  "Ella30",
  "Ella31",
  "Ella32",
  "Ella33",
  "Ella34",
  "Ella35",
  "Ella36",
  "Ella37",
  "Ella38",
  "Ella39",
  "Ella4",
  "Ella40",
  "Ella41",
  "Ella42",
  "Ella43",
  "Ella44",
  "Ella45",
  "Ella46",
  "Ella47",
  "Ella48",
  "Ella49",
  "Ella5",
  "Ella50",
  "Ella51",
  "Ella52",
  "Ella53",
  "Ella54",
  "Ella55",
  "Ella56",
  "Ella57",
  "Ella58",
  "Ella59",
  "Ella6",
  "Ella60",
  "Ella61",
  "Ella62",
  "Ella63",
  "Ella64",
  "Ella65",
  "Ella66",
  "Ella67",
  "Ella68",
  "Ella69",
  "Ella7",
  "Ella70",
  "Ella71",
  "Ella72",
  "Ella73",
  "Ella74",
  "Ella75",
  "Ella76",
  "Ella77",
  "Ella78",
  "Ella79",
  "Ella8",
  "Ella80",
  "Ella81",
  "Ella82",
  "Ella83",
  "Ella84",
  "Ella85",
  "Ella86",
  "Ella87",
  "Ella88",
  "Ella89",
  "Ella9",
  "Ella90",
  "Ella91",
  "Ella92",
  "Ella93",
  "Ella94",
  "Ella95",
  "Ella96",
  "Ella97",
  "Ella98",
  "Ella99",
];

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
