/* eslint-disable import/no-cycle */
/* eslint-disable no-param-reassign */
import convertUnit from './convertUnit';
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
        let init = value.innerText.split('°');
        init = convertUnit(init[0], init[1], unit.innerText);

        value.innerText = init;
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
