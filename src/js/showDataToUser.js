const showDataToUser = (data) => {
  const temp = document.getElementById('temp-value');
  const location = document.getElementById('location');
  const feelsLike = document.getElementById('feels-like');
  const clouds = document.getElementById('clouds');

  // eslint-disable-next-line no-console
  console.log(data);

  temp.innerHTML = (data.main.temp - 273.15).toFixed(0);
  location.innerHTML = data.city;
  feelsLike.innerHTML = (data.main.feels_like - 273.15).toFixed(0);
  clouds.innerHTML = data.current.weather[0].description;
};

export default showDataToUser;
