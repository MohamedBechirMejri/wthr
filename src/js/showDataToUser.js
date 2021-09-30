const showDataToUser = (data) => {
  const currentWeather = document.getElementById('current-weather');

  currentWeather.innerHTML = `
        <p id="date">${new Date()}</p>
        <h3 id="location">
          <span id="city">${data.name}</span>, <span id="country">${
    data.sys.country
  }</span>
        </h3>
        <div class="temp-plus-data">
        <div class="temp">
          <h2 id="temp" class="temp-value">${data.main.temp}°K</h2>
          <div id="units">
            <span id="kelvin" class="unit">K</span>
            <span id="fahrenheit" class="unit">F</span>
            <span id="celsius" class="unit">C</span>
          </div>
        </div>
        <h4 class="feels-like">feels like <span id="feels-like" class="temp-value">${
          data.main.feels_like
        }°K</span></h4>
        <h4 id="clouds">${data.weather[0].description}</h4>
        <h4 class="humidity">humidity <span id="humidity">${
          data.main.humidity
        }</span></h4>
        </div>
        `;
  // eslint-disable-next-line no-console
  console.log(data);
};

export default showDataToUser;
