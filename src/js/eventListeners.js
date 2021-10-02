import getCurrentLocation from './getCurrentLocation';

const listenToLocateButton = () => {
  const locateButton = document.getElementById('auto-locate');
  locateButton.addEventListener('click', () => {
    getCurrentLocation();
  });
};

const listen = () => {
  listenToLocateButton();
};

export default listen;
