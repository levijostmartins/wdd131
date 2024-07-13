function calculateWindChill(temp, windSpeed) {
    // Wind chill formula for Celsius
    if (temp <= 10 && windSpeed > 4.8) {
        return (13.12 + 0.6215 * temp - 11.37 * Math.pow(windSpeed, 0.16) + 0.3965 * temp * Math.pow(windSpeed, 0.16)).toFixed(2);
    } else {
        return temp.toFixed(2);
    }
}

function updateWindChill() {
    // Read the temperature and wind speed from the HTML elements
    const temp = 7;  // Fixed temperature 7°C
    const windSpeed = 90;  // Fixed wind speed 90 km/h

    // Calculate the wind chill
    const result = calculateWindChill(temp, windSpeed);

    // Update the wind chill result in the HTML
    document.getElementById('windChillResult').textContent = `${result}°C`;
}

// Call updateWindChill once the page loads to set the initial value
document.addEventListener('DOMContentLoaded', updateWindChill);

// Update the current year in the footer
document.getElementById('currentyear').textContent = new Date().getFullYear();

// Update the last modified date in the footer
document.getElementById('lastModified').textContent = `Last Modified: ${document.lastModified}`;
