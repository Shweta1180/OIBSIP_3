function convertTemperature() {
    let temp = parseFloat(document.getElementById("temperature").value);
    let unit = document.getElementById("unit").value;
    let result = document.getElementById("result");

    if (isNaN(temp)) {
        result.textContent = "Please enter a valid number.";
        return;
    }

    let convertedTemp;
    let convertedUnit;

    switch (unit) {
        case "Celsius":
            convertedTemp = `${(temp * 9/5 + 32).toFixed(2)} °F, ${(temp + 273.15).toFixed(2)} K`;
            convertedUnit = "Fahrenheit and Kelvin";
            break;
        case "Fahrenheit":
            convertedTemp = `${((temp - 32) * 5/9).toFixed(2)} °C, ${((temp - 32) * 5/9 + 273.15).toFixed(2)} K`;
            convertedUnit = "Celsius and Kelvin";
            break;
        case "Kelvin":
            convertedTemp = `${(temp - 273.15).toFixed(2)} °C, ${((temp - 273.15) * 9/5 + 32).toFixed(2)} °F`;
            convertedUnit = "Celsius and Fahrenheit";
            break;
    }

    result.textContent = `Converted to ${convertedUnit}: ${convertedTemp}`;
}
