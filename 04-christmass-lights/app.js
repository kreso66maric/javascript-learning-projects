const lights = document.querySelectorAll('.light');
const switchBtn = document.querySelector('.switch');
const slider = document.querySelector('input');

let lightsArray = Array.from(lights);

const colors = ['#D32F2F', '#C2185B', '#7B1FA2', '#512DA8', '#303F9F', '#1976D2', '#0288D1', '#00796B', '#AFB42B', '#FFA000', '#E64A19'];

let interval;
let intervalTime;

// Handles time interval for lights
function handleInterval(light) {
    interval = setInterval(() => {
        currentColor = light.style.background = colors[Math.floor(Math.random() * colors.length)];
        light.style.boxShadow = `0 5px 4px 8px ${currentColor}50`;

        // ! How to update interval time ?
    }, 1000);
}

// Handles slider for changing interval times
function handleSlider() {

    slider.addEventListener('change', (e) => {
        intervalTime = parseInt(e.target.value);
        console.log(`Change: ${intervalTime}`);
    });

    slider.addEventListener('mouseover', (e) => {
        intervalTime = parseInt(e.target.value);
        console.log(`Change: ${intervalTime}`);
    });
}

// Handles turning the lights on
function lightsOn() {
    lightsArray.forEach((light) => {
        handleInterval(light);
    });
}

function LightsOff() {
    // ! implement the switch lights feature
    switchBtn.addEventListener('click', () => {

        switchBtn.classList.toggle('switchOn');
    });
}


    // Main function
    function init() {
        lightsOn();
        handleSlider();
    }

    init();