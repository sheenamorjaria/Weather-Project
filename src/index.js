let now = new Date();

let date = now.getDate;

let days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
let day = days[now.getDay()];
console.log(days[now.getDay()]);

let minutes = now.getMinutes();
if (minutes < 10) {
  minutes = `0${minutes}`;
}

let hours = now.getHours();
if (hours < 10) {
  hours = `0${hours}`;
}

function formatDay(timestamp) {
  let date = new Date(timestamp * 1000);
  let day = date.getDay();
  let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  return days[day];
}

function showForecast(response) {
  let dailyForecast = response.data.daily;
  let forecast = document.querySelector("#forecast");
  let forecastHTML = `<div class="row">`;

  dailyForecast.forEach(function (forecastDay, index) {
    if (index < 6) {
      forecastHTML =
        forecastHTML +
        `
  <div class="col-2">
    <div class="forecast-date"><h5>${formatDay(forecastDay.dt)} </h5></div>
    <img
     src="https://openweathermap.org/img/wn/${
       forecastDay.weather[0].icon
     }@2x.png"

     alt="suncloud"
     width="40"
    />
    <div class="forecat-temperature"> <h6>
    <span class="forecast-temperature-max"> ${Math.round(
      forecastDay.temp.max
    )}° </span> 
    <span class="forecast-temperature-max"> ${Math.round(
      forecastDay.temp.min
    )}° </span> </h6>
    </div>
  </div>
  `;
    }
  });
  forecastHTML = forecastHTML + `</div>`;
  forecast.innerHTML = forecastHTML;
}

let h2 = document.querySelector("h2");
h2.innerHTML = `Last updated: ${day}, ${hours}:${minutes}`;

let findCity = document.querySelector("#enter-city");
findCity.addEventListener("submit", showCity);

function showCity(event) {
  event.preventDefault();
  let cityInput = document.querySelector("#entercity");
  let h1 = document.querySelector("h1");
  h1.innerHTML = `${cityInput.value}`;
}

function showLocation(position) {
  let apiKey = "aca4dd3643b89e94dbd3cac6cf6f2638";
  let lon = position.coords.longitude;
  let lat = position.coords.latitude;
  let units = "metric";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=${units}`;
  console.log(apiUrl);
  axios.get(apiUrl).then(showTemperature);
}

function getForecast(coordinates) {
  console.log(coordinates);
  let apiKey = "215576bab28022db35e6e64f040e1b56";
  let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${coordinates.lat}&lon=${coordinates.lon}&appid=${apiKey}&units=metric`;
  console.log(apiUrl);
  axios.get(apiUrl).then(showForecast);
}

function showTemperature(response) {
  let temperature = Math.round(response.data.main.temp);
  let currentTemp = document.querySelector("#current-temp");
  currentTemp.innerHTML = `${temperature}`;

  celsiusTemperature = response.data.main.temp;

  let cityName = response.data.name;
  let country = response.data.sys.country;
  let h1 = document.querySelector("h1");
  h1.innerHTML = `${cityName}, ${country}`;
  let wind = document.querySelector("#wind");
  wind.innerHTML = `Wind: ${Math.round(response.data.wind.speed)} mph`;
  let humid = document.querySelector("#humidity");
  humid.innerHTML = `Humidity: ${Math.round(response.data.main.humidity)}%`;
  let description = response.data.weather[0].main;
  let currentdescription = document.querySelector("#description");
  currentdescription.innerHTML = `${description}`;
  let currentImage = document.querySelector("#currentweather-image");
  currentImage.setAttribute(
    "src",
    `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`
  );
  currentImage.setAttribute("alt", response.data.weather[0].description);

  getForecast(response.data.coord);
}

function getCurrentPosition() {
  navigator.geolocation.getCurrentPosition(showLocation);
}

let locationButton = document.querySelector("#location");
locationButton.addEventListener("click", getCurrentPosition);

function search(city) {
  let apiKey = "8ca7dd4e61360b90fb66918853670e48";
  let units = "metric";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=${units}`;
  axios.get(apiUrl).then(showTemperature);
}

function handleSubmit(event) {
  event.preventDefault();
  let city = document.querySelector("#entercity").value;
  search(city);
}

function showFahrenheit(event) {
  event.preventDefault();
  let fahrenheitTemperature = (celsiusTemperature * 9) / 5 + 32;
  celsiusLink.classList.remove("active");
  fahrenheitLink.classList.add("active");
  let currentTemp = document.querySelector("#current-temp");
  currentTemp.innerHTML = Math.round(fahrenheitTemperature);
}

function showCelsius(event) {
  event.preventDefault();
  let currentTemp = document.querySelector("#current-temp");
  fahrenheitLink.classList.remove("active");
  celsiusLink.classList.add("active");
  currentTemp.innerHTML = Math.round(celsiusTemperature);
}

let celsiusTemperature = null;

let searchForm = document.querySelector("#enter-city");
searchForm.addEventListener("submit", handleSubmit);

let fahrenheitLink = document.querySelector("#fahrenheit-link");
fahrenheitLink.addEventListener("click", showFahrenheit);

let celsiusLink = document.querySelector("#celsius-link");
celsiusLink.addEventListener("click", showCelsius);

search("London");
