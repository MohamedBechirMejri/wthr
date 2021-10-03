/* eslint-disable no-param-reassign */
/* eslint-disable no-nested-ternary */
/* eslint-disable no-unused-expressions */
/* eslint-disable default-case */
const convertUnit = (value, from, to) => {
  value = +value;
  if (from === 'K') {
    to === 'C'
      ? (value = (value - 273.15).toFixed(0))
      : to === 'F'
      ? (value = (((value - 273.15) * 9) / 5 + 32).toFixed(0))
      : '';
  } else if (from === 'C') {
    to === 'K'
      ? (value = (value + 273.15).toFixed(2))
      : to === 'F'
      ? (value = ((value * 9) / 5 + 32).toFixed(0))
      : '';
  } else {
    to === 'C'
      ? (value = (((value - 32) * 5) / 9).toFixed(0))
      : to === 'K'
      ? (value = (((value - 32) * 5) / 9 + 273.15).toFixed(2))
      : '';
  }
  return `${value}°${to}`;
};

export default convertUnit;
