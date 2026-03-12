const select = document.getElementById（'c1'）；
const content = document.getElementById('text');
// 定義更新字體大小的函式
function changeFontSize () {
// 取得目前選中選項的 value（例如“18px"）
const selectedSize = select.value;
// 將該值設定為日標區塊的 font-size
content. style.fontSize = selectedSize;

｝
// 監聽下拉選單的 change 事件（當使用者選擇不同選項時觸發）
select. addEventListener(' change', changeFontSize) ;
// 頁面載入時，先依據預設選項設定一次字體大小（確保與 selected 選項一致）
changeFontSize();
