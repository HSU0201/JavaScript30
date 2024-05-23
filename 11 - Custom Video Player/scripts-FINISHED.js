/* Get Our Elements */
/* 取得我們的元素 */
const player = document.querySelector('.player');
const video = player.querySelector('.viewer');
const progress = player.querySelector('.progress');
const progressBar = player.querySelector('.progress__filled');
const toggle = player.querySelector('.toggle');
const skipButtons = player.querySelectorAll('[data-skip]');
const ranges = player.querySelectorAll('.player__slider');

/* Build out functions */
/* 建立功能 */
function togglePlay() {
  const method = video.paused ? 'play' : 'pause'; // 根據影片的播放狀態選擇方法
  video[method](); // 呼叫對應的方法
}

function updateButton() {
  const icon = this.paused ? '►' : '❚ ❚'; // 根據影片的播放狀態設定圖示
  console.log(icon);
  toggle.textContent = icon; // 更新按鈕上的圖示
}

function skip() {
  video.currentTime += parseFloat(this.dataset.skip); // 根據跳過的時間更新影片的當前時間
}

function handleRangeUpdate() {
  video[this.name] = this.value; // 根據滑桿的值更新影片的屬性（音量或播放速度）
}

function handleProgress() {
  const percent = (video.currentTime / video.duration) * 100; // 計算影片播放進度的百分比
  progressBar.style.flexBasis = `${percent}%`; // 更新進度條的寬度
}

function scrub(e) {
  const scrubTime = (e.offsetX / progress.offsetWidth) * video.duration; // 計算用戶點擊進度條的位置對應的時間
  video.currentTime = scrubTime; // 更新影片的當前時間
}

/* Hook up the event listeners */
/* 設置事件監聽器 */
video.addEventListener('click', togglePlay); // 點擊影片時切換播放/暫停
video.addEventListener('play', updateButton); // 影片播放時更新按鈕圖示
video.addEventListener('pause', updateButton); // 影片暫停時更新按鈕圖示
video.addEventListener('timeupdate', handleProgress); // 影片播放時更新進度條

toggle.addEventListener('click', togglePlay); // 點擊按鈕時切換播放/暫停
skipButtons.forEach(button => button.addEventListener('click', skip)); // 點擊跳過按鈕時跳過特定時間
ranges.forEach(range => range.addEventListener('change', handleRangeUpdate)); // 當滑桿的值改變時更新影片屬性
ranges.forEach(range => range.addEventListener('mousemove', handleRangeUpdate)); // 當滑桿被拖動時更新影片屬性

let mousedown = false;
progress.addEventListener('click', scrub); // 點擊進度條時更新影片時間
progress.addEventListener('mousemove', (e) => mousedown && scrub(e)); // 拖動進度條時更新影片時間
progress.addEventListener('mousedown', () => mousedown = true); // 按下滑鼠時設置滑鼠按下狀態
progress.addEventListener('mouseup', () => mousedown = false); // 放開滑鼠時取消滑鼠按下狀態
