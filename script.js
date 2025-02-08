// temp conversion

const textBox = document.getElementById('textBox');
const toFahrenheit = document.getElementById('toFahrenheit');
const toCelsius = document.getElementById('toCelsius');
const result = document.getElementById('result');
let temp;

/**
 * Converts the temperature
 * @returns {void}
 */
function convertTemp() {
    temp = Number(textBox.value);
    if (toFahrenheit.checked) {
        result.innerHTML = `${temp}°C is ${(temp * 9 / 5 + 32).toFixed(2)}°F`;
    } else if (toCelsius.checked) {
        result.innerHTML = `${temp}°F is ${((temp - 32) * 5 / 9).toFixed(2)}°C`;
    }
}