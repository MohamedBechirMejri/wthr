/* eslint-disable no-console */
import axios from 'axios';

const grabWeatherData = async (location) => {
  // location = lat=${lat}&lon=${lon} or q=${location}

  /*
      const weatherData = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?${location}&appid=c8a1733571c211a516b796af5a8acda7`,
      );
        */

  const weatherData = {
    main: {
      temp: 301.03,
      feels_like: 300.85,
      temp_min: 300.03,
      temp_max: 301.03,
      pressure: 1022,
      humidity: 42,
    },
    name: 'Manouba',
    sys: {
      type: 1,
      id: 1194,
      country: 'TN',
      sunrise: 1632978833,
      sunset: 1633021501,
    },
    weather: [
      {
        id: 802,
        main: 'Clouds',
        description: 'scattered clouds',
        icon: '03d',
      },
    ],
    wind: {
      speed: 6.69,
      deg: 310,
    },
    visibility: 10000,
  };
  await new Promise((resolve) => setTimeout(resolve, 10000));

  // return weatherData.data;
    return weatherData;

};
const grabNewData = async (lat, lon) => {
  const weatherData = await axios.get(
    `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&appid=c8a1733571c211a516b796af5a8acda7`,
  );
  return weatherData.data;
};
export { grabNewData, grabWeatherData as default };
