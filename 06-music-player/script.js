// Buttons
const heartBtn = document.querySelector('.fa-heart');
const playButton = document.querySelector('.fa-play');
const volumeButtonUp = document.querySelector('.fa-volume-up');
const buttonForward = document.querySelector('.fa-step-forward');
const buttonBackward = document.querySelector('.fa-step-backward');

// Artist info
const artist = document.querySelector('.artist');
const artistTitle = document.querySelector('.artist-title');
const artistAlbum = document.querySelector('.artist-album');
const albumCover = document.querySelector('.album-cover-img');

// Sliders
const bufferSlider = document.querySelector('.buffer-slider');
const volumeSlider = document.querySelector('.volume-slider');
// Audio
const audio = document.getElementById('audio');


function handleAudioTimeDuration() {
    const audioDuration = document.querySelector('.time-duration');
    let audioCurrentTime = document.querySelector('.time-left');

    // Take audio duration and update it
    const minutes = Math.floor((audio.duration / 60));
    const seconds = audio.duration - minutes * 60;

    audioDuration.textContent = `${minutes}:${Math.round(seconds)}`;
    
    // Updating audio current time
    audio.addEventListener('timeupdate', () => {
        const minutes = Math.floor((audio.currentTime / 60));
        const seconds = audio.currentTime - minutes * 60;
        
        audioCurrentTime.textContent = `${minutes}:${Math.round(seconds) < 10 ? '0' : ''}${Math.round(seconds)}`;
        // console.log(Math.round(seconds));
    });
}


function handleProgress() {
    const bufferProgress = document.querySelector('.buffer-progress');
    // get the percent and update css flex basis
    let percent = (audio.currentTime / audio.duration) * 100;

    bufferProgress.style.flexBasis = `${percent}%`;
}

function handleScrub(e) {
    const scrubTime = Math.round((e.offsetX / bufferSlider.offsetWidth) * audio.duration);
    audio.currentTime = scrubTime;
    // console.log(scrubTime);
}

function handleVolumeSlider(e) {
    const volumeProgress = document.querySelector('.volume-progress');
    
    volumeProgress.style.flexBasis = `${e.offsetX}%`;
    let volume = (e.offsetX / volumeSlider.offsetWidth).toFixed(1);
    audio.volume = volume;

    // console.log(audio.volume);

    if (audio.volume <= 0.5) {
        volumeButtonUp.classList.remove('fa-volume-up');
        volumeButtonUp.classList.add('fa-volume-down');
    } else {
        volumeButtonUp.classList.add('fa-volume-up');
    }

    if (audio.volume === 0) {
        volumeButtonUp.classList.add('fa-volume-mute');
    } else {
        volumeButtonUp.classList.remove('fa-volume-mute');
    }
}

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

audio.addEventListener('ended', (e) => {
    // Listen if audio has ended to change the icon
    if (e.target.ended) {
        playButton.classList.toggle('fa-play');
        playButton.classList.toggle('fa-pause');
    }
});


playButton.addEventListener('click', toggleAudio);
bufferSlider.addEventListener('click', handleScrub);
volumeSlider.addEventListener('click', handleVolumeSlider);