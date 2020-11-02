const linkDiv = document.querySelector(".js-linkDiv"),
linkCloseBtn = linkDiv.querySelector(".js-linkBtn--Close"),
linkList = linkDiv.querySelector(".js-linkList"),
linkForm = linkDiv.querySelector(".js-linkForm"),
linkInput = linkForm.querySelector("input"),
linkBtn = document.querySelector(".js-linkBtn");

function loadLink() {
}


function paintLinks() {
    linkDiv.classList.add(SHOWING_CN);
    linkBtn.addEventListener("click", closeLinks);
}

function closeLinks() {
    linkDiv.classList.remove(SHOWING_CN);
    linkBtn.addEventListener("click", paintLinks);
}

function init() {
    linkBtn.addEventListener("click", paintLinks);
    loadLink()
}

init();