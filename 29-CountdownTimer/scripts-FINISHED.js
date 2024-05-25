let countdown; // 定義一個變量用來保存計時器的 ID
const timerDisplay = document.querySelector(".display__time-left"); // 選取顯示剩餘時間的元素
const endTime = document.querySelector(".display__end-time"); // 選取顯示結束時間的元素
const buttons = document.querySelectorAll("[data-time]"); // 選取所有帶有 data-time 屬性的按鈕

function timer(seconds) {
  // 清除任何現有的計時器
  clearInterval(countdown);

  const now = Date.now(); // 獲取當前時間的時間戳
  const then = now + seconds * 1000; // 計算計時器結束的時間戳
  displayTimeLeft(seconds); // 顯示剩餘時間
  displayEndTime(then); // 顯示結束時間

  countdown = setInterval(() => {
    const secondsLeft = Math.round((then - Date.now()) / 1000); // 計算剩餘秒數
    // 檢查是否需要停止計時器
    if (secondsLeft < 0) {
      clearInterval(countdown); // 停止計時器
      return;
    }
    // 顯示剩餘時間
    displayTimeLeft(secondsLeft);
  }, 1000); // 每秒更新一次
}

function displayTimeLeft(seconds) {
  const minutes = Math.floor(seconds / 60); // 計算剩餘的分鐘數
  const remainderSeconds = seconds % 60; // 計算剩餘的秒數
  const display = `${minutes}:${
    remainderSeconds < 10 ? "0" : ""
  }${remainderSeconds}`; // 格式化顯示時間
  document.title = display; // 更新網頁標題顯示剩餘時間
  timerDisplay.textContent = display; // 更新顯示剩餘時間的元素
}

function displayEndTime(timestamp) {
  const end = new Date(timestamp); // 將時間戳轉換為日期對象
  const hour = end.getHours(); // 獲取結束時間的小時部分
  const adjustedHour = hour > 12 ? hour - 12 : hour; // 調整為 12 小時制
  const minutes = end.getMinutes(); // 獲取結束時間的分鐘部分
  endTime.textContent = `Be Back At ${adjustedHour}:${
    minutes < 10 ? "0" : ""
  }${minutes}`; // 更新顯示結束時間的元素
}

function startTimer() {
  const seconds = parseInt(this.dataset.time); // 讀取按鈕的 data-time 屬性並轉換為秒數
  timer(seconds); // 啟動計時器
}

buttons.forEach((button) => button.addEventListener("click", startTimer)); // 為每個按鈕添加點擊事件監聽器
document.customForm.addEventListener("submit", function (e) {
  e.preventDefault(); // 阻止表單默認提交行為
  const mins = this.minutes.value; // 獲取表單輸入的分鐘數
  console.log(mins);
  timer(mins * 60); // 啟動計時器，轉換為秒數
  this.reset(); // 重置表單
});
