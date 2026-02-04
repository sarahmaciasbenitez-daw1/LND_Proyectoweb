const btn = document.getElementById("nostalgia-btn");
const audio = document.getElementById("nostalgia-audio");

audio.volume = 0.25;

btn.addEventListener("click", () => {
    if (audio.paused) {
        audio.play();
        btn.innerHTML = '<i class="fas fa-pause"></i> Pausar nostalgia';
    } else {
        audio.pause();
        btn.innerHTML = '<i class="fas fa-music"></i> Reproducir nostalgia';
    }
});


