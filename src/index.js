<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <script src="https://cdn.jsdelivr.net/npm/axios@1.1.2/dist/axios.min.js"></script>
    <title>Weather</title>
    <link
      href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha3/dist/css/bootstrap.min.css"
      rel="stylesheet"
      integrity="sha384-KK94CHFLLe+nY2dmCWGMq91rCGa5gtU4mk92HdvYe+M/SXH301p5ILy+dN9+nJOZ"
      crossorigin="anonymous"
    />
    <link rel="stylesheet" href="src/styles.css" />
  </head>
  <body>
    <div class="container">
      <div class="row">
        <div class="col-10">
          <div class="card">
            <div class="card-body" id="weatherapp">
              <div class="row">
                <div class="col-5">
                  <form id="enter-city">
                  <input
                    type="text"
                    placeholder="Enter city..."
                    autocomplete="on"
                    autofocus = "on"
                    id="entercity"
                  />
                </div>
                <div class="col-3">
                  <input type = "submit" value = "Search" class="btn btn-secondary" id="search"/>
                </div>
                <div class="col-3">
                  <button type="button" class="btn btn-outline-secondary" id = "location">
                    Location...
                  </button>
                </div>
                </form>
                <div class="row">
                    <h1>London, England</h1>
                </div>
                <div class="row">
                    <h2>Last updated: Friday, 14:19</h2>
                </div>
                <div class="row">
                  <div class="col-6">
                    <br />
                    <br />
                    <strong id="current-temp">11 </strong> <span class="units"><a href="#" id="celsius-link">°C</a> | <a href="#" id="fahrenheit-link">°F</a> </span>
                  </div>
                  <div class="col-3">
                    <ul>
                      <li><h6 id = "humidity">Humidity: 76%</h6></li>
                      <li><h6 id = "wind">Wind: 12 mph</h6></li>
                      <li><h6 id = "description">Cloudy</h6></li>
                    </ul>
                  </div>
                  <div class="col-3">
                    <img src="images/suncloud.jpg" alt="suncloud" width="150" id="currentweather-image" />
                  </div>
                  <hr />
                  <div class="row">
                    <div class="col">
                      <h4>Sat</h4>
                    </div>
                    <div class="col">
                      <h4>Sun</h4>
                    </div>
                    <div class="col">
                      <h4>Mon</h4>
                    </div>
                    <div class="col">
                      <h4>Tue</h4>
                    </div>
                    <div class="col">
                      <h4>Wed</h4>
                    </div>
                    <div class="col">
                      <h4>Thur</h4>
                    </div>
                  </div>
                  <div class="row">
                    <div class="col">
                      <img
                        src="images/suncloud.jpg"
                        alt="suncloud"
                        width="50"
                      />
                    </div>
                    <div class="col">
                      <img src="images/cloudy.jpg" alt="cloudy" width="50" />
                    </div>
                    <div class="col">
                      <img src="images/windy.jpg" alt="windy" width="50" />
                    </div>
                    <div class="col">
                      <img
                        src="images/suncloud.jpg"
                        alt="suncloud"
                        width="50"
                      />
                    </div>
                    <div class="col">
                      <img
                        src="images/suncloud.jpg"
                        alt="suncloud"
                        width="50"
                      />
                    </div>
                    <div class="col">
                      <img
                        src="images/suncloud.jpg"
                        alt="suncloud"
                        width="50"
                      />
                    </div>
                  </div>
                  <div class="row">
                    <div class="col"><h5>14° 7°</h5></div>
                    <div class="col"><h5>16° 5°</h5></div>
                    <div class="col"><h5>16° 6°</h5></div>
                    <div class="col"><h5>15° 8°</h5></div>
                    <div class="col"><h5>13° 9°</h5></div>
                    <div class="col"><h5>17° 8°</h5></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-2">
          <div class="card">
            <div class="card-body" id="weatherapp">
              <button type="button" class="btn" id="button">
                <h6>Munich, <br />Germany</h6>
              </button>
              <br />
              <br />
              <button type="button" class="btn" id="button">
                <h6>Tokyo, <br />Japan</h6>
              </button>
              <br />
              <br />
              <button type="button" class="btn" id="button">
                <h6>Sydney, <br />Australia</h6>
              </button>
              <br />
              <br />
              <button type="button" class="btn" id="button">
                <h6>Madrid, <br />Spain</h6>
              </button>
              <br />
              <br />
              <button type="button" class="btn" id="button">
                <h6>Mumbai, <br />India</h6>
              </button>
              <br />
              <br />
            </div>
          </div>
        </div>
      </div>
      <br/>
    <footer><a href="https://github.com/sheenamorjaria/Weather-Project.git" target="blank"> Open source code</a> by Sheena Morjaria </footer>
    </div>
    <script src="src/index.js"></script>
  </body>
</html>
