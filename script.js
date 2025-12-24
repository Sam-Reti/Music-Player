let progress = document.getElementById("progress");
let song = document.getElementById("song");
let crtlIcon = document.getElementById("ctrlIcon");

song.onloadedmetadata = function () {
  progress.max = song.duration;
  progress.value = song.currentTime;
};

function playPause() {
  if (crtlIcon.classList.contains("fa-pause")) {
    song.pause();
    crtlIcon.classList.remove("fa-pause");
    crtlIcon.classList.add("fa-play");
  } else {
    song.play();
    crtlIcon.classList.add("fa-pause");
    crtlIcon.classList.remove("fa-play");
  }
}

if (song.play()) {
  setInterval(() => {
    progress.value = song.currentTime;
  }, 500);
}

progress.onchange = function () {
  song.play();
  song.currentTime = progress.value;
  crtlIcon.classList.add("fa-pause");
  crtlIcon.classList.remove("fa-play");
};

function reset() {
  song.currentTime = 0;
  progress.value = song.currentTime;
  song.pause();
}

//AI Generated Snow Fall
const snowCount = 80; // crank to 150+ if you want
const flakes = ["❄", "✻", "✼", "❅"];

for (let i = 0; i < snowCount; i++) {
  const flake = document.createElement("div");
  flake.className = "snowflake";
  flake.style.left = Math.random() * 100 + "vw";

  // Random fall speed + delay
  const fallDuration = 6 + Math.random() * 10; // 6–16s
  const fallDelay = Math.random() * 10; // 0–10s
  flake.style.animationDuration = fallDuration + "s";
  flake.style.animationDelay = fallDelay + "s";

  // Inner span handles drift + size
  const inner = document.createElement("span");
  inner.textContent = flakes[Math.floor(Math.random() * flakes.length)];

  const size = 10 + Math.random() * 22; // 10–32px
  inner.style.fontSize = size + "px";

  const driftDuration = 2 + Math.random() * 4; // 2–6s
  const driftDelay = Math.random() * 3; // 0–3s
  inner.style.animationDuration = driftDuration + "s";
  inner.style.animationDelay = driftDelay + "s";

  flake.appendChild(inner);
  document.body.appendChild(flake);
}
