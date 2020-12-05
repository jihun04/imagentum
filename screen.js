const btnIndex = document.querySelector(".index"),
btnMobile = document.querySelector(".index-mobile"),
headLink = document.querySelector("link");

const INDEXCSS_CN = "index.css",
MOBILECSS_CN = "index-mobile.css",
CURRENTPAGE_CN = "current-page";

function handleIndexClick() {
    btnIndex.classList.add(CURRENTPAGE_CN);
    btnMobile.classList.remove(CURRENTPAGE_CN);
    headLink.href = INDEXCSS_CN;
}

function handleMobileClick() {
    btnMobile.classList.add(CURRENTPAGE_CN);
    btnIndex.classList.remove(CURRENTPAGE_CN);
    headLink.href = MOBILECSS_CN;
}

function listenEvent() {
    btnIndex.addEventListener("click", handleIndexClick);
    btnMobile.addEventListener("click", handleMobileClick);
}

function init() {
    listenEvent();
}

init();