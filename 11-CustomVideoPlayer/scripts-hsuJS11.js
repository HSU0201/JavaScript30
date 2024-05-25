const player = document.querySelector(".player");
const video = player.querySelector(".viewer");
const progress = player.querySelector(".progress");
const progressBar = player.querySelector(".progress__filled");
const toggle = player.querySelector(".toggle");
const fullScreenBtn = player.querySelector(".fullScreenBtn ");
const ranges = player.querySelectorAll(".player__slider");
const skipButtons = player.querySelectorAll("[data-skip]");

function togglePlay() {
  const method = video.paused ? "play" : "pause";
  const icon = video.paused
    ? `<i class="bi bi-pause-fill"></i>`
    : `<i class="bi bi-play-fill"></i>`;
  toggle.innerHTML = icon;
  video[method]();
}
function handleRangeUpdate() {
  video[this.name] = this.value;
}
function skip() {
  video.currentTime += parseFloat(this.dataset.skip);
}

function handleProgress() {
  const percent = (video.currentTime / video.duration) * 100;
  progressBar.style.flexBasis = `${percent}%`;
}

function scrub(e) {
  const scrubTime = (e.offsetX / progress.offsetWidth) * video.duration;
  video.currentTime = scrubTime;
}

function fullScreen() {
  if (!document.fullscreenElement) {
    player.requestFullscreen().catch((err) => {
      alert(`嘗試啟用全螢幕模式時出錯: ${err.message} (${err.name})`);
    });
    fullScreenBtn.innerHTML = `
      <i class="bi-fullscreen"></i>
      <i class="bi bi-fullscreen-exit"></i>`;
  } else {
    document.exitFullscreen();
    fullScreenBtn.innerHTML = `
      <i class="bi-fullscreen"></i>          
      <i class="bi bi-arrows-fullscreen"></i>`;
  }
}

toggle.addEventListener("click", togglePlay);
video.addEventListener("click", togglePlay);
document.addEventListener("keydown", (e) => {
  if (e.code === "Space") {
    e.preventDefault;
    togglePlay();
  }
});
video.addEventListener("timeupdate", handleProgress);

ranges.forEach((range) => range.addEventListener("change", handleRangeUpdate));
ranges.forEach((range) =>
  range.addEventListener("mousemove", handleRangeUpdate)
);
skipButtons.forEach((skipButton) => skipButton.addEventListener("click", skip));

let mousedown = false;
progress.addEventListener("click", scrub);
progress.addEventListener("mousemove", (e) => mousedown && scrub(e));
progress.addEventListener("mousedown", () => (mousedown = true));
progress.addEventListener("mouseup", () => (mousedown = false));

fullScreenBtn.addEventListener("click", fullScreen);
