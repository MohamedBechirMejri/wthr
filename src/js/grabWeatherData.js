/* eslint-disable no-console */
import axios from 'axios';

const grabWeatherData = async (lat, lon) => {
  const weatherData = await axios.get(
    `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&appid=c8a1733571c211a516b796af5a8acda7`,
  );
  console.log(weatherData.data);
};
const grabWeatherDataOldApi = async (location) => {
  const weatherData = await axios.get(
    `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=c8a1733571c211a516b796af5a8acda7`,
  );
  console.log(weatherData.data);
};
export { grabWeatherDataOldApi, grabWeatherData as default };
