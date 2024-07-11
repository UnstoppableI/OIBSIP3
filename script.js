function calculateTemp() {
    const temperatureInput = document.getElementById("temperature").value;
    const unitSelect = document.getElementById("unitSelect").value; 

    let convertedTemp;

    if (unitSelect === "cel") {
        // Convert Celsius to Fahrenheit
        convertedTemp = (temperatureInput * 9/5) + 32;
        document.getElementById("result").innerText = `${temperatureInput}°C is equal to ${convertedTemp.toFixed(2)}°F`;
    } else if (unitSelect === "fah") {
        // Convert Fahrenheit to Celsius
        convertedTemp = (temperatureInput - 32) * 5/9;
        document.getElementById("result").innerText = `${temperatureInput}°F is equal to ${convertedTemp.toFixed(2)}°C`;
    } else {
        document.getElementById("result").innerText = "Invalid selection";
    }

    return false; 
}