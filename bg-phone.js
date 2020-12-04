const body = document.querySelector("body"),
imageName = document.querySelector(".js-img-name");

const IMG_NUMBER = 17;

function paintImage(imgNumber) {
    const image = new Image();
    image.src = `images/${imgNumber + 1}.jpg`;
    image.classList.add("bgImage");
    body.prepend(image);
    if(image.src === "https://jihun04.github.io/momentun/images/1.jpg") {
        imageName.innerText = `joel-holland-unsplash`;
    }
    if(image.src === "https://jihun04.github.io/momentun/images/2.jpg") {
        imageName.innerText = `ken-cheung-unsplash`;
    }
    if(image.src === "https://jihun04.github.io/momentun/images/3.jpg") {
        imageName.innerText = `marcelo-quinan-unsplash`;
    }
    if(image.src === "https://jihun04.github.io/momentun/images/4.jpg") {
        imageName.innerText = `mohammad-alizade-unsplash`;
    }
    if(image.src === "https://jihun04.github.io/momentun/images/5.jpg") {
        imageName.innerText = `robert-koorenny-unsplash`;
    }
    if(image.src === "https://jihun04.github.io/momentun/images/6.jpg") {
        imageName.innerText = `rodion-kutsaev-unsplash`;
    }
    if(image.src === "https://jihun04.github.io/momentun/images/7.jpg") {
        imageName.innerText = `sergey-pesterev-unsplash`;
    }
    if(image.src === "https://jihun04.github.io/momentun/images/8.jpg") {
        imageName.innerText = `silas-baisch-unsplash`;
    }
    if(image.src === "https://jihun04.github.io/momentun/images/9.jpg") {
        imageName.innerText = `alberto-restifo-unsplash`;
    }
    if(image.src === "https://jihun04.github.io/momentun/images/10.jpg") {
        imageName.innerText = `alberto-restifo-unsplash`;
    }
    if(image.src === "https://jihun04.github.io/momentun/images/11.jpg") {
        imageName.innerText = `ales-krivec-unsplash`;
    }
    if(image.src === "https://jihun04.github.io/momentun/images/12.jpg") {
        imageName.innerText = `claudio-testa-unsplash`;
    }
    if(image.src === "https://jihun04.github.io/momentun/images/13.jpg") {
        imageName.innerText = `david-marcu-unsplash`;
    }
    if(image.src === "https://jihun04.github.io/momentun/images/14.jpg") {
        imageName.innerText = `jeremy-bishop-unsplash`;
    }
    if(image.src === "https://jihun04.github.io/momentun/images/15.jpg") {
        imageName.innerText = `marcelo-quinan-unsplash`;
    }
    if(image.src === "https://jihun04.github.io/momentun/images/16.jpg") {
        imageName.innerText = `matteo-minelli-unsplash`;
    }
    if(image.src === "https://jihun04.github.io/momentun/images/17.jpg") {
        imageName.innerText = `simon-berger-unsplash`;
    }
}

function genRamdom() {
    const number = Math.floor(Math.random() * IMG_NUMBER);
    return number;
}

function init() {
    const randomNumber = genRamdom();
    paintImage(randomNumber);
}

init();