/* eslint-disable import/no-cycle */
import grabWeatherData, { grabNewData } from './grabWeatherData';
import showDataToUser from './showDataToUser';

const organizeData = async (location) => {
    document.querySelector('.request-data').innerHTML = ``;
    document.getElementById('daily-data').innerHTML = ``;
    document.getElementById('daily-data').style.padding = ``;
  document.getElementById('weather-widget').innerHTML = `
        <div class="waiting one"></div>
        <div class="waiting two"></div>
        <div class="waiting three"></div>`;

  const oldData = await grabWeatherData(location);
  /**/ const newData =
    await grabNewData(/* oldData.coord.lat, oldData.coord.lon */);
  // let city = await axios.get(`http://api.openweathermap.org/geo/1.0/reverse?lat=${oldData.coord.lat}&lon=${oldData.coord.lon}&appid=c8a1733571c211a516b796af5a8acda7`,);

  const { main, name, sys, weather, wind, visibility } = oldData;
  /**/ const { /* current, */ daily, hourly } = newData;
  // const { country } = city.data[0];
  // city = city.data[0].name;

  const data = {
    main,
    name,
    sys,
    weather,
    wind,
    visibility,
    // current,
    /**/ daily,
    /**/ hourly,
    // country,
    // city,
  };

  showDataToUser(data);
};
export default organizeData;
