/* eslint-disable no-nested-ternary */
/* eslint-disable no-unused-expressions */
/* eslint-disable default-case */
const convertUnit = (value, unit) => {
  let u;
  const K = value;
  const C = K - 273.15;
  const F = (C * 9) / 5 + 32;

  unit === 'C' ? (u = C) : unit === 'F' ? (u = F) : (u = K);

  return u;
};

export default convertUnit;
