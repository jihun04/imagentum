const body = document.querySelector("body"),
imageName = document.querySelector(".js-img-name"),
unsplash = document.querySelector(".unsplash"),
bgImageZIndexM2 = document.querySelector(".bgImage--z-index--2");

const IMG_NUMBER = 61,
CURSORPOINTER_CN = "cursor--pointer",
CURRENTIMAGESRC_LS = "current-image-src",
RANDOMIMAGE_LS = "random-image";

// https://jihun04.github.io/

let RANDOMCOLOR = "";

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
        RANDOMCOLOR = `rgb(${R}, ${G}, ${B})`;
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
    if(image.src == `https://jihun04.github.io/momentun/images/1.jpg`) {
        imageName.innerText = `joel-holland`;
    }
    if(image.src == `https://jihun04.github.io/momentun/images/2.jpg`) {
        imageName.innerText = `ken-cheung`;
    }
    if(image.src == `https://jihun04.github.io/momentun/images/3.jpg`) {
        imageName.innerText = `marcelo-quinan`;
    }
    if(image.src == `https://jihun04.github.io/momentun/images/4.jpg`) {
        imageName.innerText = `mohammad-alizade`;
    }
    if(image.src == `https://jihun04.github.io/momentun/images/5.jpg`) {
        imageName.innerText = `robert-koorenny`;
    }
    if(image.src == `https://jihun04.github.io/momentun/images/6.jpg`) {
        imageName.innerText = `rodion-kutsaev`;
    }
    if(image.src == `https://jihun04.github.io/momentun/images/7.jpg`) {
        imageName.innerText = `sergey-pesterev`;
    }
    if(image.src == `https://jihun04.github.io/momentun/images/8.jpg`) {
        imageName.innerText = `silas-baisch`;
    }
    if(image.src == `https://jihun04.github.io/momentun/images/9.jpg`) {
        imageName.innerText = `alberto-restifo`;
    }
    if(image.src == `https://jihun04.github.io/momentun/images/10.jpg`) {
        imageName.innerText = `alberto-restifo`;
    }
    if(image.src == `https://jihun04.github.io/momentun/images/11.jpg`) {
        imageName.innerText = `ales-krivec`;
    }
    if(image.src == `https://jihun04.github.io/momentun/images/12.jpg`) {
        imageName.innerText = `claudio-testa`;
    }
    if(image.src == `https://jihun04.github.io/momentun/images/13.jpg`) {
        imageName.innerText = `david-marcu`;
    }
    if(image.src == `https://jihun04.github.io/momentun/images/14.jpg`) {
        imageName.innerText = `jeremy-bishop`;
    }
    if(image.src == `https://jihun04.github.io/momentun/images/15.jpg`) {
        imageName.innerText = `marcelo-quinan`;
    }
    if(image.src == `https://jihun04.github.io/momentun/images/16.jpg`) {
        imageName.innerText = `matteo-minelli`;
    }
    if(image.src == `https://jihun04.github.io/momentun/images/17.jpg`) {
        imageName.innerText = `simon-berger`;
    }
    if(image.src == `https://jihun04.github.io/momentun/images/18.jpg`) {
        imageName.innerText = `ales-krivec`;
    }
    if(image.src == `https://jihun04.github.io/momentun/images/19.jpg`) {
        imageName.innerText = `anders-jilden`;
    }
    if(image.src == `https://jihun04.github.io/momentun/images/20.jpg`) {
        imageName.innerText = `bailey-zindel`;
    }
    if(image.src == `https://jihun04.github.io/momentun/images/21.jpg`) {
        imageName.innerText = `carles-rabada`;
    }
    if(image.src == `https://jihun04.github.io/momentun/images/22.jpg`) {
        imageName.innerText = `corina-ardeleanu`;
    }
    if(image.src == `https://jihun04.github.io/momentun/images/23.jpg`) {
        imageName.innerText = `daniela-cuevas`;
    }
    if(image.src == `https://jihun04.github.io/momentun/images/24.jpg`) {
        imageName.innerText = `dave-hoefler`;
    }
    if(image.src == `https://jihun04.github.io/momentun/images/25.jpg`) {
        imageName.innerText = `davide-pietralunga`;
    }
    if(image.src == `https://jihun04.github.io/momentun/images/26.jpg`) {
        imageName.innerText = `denys-nevozhai`;
    }
    if(image.src == `https://jihun04.github.io/momentun/images/27.jpg`) {
        imageName.innerText = `erik-maurstad`;
    }
    if(image.src == `https://jihun04.github.io/momentun/images/28.jpg`) {
        imageName.innerText = `jasper-boer`;
    }
    if(image.src == `https://jihun04.github.io/momentun/images/29.jpg`) {
        imageName.innerText = `jesse-collins`;
    }
    if(image.src == `https://jihun04.github.io/momentun/images/30.jpg`) {
        imageName.innerText = `johannes-plenio`;
    }
    if(image.src == `https://jihun04.github.io/momentun/images/31.jpg`) {
        imageName.innerText = `josh-soto`;
    }
    if(image.src == `https://jihun04.github.io/momentun/images/32.jpg`) {
        imageName.innerText = `june`;
    }
    if(image.src == `https://jihun04.github.io/momentun/images/33.jpg`) {
        imageName.innerText = `kal-visuals`;
    }
    if(image.src == `https://jihun04.github.io/momentun/images/34.jpg`) {
        imageName.innerText = `ken-cheung`;
    }
    if(image.src == `https://jihun04.github.io/momentun/images/35.jpg`) {
        imageName.innerText = `ken-cheung`;
    }
    if(image.src == `https://jihun04.github.io/momentun/images/36.jpg`) {
        imageName.innerText = `luca-bravo`;
    }
    if(image.src == `https://jihun04.github.io/momentun/images/37.jpg`) {
        imageName.innerText = `lucas-ludwig`;
    }
    if(image.src == `https://jihun04.github.io/momentun/images/38.jpg`) {
        imageName.innerText = `michael-busch`;
    }
    if(image.src == `https://jihun04.github.io/momentun/images/39.jpg`) {
        imageName.innerText = `mostafa-meraji`;
    }
    if(image.src == `https://jihun04.github.io/momentun/images/40.jpg`) {
        imageName.innerText = `nick-russill`;
    }
    if(image.src == `https://jihun04.github.io/momentun/images/41.jpg`) {
        imageName.innerText = `nikhil-laddha`;
    }
    if(image.src == `https://jihun04.github.io/momentun/images/42.jpg`) {
        imageName.innerText = `patrick-tomasso`;
    }
    if(image.src == `https://jihun04.github.io/momentun/images/43.jpg`) {
        imageName.innerText = `pine-watt`;
    }
    if(image.src == `https://jihun04.github.io/momentun/images/44.jpg`) {
        imageName.innerText = `ramiz-dedakovic`;
    }
    if(image.src == `https://jihun04.github.io/momentun/images/45.jpg`) {
        imageName.innerText = `ross-stone`;
    }
    if(image.src == `https://jihun04.github.io/momentun/images/46.jpg`) {
        imageName.innerText = `ryan-schroeder`;
    }
    if(image.src == `https://jihun04.github.io/momentun/images/47.jpg`) {
        imageName.innerText = `sergio-franklin`;
    }
    if(image.src == `https://jihun04.github.io/momentun/images/48.jpg`) {
        imageName.innerText = `sharon-mccutcheon`;
    }
    if(image.src == `https://jihun04.github.io/momentun/images/49.jpg`) {
        imageName.innerText = `the-jd-darshan-solanki`;
    }
    if(image.src == `https://jihun04.github.io/momentun/images/50.jpg`) {
        imageName.innerText = `timj`;
    }
    if(image.src == `https://jihun04.github.io/momentun/images/51.jpg`) {
        imageName.innerText = `tobias-tullius`;
    }
    if(image.src == `https://jihun04.github.io/momentun/images/52.jpg`) {
        imageName.innerText = `tobias-tullius`;
    }
    if(image.src == `https://jihun04.github.io/momentun/images/53.jpg`) {
        imageName.innerText = `tyler-casey`;
    }
    if(image.src == `https://jihun04.github.io/momentun/images/54.jpg`) {
        imageName.innerText = `victor-ene`;
    }
    if(image.src == `https://jihun04.github.io/momentun/images/55.jpg`) {
        imageName.innerText = `viktor-darklight`;
    }
    if(image.src == `https://jihun04.github.io/momentun/images/56.jpg`) {
        imageName.innerText = `vince-gx`;
    }
    if(image.src == `https://jihun04.github.io/momentun/images/57.jpg`) {
        imageName.innerText = `vlad-gnatenko`;
    }
    if(image.src == `https://jihun04.github.io/momentun/images/58.jpg`) {
        imageName.innerText = `vlad-hilitanu`;
    }
    if(image.src == `https://jihun04.github.io/momentun/images/59.jpg`) {
        imageName.innerText = `w`;
    }
    if(image.src == `https://jihun04.github.io/momentun/images/60.jpg`) {
        imageName.innerText = `william-daigneault`;
    }
    if(image.src == `https://jihun04.github.io/momentun/images/61.jpg`) {
        imageName.innerText = `yong-chuan-tan`;
    }
    unsplash.addEventListener("click", handleUnsplashClick);
}

function paintImage(imgNumber) {
    const randomImage = localStorage.getItem(RANDOMIMAGE_LS);
    const image = new Image();
    image.classList.add("bgImage");
    body.prepend(image);
    if(randomImage !== "off") {
        const src = `images/${imgNumber + 1}.jpg`;
        image.src = src;
        bgImageZIndexM2.src = src;
        localStorage.setItem(CURRENTIMAGESRC_LS, image.src);
    } else {
        const currentImageSrc = localStorage.getItem(CURRENTIMAGESRC_LS);
        image.src = currentImageSrc;
        bgImageZIndexM2.src = currentImageSrc;
    }
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