/* eslint-disable no-param-reassign */
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

const listenToUnitButtons = () => {
  const units = document.querySelectorAll('.unit');
  const tempValues = document.querySelectorAll('.temp-value');

  units.forEach((unit) => {
    unit.addEventListener('click', () => {
      tempValues.forEach((value) => {
        value.innerHTML = 'test';
      });
    });
  });
};

const listen = () => {
  listenToLocateButton();
  listenToSearchButton();
  listenToUnitButtons();
};

export default listen;
