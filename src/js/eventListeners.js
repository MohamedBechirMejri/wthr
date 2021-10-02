import getCurrentLocation from './getCurrentLocation';
import organizeData from './organizeData';

const listenToLocateButton = () => {
  const locateButton = document.getElementById('auto-locate');
  locateButton.addEventListener('click', () => {
    getCurrentLocation();
  });
};

const listenToSearchButton = () => {
  const input = document.querySelector('input');
  const submitButton = document.getElementById('submit');

  submitButton.addEventListener('click', () => {
    organizeData(`q=${input.value}`);
  });
};

const listen = () => {
  listenToLocateButton();
  listenToSearchButton();
};

export default listen;
