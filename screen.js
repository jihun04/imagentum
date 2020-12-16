const btnIndex = document.querySelector(".index"),
btnMobile = document.querySelector(".index-mobile"),
headLink = document.querySelector("link");

const INDEXCSS_CN = "index.css",
MOBILECSS_CN = "index-mobile.css",
CURRENTPAGE_CN = "current-page",
SCREEN_LS = "screen";

function loadScreenCss() {
    const currentScreen = localStorage.getItem(SCREEN_LS);
    const screenWidth = window.innerWidth;
    const screenHeight = window.innerHeight;
    if(currentScreen === "big") {
        btnIndex.classList.add(CURRENTPAGE_CN);
        btnMobile.classList.remove(CURRENTPAGE_CN);
        headLink.href = INDEXCSS_CN;
    } else if(currentScreen === "small") {
        btnMobile.classList.add(CURRENTPAGE_CN);
        btnIndex.classList.remove(CURRENTPAGE_CN);
        headLink.href = MOBILECSS_CN;
    }
    if(screenWidth <= 680 || screenHeight <= 650 && currentScreen !== "small") {
        btnMobile.classList.add(CURRENTPAGE_CN);
        btnIndex.classList.remove(CURRENTPAGE_CN);
        headLink.href = MOBILECSS_CN;
        localStorage.setItem(SCREEN_LS, "small");
    }
}

function handleIndexClick() {
    btnIndex.classList.add(CURRENTPAGE_CN);
    btnMobile.classList.remove(CURRENTPAGE_CN);
    headLink.href = INDEXCSS_CN;
    localStorage.setItem(SCREEN_LS, "big");
}

function handleMobileClick() {
    btnMobile.classList.add(CURRENTPAGE_CN);
    btnIndex.classList.remove(CURRENTPAGE_CN);
    headLink.href = MOBILECSS_CN;
    localStorage.setItem(SCREEN_LS, "small");
}

function listenEvent() {
    btnIndex.addEventListener("click", handleIndexClick);
    btnMobile.addEventListener("click", handleMobileClick);
}

function init() {
    loadScreenCss();
    listenEvent();
}

init();