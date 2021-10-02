const showDataToUser = (data) => {
  const currentWeather = document.getElementById('weather-widget');

  currentWeather.innerHTML = `
        <div class="current-weather">
          <div class="main">
            <img
            src="http://openweathermap.org/img/wn/${
              data.weather[0].icon
            }@2x.png"
            alt="weather icon"
            class="icon"
            />
            <div class="temp">
              <h2 id="temp" class="temp-value">${data.main.temp}°K</h2>
              <div id="units">
                <button class="unit" id="kelvin">K</button>
                <button class="unit" id="fahrenheit">F</button>
                <button class="unit" id="celsius">C</button>
              </div>
            </div>
          </div>
          <div class="other-data">
            <p class="feels-like ">feels like: <span class="temp-value">${
              data.main.feels_like
            }°K</span></p>
            <p class="humidity">humidity: ${data.main.humidity}</p>
            <p class="wind">${(data.wind.speed * 3.6).toFixed()}km/h</p>
          </div>
        </div>
        <div class="time-place">
          <h3 class="location">${data.name}, ${data.sys.country}</h3>
          <h4 class="date">${new Date().toLocaleString()}</h4>
          <h4 class="clouds">${data.weather[0].description}</h4>
        </div>
                                `;
  const dailyDiv = document.getElementById('daily-data');
  dailyDiv.innerHTML = ``;
  dailyDiv.style.padding = '1em';
  data.daily.forEach((day) => {
    const dayDiv = document.createElement('div');
    dayDiv.classList.add('day');
    dayDiv.innerHTML = `
        <img
            src="http://openweathermap.org/img/wn/${day.weather[0].icon}@2x.png"
            alt="weather icon"
            class="icon"
            />
        <h4 class="hi temp-value">${day.temp.max}°K</h4>
        <h4 class="lo temp-value">${day.temp.min}°K</h4>
    `;
    dailyDiv.appendChild(dayDiv);
  });
  // eslint-disable-next-line no-console
  console.log(data);
};

export default showDataToUser;
