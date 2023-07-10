var currentIndex = 0;
var lines = document.getElementsByClassName("line");

setInterval(function () {
  // 현재 보이는 텍스트 요소 숨기기
  lines[currentIndex].style.display = "none";

  // 다음 텍스트 요소 보이기
  if (currentIndex < lines.length - 1) {
    currentIndex++;
  } else {
    currentIndex = 0;
  }
  lines[currentIndex].style.display = "block";
}, 3000);
