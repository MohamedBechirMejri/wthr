/* eslint-disable no-console */
import axios from 'axios';

const grabWeatherData = async (location) => {
  // location = lat=${lat}&lon=${lon} or q=${location}

  const weatherData = await axios.get(
    `https://api.openweathermap.org/data/2.5/weather?${location}&appid=c8a1733571c211a516b796af5a8acda7`,
  );
  return weatherData.data;
};
const grabNewData = async (lat, lon) => {
  const weatherData = await axios.get(
    `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&appid=c8a1733571c211a516b796af5a8acda7`,
  );
  return weatherData.data;
};
export { grabNewData, grabWeatherData as default };
