const body = document.querySelector("body"),
imageName = document.querySelector(".js-img-name"),
unsplash = document.querySelector(".unsplash");

const IMG_NUMBER = 61,
CURSORPOINTER_CN = "cursor--pointer";

// https://jihun04.github.io/momentun/images/

const FILE_NAME = "file:///C:/Users/yujih/Desktop/momentun/images/";

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
    if(image.src == `${FILE_NAME}1.jpg`) {
        imageName.innerText = `joel-holland`;
    }
    if(image.src == `${FILE_NAME}2.jpg`) {
        imageName.innerText = `ken-cheung`;
    }
    if(image.src == `${FILE_NAME}3.jpg`) {
        imageName.innerText = `marcelo-quinan`;
    }
    if(image.src == `${FILE_NAME}4.jpg`) {
        imageName.innerText = `mohammad-alizade`;
    }
    if(image.src == `${FILE_NAME}5.jpg`) {
        imageName.innerText = `robert-koorenny`;
    }
    if(image.src == `${FILE_NAME}6.jpg`) {
        imageName.innerText = `rodion-kutsaev`;
    }
    if(image.src == `${FILE_NAME}7.jpg`) {
        imageName.innerText = `sergey-pesterev`;
    }
    if(image.src == `${FILE_NAME}8.jpg`) {
        imageName.innerText = `silas-baisch`;
    }
    if(image.src == `${FILE_NAME}9.jpg`) {
        imageName.innerText = `alberto-restifo`;
    }
    if(image.src == `${FILE_NAME}10.jpg`) {
        imageName.innerText = `alberto-restifo`;
    }
    if(image.src == `${FILE_NAME}11.jpg`) {
        imageName.innerText = `ales-krivec`;
    }
    if(image.src == `${FILE_NAME}12.jpg`) {
        imageName.innerText = `claudio-testa`;
    }
    if(image.src == `${FILE_NAME}13.jpg`) {
        imageName.innerText = `david-marcu`;
    }
    if(image.src == `${FILE_NAME}14.jpg`) {
        imageName.innerText = `jeremy-bishop`;
    }
    if(image.src == `${FILE_NAME}15.jpg`) {
        imageName.innerText = `marcelo-quinan`;
    }
    if(image.src == `${FILE_NAME}16.jpg`) {
        imageName.innerText = `matteo-minelli`;
    }
    if(image.src == `${FILE_NAME}17.jpg`) {
        imageName.innerText = `simon-berger`;
    }
    if(image.src == `${FILE_NAME}18.jpg`) {
        imageName.innerText = `ales-krivec`;
    }
    if(image.src == `${FILE_NAME}19.jpg`) {
        imageName.innerText = `anders-jilden`;
    }
    if(image.src == `${FILE_NAME}20.jpg`) {
        imageName.innerText = `bailey-zindel`;
    }
    if(image.src == `${FILE_NAME}21.jpg`) {
        imageName.innerText = `carles-rabada`;
    }
    if(image.src == `${FILE_NAME}22.jpg`) {
        imageName.innerText = `corina-ardeleanu`;
    }
    if(image.src == `${FILE_NAME}23.jpg`) {
        imageName.innerText = `daniela-cuevas`;
    }
    if(image.src == `${FILE_NAME}24.jpg`) {
        imageName.innerText = `dave-hoefler`;
    }
    if(image.src == `${FILE_NAME}25.jpg`) {
        imageName.innerText = `davide-pietralunga`;
    }
    if(image.src == `${FILE_NAME}26.jpg`) {
        imageName.innerText = `denys-nevozhai`;
    }
    if(image.src == `${FILE_NAME}27.jpg`) {
        imageName.innerText = `erik-maurstad`;
    }
    if(image.src == `${FILE_NAME}28.jpg`) {
        imageName.innerText = `jasper-boer`;
    }
    if(image.src == `${FILE_NAME}29.jpg`) {
        imageName.innerText = `jesse-collins`;
    }
    if(image.src == `${FILE_NAME}30.jpg`) {
        imageName.innerText = `johannes-plenio`;
    }
    if(image.src == `${FILE_NAME}31.jpg`) {
        imageName.innerText = `josh-soto`;
    }
    if(image.src == `${FILE_NAME}32.jpg`) {
        imageName.innerText = `june`;
    }
    if(image.src == `${FILE_NAME}33.jpg`) {
        imageName.innerText = `kal-visuals`;
    }
    if(image.src == `${FILE_NAME}34.jpg`) {
        imageName.innerText = `ken-cheung`;
    }
    if(image.src == `${FILE_NAME}35.jpg`) {
        imageName.innerText = `ken-cheung`;
    }
    if(image.src == `${FILE_NAME}36.jpg`) {
        imageName.innerText = `luca-bravo`;
    }
    if(image.src == `${FILE_NAME}37.jpg`) {
        imageName.innerText = `lucas-ludwig`;
    }
    if(image.src == `${FILE_NAME}38.jpg`) {
        imageName.innerText = `michael-busch`;
    }
    if(image.src == `${FILE_NAME}39.jpg`) {
        imageName.innerText = `mostafa-meraji`;
    }
    if(image.src == `${FILE_NAME}40.jpg`) {
        imageName.innerText = `nick-russill`;
    }
    if(image.src == `${FILE_NAME}41.jpg`) {
        imageName.innerText = `nikhil-laddha`;
    }
    if(image.src == `${FILE_NAME}42.jpg`) {
        imageName.innerText = `patrick-tomasso`;
    }
    if(image.src == `${FILE_NAME}43.jpg`) {
        imageName.innerText = `pine-watt`;
    }
    if(image.src == `${FILE_NAME}44.jpg`) {
        imageName.innerText = `ramiz-dedakovic`;
    }
    if(image.src == `${FILE_NAME}45.jpg`) {
        imageName.innerText = `ross-stone`;
    }
    if(image.src == `${FILE_NAME}46.jpg`) {
        imageName.innerText = `ryan-schroeder`;
    }
    if(image.src == `${FILE_NAME}47.jpg`) {
        imageName.innerText = `sergio-franklin`;
    }
    if(image.src == `${FILE_NAME}48.jpg`) {
        imageName.innerText = `sharon-mccutcheon`;
    }
    if(image.src == `${FILE_NAME}49.jpg`) {
        imageName.innerText = `the-jd-darshan-solanki`;
    }
    if(image.src == `${FILE_NAME}50.jpg`) {
        imageName.innerText = `timj`;
    }
    if(image.src == `${FILE_NAME}51.jpg`) {
        imageName.innerText = `tobias-tullius`;
    }
    if(image.src == `${FILE_NAME}52.jpg`) {
        imageName.innerText = `tobias-tullius`;
    }
    if(image.src == `${FILE_NAME}53.jpg`) {
        imageName.innerText = `tyler-casey`;
    }
    if(image.src == `${FILE_NAME}54.jpg`) {
        imageName.innerText = `victor-ene`;
    }
    if(image.src == `${FILE_NAME}55.jpg`) {
        imageName.innerText = `viktor-darklight`;
    }
    if(image.src == `${FILE_NAME}56.jpg`) {
        imageName.innerText = `vince-gx`;
    }
    if(image.src == `${FILE_NAME}57.jpg`) {
        imageName.innerText = `vlad-gnatenko`;
    }
    if(image.src == `${FILE_NAME}58.jpg`) {
        imageName.innerText = `vlad-hilitanu`;
    }
    if(image.src == `${FILE_NAME}59.jpg`) {
        imageName.innerText = `w`;
    }
    if(image.src == `${FILE_NAME}60.jpg`) {
        imageName.innerText = `william-daigneault`;
    }
    if(image.src == `${FILE_NAME}61.jpg`) {
        imageName.innerText = `yong-chuan-tan`;
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