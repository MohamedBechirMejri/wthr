import organizeData from './organizeData';

const getCurrentLocation = async () => {
  navigator.geolocation.getCurrentPosition(
    (result) => {
      const lat = result.coords.latitude;
      const lon = result.coords.longitude;
      organizeData(`lat=${lat}&lon=${lon}`);
    },
    (err) => {
      console.error(err);
    },
  );
};

export default getCurrentLocation;
