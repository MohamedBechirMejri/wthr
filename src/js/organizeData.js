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
    await grabNewData( oldData.coord.lat, oldData.coord.lon );

  const { main, name, sys, weather, wind, visibility } = oldData;
   const { daily, hourly } = newData;

  const data = {
    main,
    name,
    sys,
    weather,
    wind,
    visibility,
    daily,
    hourly,
  };

  showDataToUser(data);
};
export default organizeData;
