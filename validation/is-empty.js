const isEmpty = value =>
  value === undefined ||
  value === null ||
  // vvv If the keys length is 0 that means it's an empty object.
  (typeof value === "object" && Object.keys(value).length === 0) ||
  (typeof value === "string" && value.trim().length === 0);

module.exports = isEmpty;
