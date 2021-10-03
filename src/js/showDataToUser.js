/* eslint-disable import/no-cycle */
import listen from './eventListeners';

const showDataToUser = (data) => {
  const currentWeather = document.getElementById('weather-widget');

  currentWeather.innerHTML = `
        <div class="current-weather reveal">
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
          <div class="other-data reveal">
            <p class="feels-like ">feels like: <span class="temp-value">${
              data.main.feels_like
            }°K</span></p>
            <p class="humidity">humidity: ${data.main.humidity}%</p>
            <p class="wind">${(data.wind.speed * 3.6).toFixed()}km/h</p>
          </div>
        </div>
        <div class="time-place reveal">
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
      dayDiv.style.opacity = `0`
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
    setTimeout(() => dayDiv.classList.add('reveal'), data.daily.indexOf(day) * 50);
  });
document.querySelector('.request-data').classList.remove('reveal');
  document.querySelector('.request-data').innerHTML = `
        <button id="auto-locate" class="button">Locate Me!</button>
        <span>OR</span>
        <form>
          <input type="text" id="search" placeholder="Enter City" />
          <div id="submit" class="button">Search</div>
        </form>`;
        listen();
  // eslint-disable-next-line no-console
  console.log(data);
};

export default showDataToUser;
