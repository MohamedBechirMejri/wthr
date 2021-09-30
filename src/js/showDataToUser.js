const showDataToUser = (data) => {
  const currentWeather = document.getElementById('current-weather');

  currentWeather.innerHTML = `
        <div class="temp">
          <img
            id="icon"
            src="http://openweathermap.org/img/wn/${
              data.weather[0].icon
            }@2x.png"
          />
          <h2 id="temp" class="temp-value">${data.main.temp}°K</h2>
          <div id="units">
            <button id="kelvin" class="unit">K</button>
            <button id="fahrenheit" class="unit">F</button>
            <button id="celsius" class="unit">C</button>
          </div>
        </div>
        <div id="place-and-time">
        <p id="date">${new Date().toLocaleString()}</p>
        <h3 id="location">
          <span id="city">${data.name}</span>,
          <span id="country">${data.sys.country}</span>
        </h3>
        </div>
        <div id="other-extra">
          <div id="other-data">
            <h4 class="feels-like">
              feels like:
              <span id="feels-like" class="temp-value"
                >${data.main.feels_like}°K</span
              >
            </h4>
            <h4 id="clouds">${data.weather[0].description}</h4>
            <h4 class="humidity">
              humidity: <span id="humidity">${data.main.humidity}</span>%
            </h4>
          </div>
          <div id="extra-data">
            <h4 id="wind">${(data.wind.speed * 3.6).toFixed()}km/h</h4>
            <h4 id="visibility">${(data.visibility / 1000).toFixed(1)}km</h4>
            <h4 id="pressure">${data.main.pressure}hPa</h4>
          </div>
        </div>
                                `;
  // eslint-disable-next-line no-console
  console.log(data);
};

export default showDataToUser;
