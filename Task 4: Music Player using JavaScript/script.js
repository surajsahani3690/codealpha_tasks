let songName = document.getElementById("song_name");
let songSinger = document.getElementById("artist");
let songImage = document.getElementById("image");
let playpauseBtn = document.getElementById("playpause");
let songRange = document.getElementById("duration");
let volumeControl = document.getElementById("volume");
let currentTimeDisplay = document.getElementById("current-time");
let totalDurationDisplay = document.getElementById("total-duration");
let playlistImg = document.querySelector("#playlist_icon");
let playlist = document.querySelector(".playlist");

let index = 0;
let track = document.getElementById("track"); 
let isPlaying = false;
let updateTimer;

let songs = [
  { name: "Warriyo", path: "Music1.mp3", image: "image1.jpg", singer: "Laura Brehm" },
  { name: "On And On", path: "Music2.mp3", image: "image2.jpg", singer: "Stephen Bishop" },
  {
    name: "Tony Mayhem",
    path: "Music3.mp3",
    image: "image3.jpg",
    singer: "Ravi Basrur"
  },
  {
    name: "Infected",
    path: "Music4.mp3",
    image: "image4.jpg",
    singer: "Sickick"
  },
  {
    name: "Passo Bem Solto",
    path: "Music5.mp3",
    image: "image5.jpeg",
    singer: "ATLXS"
  }
];

function loadTrack(i, autoplay = true) {
  clearInterval(updateTimer);
  resetSlider();
  track.src = songs[i].path;
  track.load();
  songName.textContent = songs[i].name;
  songSinger.textContent = songs[i].singer;
  songImage.style.backgroundImage = `url(${songs[i].image})`;
  updateTimer = setInterval(updateSlider, 500);
  
  if (autoplay) {
    playSong();
  } else {
    pauseSong(); 
  }
}


function playpause() {
  isPlaying ? pauseSong() : playSong();
}

function playSong() {
  track.play();
  isPlaying = true;
  playpauseBtn.classList.replace("fa-play", "fa-pause");
}

function pauseSong() {
  track.pause();
  isPlaying = false;
  playpauseBtn.classList.replace("fa-pause", "fa-play");
}

function next() {
  index = (index + 1) % songs.length;
  loadTrack(index);
  playSong();
}

function previous() {
  index = (index - 1 + songs.length) % songs.length;
  loadTrack(index);
  playSong();
}

function updateSlider() {
  if (!isNaN(track.duration)) {
    songRange.max = track.duration;
    songRange.value = track.currentTime;
    currentTimeDisplay.textContent = formatTime(track.currentTime);
    totalDurationDisplay.textContent = formatTime(track.duration);
  }
}

function resetSlider() {
  songRange.value = 0;
}

songRange.addEventListener("input", () => {
  track.currentTime = songRange.value;
});

volumeControl.addEventListener("input", () => {
  track.volume = volumeControl.value;
});

function formatTime(t) {
  let m = Math.floor(t / 60);
  let s = Math.floor(t % 60);
  return `${m < 10 ? "0" + m : m}:${s < 10 ? "0" + s : s}`;
}

playlistImg.addEventListener("click",()=>{
  playlist.classList.toggle("active")
})

window.addEventListener("DOMContentLoaded", () => {
  loadTrack(index, false);
});

