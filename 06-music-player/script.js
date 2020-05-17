const heartBtn = document.querySelector('.fa-heart');
const playButton = document.querySelector('.fa-play');
const bufferSlider = document.querySelector('.buffer-slider');
const audio = document.getElementById('audio');


function handleAudioTimeDuration() {
    const audioDuration = document.querySelector('.time-duration');
    let audioCurrentTime = document.querySelector('.time-left');

    // Take audio duration and update it
    const minutes = Math.floor((audio.duration / 60));
    const seconds = audio.duration - minutes * 60;
    console.log(minutes, Math.round(seconds));

    audioDuration.textContent = `${minutes}:${Math.round(seconds)}`;
    
    // Updating audio current time
    audio.addEventListener('timeupdate', () => {
        const minutes = Math.floor((audio.currentTime / 60));
        const seconds = audio.currentTime - minutes * 60;
        audioCurrentTime.textContent = `${minutes}:${Math.round(seconds)}`;
    });
}


function handleProgress() {
    const bufferProgress = document.querySelector('.buffer-progress');
    // get the percent and update css flex basis
    let percent = (audio.currentTime / audio.duration) * 100;

    bufferProgress.style.flexBasis = `${percent}%`;
}

function scrub(e) {
    const scrubTime = Math.round((e.layerX / bufferSlider.offsetWidth) * audio.duration);
    audio.currentTime = scrubTime;
    console.log(scrubTime);
}

function handleVolume() {
    const volumeProgress = document.querySelector('.volume-progress');
    
    let percent = audio.volume * 100;
    volumeProgress.style.flexBasis = `${percent}%`;

}

handleVolume();

function toggleAudio() {

    playButton.classList.toggle('fa-play');
    playButton.classList.toggle('fa-pause');

    if (audio.paused) {
        audio.play();
    } else {
        audio.pause();
    }
    handleAudioTimeDuration();
}



// Event Listeners
audio.addEventListener('timeupdate', handleProgress)
heartBtn.addEventListener('click', () => {
    heartBtn.classList.toggle('fa-heart-active');
});

playButton.addEventListener('click', toggleAudio);
bufferSlider.addEventListener('click', scrub);