/* eslint-disable no-console */
import axios from 'axios';

const grabWeatherData = async (location) => {
  const weatherData = await axios.get(
    `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=c8a1733571c211a516b796af5a8acda7`,
  );
  console.log(weatherData.data);
  /* TODO: #1 switch to oneCall api
  const weatherData2 = await axios.get(
    `https://api.openweathermap.org/data/2.5/onecall?lat=9&lon=34&appid=c8a1733571c211a516b796af5a8acda7`,
  );
  */
};

export default grabWeatherData;
