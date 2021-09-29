const showDataToUser = (data) => {
  const temp = document.getElementById('temp-value');
  const location = document.getElementById('location');

    temp.innerHTML = (data.main.temp - 273.15).toFixed(0);
    location.innerHTML = data.city
    console.log(data);
};

export default showDataToUser;
