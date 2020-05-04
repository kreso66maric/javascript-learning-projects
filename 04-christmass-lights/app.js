lights = document.querySelectorAll('.light');


let lightsArray = Array.from(lights);

const colors = ['#D32F2F', '#C2185B', '#7B1FA2', '#512DA8', '#303F9F', '#1976D2', '#0288D1', '#00796B', '#AFB42B', '#FFA000', '#E64A19'];
const randomColor = Math.floor(Math.random() * colors.length);
const randomLight = Math.floor(Math.random() * lightsArray.length);
console.log(randomLight);

function lightsOn(light) {
        light.style.background = colors[randomNumber];
        light.style.boxShadow = `0 5px 4px 8px ${colors[randomNumber]}50`;
};



    lightsArray.forEach((light, index) => {
        console.log(index);
        console.log(lightsArray);
        lightsArray[index].style.background = colors[randomColor];
        lightsArray[index].style.boxShadow = `0 5px 4px 8px ${colors[randomColor]}50`;
    });


