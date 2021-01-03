const headLink = document.querySelector("link");

const 
INDEXCSS_FN = "index.css",
MOBILECSS_FN = "index-mobile.css",
SCREEN_LS = "screen";

function loadScreenCss() {
    const currentScreen = localStorage.getItem(SCREEN_LS);
    const screenWidth = window.innerWidth;
    const screenHeight = window.innerHeight;
    if(currentScreen === "big") {
        headLink.href = INDEXCSS_FN;
    } else if(currentScreen === "small") {
        headLink.href = MOBILECSS_FN;
    }
    if(screenWidth <= 680 || screenHeight <= 650 && currentScreen !== "small") {
        headLink.href = MOBILECSS_FN;
        localStorage.setItem(SCREEN_LS, "small");
    } else {
        headLink.href = INDEXCSS_FN;
        localStorage.setItem(SCREEN_LS, "big");
    }
}

function handleResize() {
    const currentScreen = localStorage.getItem(SCREEN_LS);
    const screenWidth = window.innerWidth;
    const screenHeight = window.innerHeight;
    if(screenWidth <= 680 || screenHeight <= 650 && currentScreen !== "small") {
        headLink.href = MOBILECSS_FN;
        localStorage.setItem(SCREEN_LS, "small");
    } else {
        headLink.href = INDEXCSS_FN;
        localStorage.setItem(SCREEN_LS, "big");
    }
}

function init() {
    loadScreenCss();
    window.addEventListener("resize", handleResize);
}

init();