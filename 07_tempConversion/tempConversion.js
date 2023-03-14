/**
 * Converts Fahrenheit to Celsius.
 * @param {number} temp The temperature in Fahrenheit.
 * @returns Temperature in Celsius.
 */
const convertToCelsius = function (temp) {
  tempToCelsius = (temp - 32) * (5 / 9);
  result = Math.round(tempToCelsius * 10) / 10;
  return result;
};

/**
 * Converts Celsius to Fahrenheit.
 * @param {number} temp The temperature in Celsius.
 * @returns Temperature in Fahrenheit.
 */
const convertToFahrenheit = function (temp) {
  tempToFahrenheit = temp * (9 / 5) + 32;
  result = Math.round(tempToFahrenheit * 10) / 10;
  return result;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit,
};
