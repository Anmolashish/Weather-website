const submit = document.getElementById("submit");
const input = document.getElementById("country");

const weatherColors = {
  SUNNY: "rgba(255, 255, 0, 1)", // Yellow
  CLOUDY: "rgba(204, 204, 204, 1)", // Light gray
  OVERCAST: "rgba(51, 51, 51, 1)", // Dark gray
  CLEAR: "rgba(0, 0, 255, 1)", // Royal blue
  FAIR: "rgba(173, 216, 230, 1)", // Light blue

  // Precipitation
  RAIN: "rgba(66, 139, 202, 1)", // Lighter blue for light rain
  "HEAVY RAIN": "rgba(23, 105, 170, 1)", // Darker blue for heavy rain
  SNOW: "rgba(255, 255, 255, 1)", // White
  SLEET: "rgba(160, 160, 160, 1)", // Light gray
  HAIL: "rgba(255, 251, 240, 1)", // White with a hint of gray

  // Wind
  CALM: "rgba(144, 238, 144, 1)", // Light green
  BREEZY: "rgba(173, 216, 230, 1)", // Light blue
  WINDY: "rgba(173, 216, 230, 1)", // Light blue
  GUSTY: "rgba(173, 216, 230, 1)", // Light blue
  "HIGH WINDS": "rgba(0, 0, 128, 1)", // Dark blue

  // Temperature
  HOT: "rgba(255, 165, 0, 1)", // Orange
  WARM: "rgba(255, 127, 80, 1)", // Coral
  MILD: "rgba(144, 238, 144, 1)", // Light green
  COOL: "rgba(173, 216, 230, 1)", // Light blue
  COLD: "rgba(0, 0, 128, 1)", // Dark blue

  // Humidity and Visibility
  HUMID: "rgba(173, 216, 230, 1)", // Light blue (base for humidity)
  DRY: "rgba(250, 252, 238, 1)", // Light yellow
  "CLEAR VISIBILITY": "rgba(255, 255, 255, 1)", // White
  FOG: "rgba(211, 211, 211, 1)", // Light gray
  HAZE: "rgba(224, 224, 224, 1)", // Light gray

  // Weather Events
  THUNDERSTORM: "rgba(51, 51, 51, 1)", // Base color for storm
  BLIZZARD: "rgba(255, 255, 255, 1)", // White
  HURRICANE: "rgba(33, 71, 97, 1)", // Dark blue for hurricane
  TORNADO: "rgba(105, 105, 105, 1)", // Gray for tornado

  // Seasons
  SPRING: "rgba(144, 238, 144, 1)", // Light green
  SUMMER: "rgba(255, 255, 0, 1)", // Yellow
  AUTUMN: "rgba(255, 165, 0, 1)", // Orange
  WINTER: "rgba(173, 216, 230, 1)", // Light blue
  MIST: "rgba(224, 224, 224, 1)",
};

async function getWeather(cityName) {
  const apiKey = "eaa45485f7e245ea93574356241405"; // Assuming there is an element with id "display" to show the error message

  try {
    const response = await fetch(
      `https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${cityName}`
    );

    if (!response.ok) {
      throw new Error("City not found");
    }
    const data = await response.json();

    let temp = data.current.condition.text;
    const weather = temp.toUpperCase();

    document.getElementById("weather").innerText = weather;

    temp = data.location.name;
    const city = temp.toUpperCase();

    document.getElementById("location").innerText = city;

    temp = data.location.country;
    const country = temp.toUpperCase();

    document.getElementById("country-name").innerText = country;
    document.getElementById(
      "data"
    ).style.background = `linear-gradient(180deg, ${weatherColors[weather]} 0%, rgba(255,255,255,1) 66%)`;
  } catch (error) {
    console.log(error);
  }
}

submit.addEventListener("click", () => {
  getWeather(input.value);
  input.value = "";
});
