const lights = document.querySelectorAll('.light');
const switchBtn = document.querySelector('.switch');
const slider = document.querySelector('input');

let lightsArray = Array.from(lights);

const colors = ['#D32F2F', '#C2185B', '#7B1FA2', '#512DA8', '#303F9F', '#1976D2', '#0288D1', '#00796B', '#AFB42B', '#FFA000', '#E64A19'];

let interval;
let intervalTime = 500;


// Handles turning the lights on
function lightsOn() {
    interval = setInterval(() => {
        lightsArray.forEach((light) => {
            currentColor = light.style.background = colors[Math.floor(Math.random() * colors.length)];
            light.style.boxShadow = `0 5px 4px 8px ${currentColor}50`;
        });
    }, intervalTime);
}

// Handles turning the lights off
function lightsOff() {
    clearInterval(interval);
    lightsArray.forEach(light => {
        light.style.background = 'transparent';
        light.style.boxShadow = 'none';
    });
};

// Handles the switching button
function handlelightSwitch() {
    switchBtn.addEventListener('click', () => {

        switchBtn.classList.toggle('switchOn');

        if (switchBtn.dataset.switch === 'on') {
            switchBtn.setAttribute('data-switch', 'off');
            lightsOff();
        } else if (switchBtn.dataset.switch === 'off') {
            switchBtn.setAttribute('data-switch', 'on');
            lightsOn();
        }
    });
}



    // Main function
    function init() {
        handlelightSwitch();
    }

    init();