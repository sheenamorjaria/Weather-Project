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

function showTemperature(response) {
  let temperature = Math.round(response.data.main.temp);
  let currentTemp = document.querySelector("#current-temp");
  currentTemp.innerHTML = ` ${temperature}`;
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
  iconElement.setAttribute("alt", response.data.weather[0].description);
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
  axios.get(apiUrl).then(showWeather);
}

function handleSubmit(event) {
  event.preventDefault();
  let city = document.querySelector("#entercity").value;
  search(city);
}

function showWeather(response) {
  let temperature = Math.round(response.data.main.temp);
  let currentTemp = document.querySelector("#current-temp");
  currentTemp.innerHTML = ` ${temperature}`;
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
  iconElement.setAttribute("alt", response.data.weather[0].description);
}

let searchForm = document.querySelector("#enter-city");
searchForm.addEventListener("submit", handleSubmit);

search("London");
