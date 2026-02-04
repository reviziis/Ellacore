// ==== CONFIG ====
const API_KEY = "979def4105f421522684e7b7f8056470" ;
const CITY = "Larne,GB"; 
const UNITS = "metric";

// ==== TIME DISPLAY ====
function updateTime() {
  const now = new Date();
  const timeString = now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  document.getElementById("time").textContent = timeString;
}
setInterval(updateTime, 1000);
updateTime();

// ==== WEATHER DISPLAY ====
async function fetchWeather() {
  try {
    // Use current weather endpoint
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${CITY}&appid=${API_KEY}&units=${UNITS}`
    );

    if (!response.ok) throw new Error("Weather fetch failed");

    const data = await response.json();

    const temp = Math.round(data.main.temp);
    const feels = Math.round(data.main.feels_like);

    // Some cities won't always have "rain", so handle safely
    let rainChance = "0";
    if (data.rain && data.rain["1h"]) {
      rainChance = data.rain["1h"]; // mm of rain in last hour
    }

    // Display
    document.getElementById("weather").textContent =
      `${temp}°C but feels like ${feels}°C`;

  } catch (err) {
    console.error(err);
    document.getElementById("weather").textContent = " | Weather unavailable";
  }
}

// Fetch once and refresh every 10 min
fetchWeather();
setInterval(fetchWeather, 10 * 60 * 1000);