const integer = (min, max) =>
  parseInt(`${Math.random() * (max - min) + min}`, 10);

export { integer };
