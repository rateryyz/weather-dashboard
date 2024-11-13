async function displayWeather(city) {
  const data = await fetchWeather(city);

  if (data) {
    document.getElementById(
      "city-name"
    ).innerText = `${data.location.name}, ${data.location.country}`;
    document.getElementById(
      "temperature"
    ).innerText = `${data.current.temp_c}°C`;
    document.getElementById("condition").innerText =
      data.current.condition.text;
    document.getElementById(
      "humidity"
    ).innerText = `Humidity: ${data.current.humidity}%`;
    document.getElementById(
      "wind-speed"
    ).innerText = `Wind: ${data.current.wind_kph} km/h`;
    document.getElementById(
      "feels-like"
    ).innerText = `Feels Like: ${data.current.feelslike_c}°C`;

    const forecastDays = data.forecast.forecastday;
    for (let i = 0; i < 7; i++) {
      const forecastDay = forecastDays[i];
      const dayIndex = (new Date().getDay() + i) % 7;
      const dayName = getDayName(dayIndex);

      document.getElementById(
        `forecast-${dayName.toLowerCase()}-temp`
      ).innerText = `${forecastDay.day.avgtemp_c}°C`;
      document.getElementById(
        `forecast-${dayName.toLowerCase()}-date`
      ).innerText = dayName;

      const forecastItem = document.getElementById(
        `forecast-${dayName.toLowerCase()}`
      );
      if (i === 0) {
        forecastItem.classList.add("today");
      } else {
        forecastItem.classList.remove("today");
      }
    }
  }
}

function getDayName(index) {
  const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  return days[index];
}

function searchCity() {
  const city = document.getElementById("search-input").value;
  if (city) {
    displayWeather(city);
  }
}

document.getElementById("search-button").addEventListener("click", searchCity);

document.getElementById("search-input").addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    searchCity();
  }
});

displayWeather("Oklahoma");

async function displayFamousCitiesWeather() {
  const cities = ["Paris", "Tokyo"];

  for (let i = 0; i < cities.length; i++) {
    const data = await fetchWeather(cities[i]);

    if (data) {
      document.getElementById(`city-${i + 1}-name`).innerText =
        data.location.name;
      document.getElementById(
        `city-${i + 1}-temp`
      ).innerText = `${data.current.temp_c}°C`;
      document.getElementById(`city-${i + 1}-condition`).innerText =
        data.current.condition.text;
    }
  }
}

displayFamousCitiesWeather();
