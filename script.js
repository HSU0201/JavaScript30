var days = [
  {
    no: "Day01",
    title: "JavaScript Drum Kit",
    desc: "創建一個可以透過按鍵發聲的爵士鼓應用程式。",
    blog: "",
    demo: "",
    github: "",
    gifYn: "Y",
  },
  {
    no: "Day02",
    title: "JS and CSS Clock",
    desc: "開發一個實時顯示時間的時鐘應用程式。",
    blog: "",
    demo: "",
    github: "",
    gifYn: "Y",
  },
  {
    no: "Day03",
    title: "CSS Variables",
    desc: "設計一個可調整圖片邊框、模糊度和黑白效果的濾鏡應用。",
    blog: "",
    demo: "",
    github: "",
    gifYn: "Y",
  },
  {
    no: "Day04",
    title: "Array Cardio Day 1",
    desc: "展示 filter、map、sort、reduce、includes 和 split 等方法的實際應用。",
    blog: "",
    demo: "",
    github: "",
    gifYn: "N",
  },
  {
    no: "Day05",
    title: "Flex Panel Gallery",
    desc: "開發一個具有動畫展開效果的圖片展示應用。",
    blog: "",
    demo: "",
    github: "",
    gifYn: "Y",
  },
  {
    no: "Day06",
    title: "Type Ahead",
    desc: "創建一個即時顯示搜尋結果的輸入框應用程式。",
    blog: "",
    demo: "",
    github: "",
    gifYn: "Y",
  },
  {
    no: "Day07",
    title: "Array Cardio Day 2",
    desc: "展示 some、every、find、findIndex 和 slice 方法的應用案例。",
    blog: "",
    demo: "",
    github: "",
    gifYn: "N",
  },
  {
    no: "Day08",
    title: "Fun with HTML5 Canvas",
    desc: "設計一個使用 HTML5 Canvas 的繪圖應用程式。",
    blog: "",
    demo: "",
    github: "",
    gifYn: "Y",
  },
  {
    no: "Day09",
    title: "Dev Tools Domination",
    desc: "介紹 Chrome 開發工具中的 DOM 斷點及各種 console 格式。",
    blog: "",
    demo: "",
    github: "",
    gifYn: "N",
  },
  {
    no: "Day10",
    title: "Hold Shift and Check Checkboxes",
    desc: "開發一個支援 Shift+點擊連續選取的清單應用。",
    blog: "",
    demo: "",
    github: "",
    gifYn: "Y",
  },
  {
    no: "Day11",
    title: "Custom Video Player",
    desc: "使用 HTML5 video 標籤創建一個自訂影片播放器。",
    blog: "",
    demo: "",
    github: "",
    gifYn: "Y",
  },
  {
    no: "Day12",
    title: "Key Sequence Detection",
    desc: "開發一個偵測連續輸入特定內容的應用程式。",
    blog: "",
    demo: "",
    github: "",
    gifYn: "Y",
  },
  {
    no: "Day13",
    title: "Slide in on Scroll",
    desc: "設計一個當畫面滾動到特定位置時顯示圖片的效果。",
    blog: "",
    demo: "",
    github: "",
    gifYn: "Y",
  },
  {
    no: "Day14",
    title: "JavaScript References VS Copying",
    desc: "介紹陣列和物件的引用與複製的區別。",
    blog: "",
    demo: "",
    github: "",
    gifYn: "N",
  },
  {
    no: "Day15",
    title: "LocalStorage",
    desc: "開發一個利用 localStorage 進行菜單增刪操作的應用程式。",
    blog: "",
    demo: "",
    github: "",
    gifYn: "Y",
  },
  {
    no: "Day16",
    title: "Mouse Move Shadow",
    desc: "設計一個根據滑鼠移動改變文字陰影的效果。",
    blog: "",
    demo: "",
    github: "",
    gifYn: "Y",
  },
  {
    no: "Day17",
    title: "Sort Without Articles",
    desc: "介紹如何在排序時排除特定字詞。",
    blog: "",
    demo: "",
    github: "",
    gifYn: "N",
  },
  {
    no: "Day18",
    title: "Adding Up Times with Reduce",
    desc: "使用 Array 的 map() 和 reduce() 方法計算播放清單的總時長。",
    blog: "",
    demo: "",
    github: "",
    gifYn: "N",
  },
  {
    no: "Day19",
    title: "Webcam Fun",
    desc: "利用 getUserMedia 和 canvas 來實現影像濾鏡效果。",
    blog: "",
    demo: "",
    github: "",
    gifYn: "Y",
  },
  {
    no: "Day20",
    title: "Speech Detection",
    desc: "開發一個將語音輸入轉換為文字的工具。",
    blog: "",
    demo: "",
    github: "",
    gifYn: "Y",
  },
  {
    no: "Day21",
    title: "Geolocation",
    desc: "創建一個顯示當前地理位置和速度的應用程式。",
    blog: "",
    demo: "",
    github: "",
    gifYn: "N",
  },
  {
    no: "Day22",
    title: "Follow Along Link Highlighter",
    desc: "設計一個會隨滑鼠移動的高亮效果。",
    blog: "",
    demo: "",
    github: "",
    gifYn: "Y",
  },
  {
    no: "Day23",
    title: "Speech Synthesis",
    desc: "開發一個將文字轉換為語音的工具。",
    blog: "",
    demo: "",
    github: "",
    gifYn: "Y",
  },
  {
    no: "Day24",
    title: "Sticky Nav",
    desc: "設計一個根據捲動位置變化樣式的固定導航欄。",
    blog: "",
    demo: "",
    github: "",
    gifYn: "Y",
  },
  {
    no: "Day25",
    title: "Event Capture, Propagation, Bubbling and Once",
    desc: "解析 addEventListener 方法中的捕捉、傳遞及單次執行功能。",
    blog: "",
    demo: "",
    github: "",
    gifYn: "N",
  },
  {
    no: "Day26",
    title: "Stripe Follow Along Nav",
    desc: "開發一個隨著滑鼠移動展開的導航選單效果。",
    blog: "",
    demo: "",
    github: "",
    gifYn: "Y",
  },
  {
    no: "Day27",
    title: "Click and Drag",
    desc: "創建一個可以拖曳移動的水平捲動應用。",
    blog: "",
    demo: "",
    github: "",
    gifYn: "Y",
  },
  {
    no: "Day28",
    title: "Video Speed Controller",
    desc: "設計一個可調節影片播放速度的控件。",
    blog: "",
    demo: "",
    github: "",
    gifYn: "Y",
  },
  {
    no: "Day29",
    title: "Countdown Timer",
    desc: "開發一個自定義時間的倒數計時器。",
    blog: "",
    demo: "",
    github: "",
    gifYn: "Y",
  },
  {
    no: "Day30",
    title: "Whack A Mole",
    desc: "創建一個打地鼠的小遊戲。",
    blog: "",
    demo: "",
    github: "",
    gifYn: "Y",
  },
];

function createView() {
  let main = document.querySelector(".main");
  let view = "";
  days.forEach((day) => {
    view += `<div class="card">
                <div class="tag">
                  <div class="tag-day">${day.no}</div>
                </div>
                <img
                class="img"
                src="https://via.placeholder.com/300"
                alt="${day.no}"
                />
                <div class="card-content">
                  <h3 class="card-title">${day.title}</h3>
                  <p class="card-text">
                      ${day.desc}
                  </p>
                </div>
                <div class="card-buttons">
                  <a class="card-btn" href="${day.demo}" target="_blank">DEMO</a>
                  <a class="card-btn" href="${day.github}" target="_blank">GitHub</a>
                </div>
            </div>`;
  });
  main.innerHTML = view;
}
document.addEventListener("DOMContentLoaded", createView);
