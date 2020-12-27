const arrowBox = document.querySelector(".arrow-box"),
arrowIcon = arrowBox.querySelector("i");

const DOWN_CN = "fa-chevron-down",
UP_CN = "fa-chevron-up",
SPIN_CN = "spin-y-180",
POSITIONFIXED_CN = "position-fixed-top-0";

function pageUp() {
  document.documentElement.scrollTop = 0;
}

function pageDown() {
  document.documentElement.scrollTop = document.documentElement.scrollHeight;
}

function handleScroll() {
  const screenHeight = window.innerHeight;
  const scrollTop = document.documentElement.scrollTop;
  const top = screenHeight - scrollTop;
  if(top <= 0) {
    arrowBox.classList.add(POSITIONFIXED_CN);
    arrowBox.classList.remove(SPIN_CN);
    arrowIcon.classList.add(UP_CN);
    arrowIcon.classList.remove(DOWN_CN);
    arrowIcon.addEventListener("click", pageUp);
    arrowIcon.removeEventListener("click", pageDown);
  } else {
    arrowBox.classList.add(SPIN_CN)
    arrowBox.classList.remove(POSITIONFIXED_CN);
    arrowIcon.classList.add(DOWN_CN);
    arrowIcon.classList.remove(UP_CN);
    arrowIcon.addEventListener("click", pageDown);
    arrowIcon.removeEventListener("click", pageUp);
  }
}

function init() {
  handleScroll();
  window.addEventListener("scroll", handleScroll);
}

init();

// ELEMENT_NODE !== parentNode
// offsetTop: 726 -> -18 offsetTop은 엘리먼트로부터 탑까지 거리 여기선 div의 높이가 18이여서 744 - 18 = 726
// window의 innerHeight는 브라우저 창의 높이, window.screen.availHeight(또는 Width): 824는 노트북 스크린의 높이