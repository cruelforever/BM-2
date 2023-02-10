let count = 0;
let momUnderstand = false;

document.querySelector("#option1").addEventListener("click", function() {
  if (!momUnderstand) {
    document.querySelector("#result").innerHTML =
      "旁邊的媽媽生氣了，抱著小孩離開了，在Google Maps上留下了一顆星評價，說這家的牙醫很兇。安撫失敗";
  } else {
    document.querySelector("#result").innerHTML =
      "媽媽出去外面等，小孩哭一哭後發現沒用，終於冷靜下來，恭喜你完成安撫";
  }
});

document.querySelector("#option2").addEventListener("click", function() {
  count++;
  momUnderstand = true;
  if (count >= 3) {
    document.querySelector("#result").innerHTML =
      "媽媽生氣地說醫生你到底要不要治療我的小孩，然後抱著小孩離開，在Google Maps上留下了一顆星評價，說這家牙醫很沒用不會看小孩。安撫失敗";
  } else {
    document.querySelector("#result").innerHTML =
      "媽媽表示能理解我們的作法，他可以配合我們的指令";
  }
});