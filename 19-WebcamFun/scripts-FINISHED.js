// 獲取網頁中的元素
const video = document.querySelector(".player");
const canvas = document.querySelector(".photo");
const ctx = canvas.getContext("2d");
const strip = document.querySelector(".strip");
const snap = document.querySelector(".snap");

// 獲取用戶的攝像頭視訊
function getVideo() {
  navigator.mediaDevices
    .getUserMedia({ video: true, audio: false })
    .then((localMediaStream) => {
      console.log(localMediaStream);

      // DEPRECATION:
      // 以下方法已被主要瀏覽器如 Chrome 和 Firefox 廢棄
      // video.src = window.URL.createObjectURL(localMediaStream);
      // 請參考以下鏈接：
      // Deprecated  - https://developer.mozilla.org/en-US/docs/Web/API/URL/createObjectURL
      // Newer Syntax - https://developer.mozilla.org/en-US/docs/Web/API/HTMLMediaElement/srcObject

      // 使用新的語法將視訊流設置為 video 元素的來源
      video.srcObject = localMediaStream;
      video.play();
    })
    .catch((err) => {
      console.error(`OH NO!!!`, err); // 錯誤處理
    });
}

// 將視訊畫面繪製到 canvas 上
function paintToCanvas() {
  const width = video.videoWidth; // 獲取視訊寬度
  const height = video.videoHeight; // 獲取視訊高度
  canvas.width = width; // 設置 canvas 寬度
  canvas.height = height; // 設置 canvas 高度

  return setInterval(() => {
    ctx.drawImage(video, 0, 0, width, height); // 將視訊畫面繪製到 canvas 上
    // 獲取畫素數據
    let pixels = ctx.getImageData(0, 0, width, height);
    // 對畫素進行處理
    // pixels = redEffect(pixels); // 使用紅色效果（已註釋）

    pixels = rgbSplit(pixels); // 使用 RGB 分離效果
    // ctx.globalAlpha = 0.8; // 設置全局透明度（已註釋）

    // pixels = greenScreen(pixels); // 使用綠幕效果（已註釋）
    // 將處理後的畫素放回 canvas
    ctx.putImageData(pixels, 0, 0);
  }, 16); // 每 16 毫秒更新一次畫面
}

// 拍照功能
function takePhoto() {
  // 播放拍照聲音
  snap.currentTime = 0;
  snap.play();

  // 獲取 canvas 上的圖像數據
  const data = canvas.toDataURL("image/jpeg");
  const link = document.createElement("a");
  link.href = data; // 設置圖像數據的下載連結
  link.setAttribute("download", "handsome"); // 設置下載文件名
  link.innerHTML = `<img src="${data}" alt="Handsome Man" />`; // 將圖像嵌入到連結中
  strip.insertBefore(link, strip.firstChild); // 將新照片插入到照片列表的最前面
}

// 紅色效果
function redEffect(pixels) {
  for (let i = 0; i < pixels.data.length; i += 4) {
    pixels.data[i + 0] = pixels.data[i + 0] + 200; // 增加紅色值
    pixels.data[i + 1] = pixels.data[i + 1] - 50; // 減少綠色值
    pixels.data[i + 2] = pixels.data[i + 2] * 0.5; // 減少藍色值
  }
  return pixels;
}

// RGB 分離效果
function rgbSplit(pixels) {
  for (let i = 0; i < pixels.data.length; i += 4) {
    pixels.data[i - 150] = pixels.data[i + 0]; // 將紅色值移動
    pixels.data[i + 500] = pixels.data[i + 1]; // 將綠色值移動
    pixels.data[i - 550] = pixels.data[i + 2]; // 將藍色值移動
  }
  return pixels;
}

// 綠幕效果
function greenScreen(pixels) {
  const levels = {}; // 用於儲存色彩範圍的對象

  // 獲取用戶設定的色彩範圍
  document.querySelectorAll(".rgb input").forEach((input) => {
    levels[input.name] = input.value;
  });

  // 遍歷每個畫素
  for (i = 0; i < pixels.data.length; i = i + 4) {
    red = pixels.data[i + 0];
    green = pixels.data[i + 1];
    blue = pixels.data[i + 2];
    alpha = pixels.data[i + 3];

    // 如果畫素在設定的色彩範圍內，將其透明度設為0（隱藏）
    if (
      red >= levels.rmin &&
      green >= levels.gmin &&
      blue >= levels.bmin &&
      red <= levels.rmax &&
      green <= levels.gmax &&
      blue <= levels.bmax
    ) {
      pixels.data[i + 3] = 0;
    }
  }

  return pixels;
}

// 啟動攝像頭
getVideo();

// 當 video 元素可以播放時，將畫面繪製到 canvas 上
video.addEventListener("canplay", paintToCanvas);
