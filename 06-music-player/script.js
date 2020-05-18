// Playlist

const playlist = [
    {
        artist: 'Derek Clegg',
        album: 'Solar',
        title: 'Found A Girl',
        src: 'https://files.freemusicarchive.org/storage-freemusicarchive-org/music/no_curator/Derek_Clegg/Solar/Derek_Clegg_-_05_-_Found_A_Girl.mp3',
        art: 'https://images.unsplash.com/photo-1559317456-86cdbb8b6161?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=900&q=60'
    },
    {
        artist: 'Scott Holmes',
        album: 'Inspiring & Upbeat Music',
        title: 'Clear Progress',
        src: 'https://files.freemusicarchive.org/storage-freemusicarchive-org/music/no_curator/Scott_Holmes/Inspiring__Upbeat_Music/Scott_Holmes_-_06_-_Clear_Progress.mp3',
        art: 'https://images.unsplash.com/photo-1587578075208-f206676d9860?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2002&q=80'
    },
    {
        artist: 'Pierce Murphy',
        album: 'This Isn\'t Magic It Is Just Music',
        title: 'Hey Mercy',
        src: 'https://files.freemusicarchive.org/storage-freemusicarchive-org/music/ccCommunity/Pierce_Murphy/This_Isnt_Magic_It_Is_Just_Music/Pierce_Murphy_-_05_-_Hey_Mercy.mp3',
        art: 'https://images.unsplash.com/photo-1547005327-ef75a6961556?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1694&q=80'
    },
    {
        artist: 'Don Aman',
        album: 'Starving',
        title: 'Blitzkrieg',
        src: 'https://files.freemusicarchive.org/storage-freemusicarchive-org/music/Ziklibrenbib/Don_Aman/Starving/Don_Aman_-_03_-_Blitzkrieg.mp3',
        art: 'https://images.unsplash.com/photo-1567234536523-fac657469ab7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=900&q=60'
    },
    {
        artist: 'The New Monitors',
        album: 'Rock Bottom',
        title: 'Sock Monkey',
        src: 'https://files.freemusicarchive.org/storage-freemusicarchive-org/music/Ziklibrenbib/The_New_Monitors/st/The_New_Monitors_-_05_-_Sock_Monkey.mp3',
        art: 'https://images.unsplash.com/photo-1581552466153-99a836403852?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=900&q=60'
    }
];

// <i class="fas fa-volume-down"></i> volume middle
// <i class="fas fa-volume-mute"></i> volume mute


// Buttons
const heartBtn = document.querySelector('.fa-heart');
const playButton = document.querySelector('.fa-play');
const volumeButtonUp = document.querySelector('.fa-volume-up');
const buttonForward = document.querySelector('.fa-forward');
const buttonBackward = document.querySelector('.fa-backward');

// Artist info
const artist = document.querySelector('.artist');
const artistTitle = document.querySelector('.artist-title');
const artistAlbum = document.querySelector('.artist-album');

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
    console.log(scrubTime);
}

function handleVolumeSlider(e) {
    const volumeProgress = document.querySelector('.volume-progress');
    
    volumeProgress.style.flexBasis = `${e.offsetX}%`;
    let volume = (e.offsetX / volumeSlider.offsetWidth).toFixed(1);
    audio.volume = volume;

    console.log(audio.volume);

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
    
console.log(audio);
function handleForward() {
    // playlist.forEach(item => {
    //     console.log(item.title);
    // });
    audio.setAttribute('src', playlist[0].src);
    // console.log(playlist[0].src);
}

function handleBackward() {
    console.log('backward');
}

function toggleAudio() {
    console.log(playButton);

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
buttonForward.addEventListener('click', handleForward);
buttonBackward.addEventListener('click', handleBackward);