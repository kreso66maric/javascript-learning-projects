const lights = document.querySelectorAll('.light');
const switchBtn = document.querySelector('.switch');
slider = document.querySelector('input');

let lightsArray = Array.from(lights);

const colors = ['#D32F2F', '#C2185B', '#7B1FA2', '#512DA8', '#303F9F', '#1976D2', '#0288D1', '#00796B', '#AFB42B', '#FFA000', '#E64A19'];


    function lightsOn(light) {
        let intervalTime = slider.value;

        slider.addEventListener('change', (e) => {
            e.preventDefault();
            intervalTime = e.target.value;
            console.log(`Change: ${intervalTime}`);
        });


        setInterval(() => {
            let currentColor = light.style.background = colors[Math.floor(Math.random() * colors.length)];
            light.style.boxShadow = `0 5px 4px 8px ${currentColor}50`;
            // console.log(currentColor);
            // ! How to update interval time ?
        }, intervalTime);
        console.log(intervalTime);
    }

    
    // ! implement the switch lights feature
    switchBtn.addEventListener('click', (light) => {
        switchBtn.classList.toggle('switchOn');
    });

    
    lightsArray.forEach((light) => {
        lightsOn(light);
    });