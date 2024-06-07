function formatTime(date) {
  let hours = date.getHours();
  if (hours < 10) {
    hours = `0${hours}`;
  }
  let minutes = date.getMinutes();
  if (minutes < 10) {
    minutes = `0${minutes}`;
  }
  return `${hours}:${minutes}`;
}

function formatDay(date) {
  const dayArray = date.getDay();
  const days = [
    "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"
  ];
  const day = days[dayArray];
  const monthArray = date.getMonth();
  const months = [
    "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"
  ];
  const month = months[monthArray];
  const dayOfMonth = date.getDate();
  const year = date.getFullYear();
  return `${day}, ${dayOfMonth}/${month}/${year}`;
}

const newCurrentDay = new Date();
document.querySelector("#date").innerHTML = formatDay(newCurrentDay);

// implementing search bar and api request
function displayWeatherInfo(response) {
  document.querySelector("#searched-city").innerHTML = response.data.name;
  const temperature = Math.round(response.data.main.temp);
  document.querySelector("#current-temperature").innerHTML = `${temperature}°`;
  const maxTemperature = Math.round(response.data.main.temp_max);
  document.querySelector("#max-temperature").innerHTML = `Max: ${maxTemperature}°`;
  const minTemperature = Math.round(response.data.main.temp_min);
  document.querySelector("#min-temperature").innerHTML = `Min: ${minTemperature}°`;
  const humidity = response.data.main.humidity;
  document.querySelector("#humidity").innerHTML = `${humidity}%`;
  const windSpeed = Math.round(response.data.wind.speed);
  document.querySelector("#wind").innerHTML = `${windSpeed}km/h`;
  document.querySelector("#weather-type").innerHTML = response.data.weather[0].main;

  // Additional weather information
  const rain = response.data.rain ? response.data.rain["1h"] : "N/A";
  document.querySelector("#rain").innerHTML = `${rain} mm`;

  const feelsLike = Math.round(response.data.main.feels_like);
  document.querySelector("#feel").innerHTML = `${feelsLike}°`;

  const windDirection = response.data.wind.deg;
  document.querySelector("#wind-direction").innerHTML = `${windDirection}°`;

  const sunrise = new Date(response.data.sys.sunrise * 1000).toLocaleTimeString();
  document.querySelector("#sunrise").innerHTML = sunrise;

  const sunset = new Date(response.data.sys.sunset * 1000).toLocaleTimeString();
  document.querySelector("#sunset").innerHTML = sunset;

  const visibility = response.data.visibility;
  document.querySelector("#visibility").innerHTML = `${visibility} meters`;

  const pressure = response.data.main.pressure;
  document.querySelector("#pressure").innerHTML = `${pressure} hPa`;
}

// Other functions for handling API requests and user input


function searchCity(city) {
  const apiKey = "2b5fc755ac2ec59250868b5527df31c4";
  const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric`;
  axios.get(`${apiUrl}&appid=${apiKey}`).then(displayWeatherInfo);
}

function handleSubmit(event) {
  event.preventDefault();
  let city = document.querySelector("#search-input").value;
  searchCity(city);
}

const searchBar = document.querySelector("#search-form");
searchBar.addEventListener("submit", handleSubmit);
