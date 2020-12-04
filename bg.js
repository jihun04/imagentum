const body = document.querySelector("body"),
imageName = document.querySelector(".js-img-name"),
unsplash = document.querySelector(".unsplash");

const IMG_NUMBER = 17,
CURSORPOINTER_CN = "cursor--pointer";

function clockRandomColor() {
    const R = genRGB();
    const G = genRGB();
    const B = genRGB();
    const A = genA();
    clockContainer.style.color = `rgba(${R}, ${G}, ${B}, ${A})`;
}

function handleUnsplashClick(event) {
    const target = event.target;
    const imageNameText = target.parentNode;
    const text = document.createElement("span");
    text.classList.add(CURSORPOINTER_CN);
    text.addEventListener("click", handleUnsplashClick);
    text.innerText = "-unsplash";
    imageNameText.appendChild(text);
    target.classList.remove(CURSORPOINTER_CN);
    target.removeEventListener("click", handleUnsplashClick);
    if(imageNameText.childElementCount === 3) {
        const R = genRGB();
        const G = genRGB();
        const B = genRGB();
        clockContainer.style.color = `rgb(${R}, ${G}, ${B})`;
    }
    if(imageNameText.childElementCount === 4) {
        const A = genA();
        clockContainer.style.opacity = `${A}`;
    }
    if(imageNameText.childElementCount >= 5) {
        localStorage.setItem(CLOCKCOLOR_LS, "on");
    }
}

function paintImageName(image) {
    if(image.src == "file:///C:/Users/yujih/Desktop/momentun/images/1.jpg") {
        imageName.innerText = `joel-holland`;
    }
    if(image.src == "file:///C:/Users/yujih/Desktop/momentun/images/2.jpg") {
        imageName.innerText = `ken-cheung`;
    }
    if(image.src == "file:///C:/Users/yujih/Desktop/momentun/images/3.jpg") {
        imageName.innerText = `marcelo-quinan`;
    }
    if(image.src == "file:///C:/Users/yujih/Desktop/momentun/images/4.jpg") {
        imageName.innerText = `mohammad-alizade`;
    }
    if(image.src == "file:///C:/Users/yujih/Desktop/momentun/images/5.jpg") {
        imageName.innerText = `robert-koorenny`;
    }
    if(image.src == "file:///C:/Users/yujih/Desktop/momentun/images/6.jpg") {
        imageName.innerText = `rodion-kutsaev`;
    }
    if(image.src == "file:///C:/Users/yujih/Desktop/momentun/images/7.jpg") {
        imageName.innerText = `sergey-pesterev`;
    }
    if(image.src == "file:///C:/Users/yujih/Desktop/momentun/images/8.jpg") {
        imageName.innerText = `silas-baisch`;
    }
    if(image.src == "file:///C:/Users/yujih/Desktop/momentun/images/9.jpg") {
        imageName.innerText = `alberto-restifo`;
    }
    if(image.src == "file:///C:/Users/yujih/Desktop/momentun/images/10.jpg") {
        imageName.innerText = `alberto-restifo`;
    }
    if(image.src == "file:///C:/Users/yujih/Desktop/momentun/images/11.jpg") {
        imageName.innerText = `ales-krivec`;
    }
    if(image.src == "file:///C:/Users/yujih/Desktop/momentun/images/12.jpg") {
        imageName.innerText = `claudio-testa`;
    }
    if(image.src == "file:///C:/Users/yujih/Desktop/momentun/images/13.jpg") {
        imageName.innerText = `david-marcu`;
    }
    if(image.src == "file:///C:/Users/yujih/Desktop/momentun/images/14.jpg") {
        imageName.innerText = `jeremy-bishop`;
    }
    if(image.src == "file:///C:/Users/yujih/Desktop/momentun/images/15.jpg") {
        imageName.innerText = `marcelo-quinan`;
    }
    if(image.src == "file:///C:/Users/yujih/Desktop/momentun/images/16.jpg") {
        imageName.innerText = `matteo-minelli`;
    }
    if(image.src == "file:///C:/Users/yujih/Desktop/momentun/images/17.jpg") {
        imageName.innerText = `simon-berger`;
    }
    unsplash.addEventListener("click", handleUnsplashClick);
}

function paintImage(imgNumber) {
    const image = new Image();
    image.src = `images/${imgNumber + 1}.jpg`;
    image.classList.add("bgImage");
    body.prepend(image);
    paintImageName(image);
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