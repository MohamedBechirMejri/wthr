/* eslint-disable no-console */
import grabWeatherData from './grabWeatherData';

const getCurrentLocation = () => {
  navigator.geolocation.getCurrentPosition((result) => {
    const lat = result.coords.latitude;
    const lon = result.coords.longitude;

    grabWeatherData(`lat=${lat}&lon=${lon}`).catch(console.error);
  }, console.error);
};
export default getCurrentLocation;
