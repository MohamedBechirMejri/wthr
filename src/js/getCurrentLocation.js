/* eslint-disable no-console */
import grabWeatherData from './grabWeatherData';

const getCurrentLocation = () => {
  navigator.geolocation.getCurrentPosition((result) => {
    grabWeatherData(result.coords.latitude, result.coords.longitude);
  }, console.error);
};
export default getCurrentLocation;
