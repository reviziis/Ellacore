// Automatically generates the list from Ella.webp to Ella42.webp
const logoImages = ["Ella.webp"];
for (let i = 1; i <= 42; i++) {
  logoImages.push(`Ella${i}.webp`);
}

function getLogoElement() {
  return document.querySelector(".monogram svg image") || null;
}

// Update logo image
function updateLogo() {
  const logoEl = getLogoElement();
  if (!logoEl) return;

  const randomFile = logoImages[Math.floor(Math.random() * logoImages.length)];
  const imagePath = `Ella/${randomFile}`;
  logoEl.setAttribute("href", imagePath);
  logoEl.setAttributeNS("http://www.w3.org/1999/xlink", "href", imagePath);
}

// Generate twinkling sparkles around logo (fixed positions)
function addSparkles(num = 50) {
  const svg = document.querySelector(".monogram svg");
  if (!svg) return;

  // Remove previous sparkles
  svg.querySelectorAll(".dynamic-sparkle").forEach(el => el.remove());

  for (let i = 0; i < num; i++) {
    const sparkle = document.createElementNS("http://www.w3.org/2000/svg", "circle");
    sparkle.setAttribute("class", "dynamic-sparkle");
    sparkle.setAttribute("r", (Math.random() * 2 + 1).toFixed(2));
    sparkle.setAttribute("fill", "#fff");
    sparkle.setAttribute("opacity", 0);

    // Position sparkles around the logo in a circular area
    const angle = Math.random() * 2 * Math.PI;
    const radius = 70 + Math.random() * 30; // around the logo (inside mask)
    const cx = 100 + radius * Math.cos(angle);
    const cy = 100 + radius * Math.sin(angle);
    sparkle.setAttribute("cx", cx);
    sparkle.setAttribute("cy", cy);

    // Animate opacity for twinkle effect
    const anim = document.createElementNS("http://www.w3.org/2000/svg", "animate");
    anim.setAttribute("attributeName", "opacity");
    anim.setAttribute("values", "0;1;0");
    anim.setAttribute("dur", (Math.random() * 2 + 1).toFixed(2) + "s"); // random speed
    anim.setAttribute("begin", Math.random().toFixed(2) + "s"); // random delay
    anim.setAttribute("repeatCount", "indefinite");
    sparkle.appendChild(anim);

    svg.appendChild(sparkle);
  }
}

// Run on load
document.addEventListener("DOMContentLoaded", () => {
  updateLogo();
  addSparkles(60); // number of sparkles
  setInterval(updateLogo, 5000); // change logo every 5s
});