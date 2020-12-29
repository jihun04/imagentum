const imageColumn1 = document.querySelector(".image-column1"),
imageColumn2 = document.querySelector(".image-column2"),
bgImage = document.querySelector(".bgImage"),
randomBtn = document.querySelector(".random-btn"),
randomBtnCheckBox = randomBtn.querySelector("div"),
imageUrlForm = document.querySelector(".image-url-form"),
imageUrlInput = imageUrlForm.querySelector("input"),
imgUrlFormTimes = document.querySelector(".image-url-form__times"),
showImageScreen = document.querySelector(".show-image-screen"),
showedImage = showImageScreen.querySelector(".showed-image"),
bookmark = showImageScreen.querySelector(".show-image-screen__bookmark"),
showImageScreenTimes = showImageScreen.querySelector(".show-image-screen__times"),
showImageScreenLeft = showImageScreen.querySelector(".show-image-screen__left"),
showImageScreenRight = showImageScreen.querySelector(".show-image-screen__right");

const IMAGEURL_LS = "image-url",
IMAGEBOX_CN = "image-box",
IMAGE_CN = "image-box__image",
IMAGEBTNS_CN = "image-box__btns",
CHECKBOX_CN = "check-box",
CHECKED_CN = "checked",
RANDOMON_CN = "random--on",
NONEIMAGESRC_LS = "none-image-src",
HIDDEN_CN = "hidden",
BOOKMARK_LS = "bookmarks";

let imageUrl = [],
maxNumber = "",
number = 1,
imageSrc = [],
bookmarks = [],
newId = 0;

function getMaxNumber() {
  const imageUrls = localStorage.getItem(IMAGEURL_LS);
  if(imageUrls === null) {
    maxNumber = Math.ceil(IMG_NUMBER / 2);
  } else {
    imageUrl = JSON.parse(imageUrls);
    maxNumber = Math.ceil((IMG_NUMBER + imageUrl.length) / 2);
  }
}

function handleDelClick(targetImage, targetImageSrc) {
  const cleanImageUrl = imageUrl.filter(function(url) {
    return targetImageSrc !== url 
  })
  const targetImageBox = targetImage.parentNode;
  const targetImageColumn = targetImageBox.parentNode;
  targetImageColumn.removeChild(targetImageBox);
  imageUrl = cleanImageUrl;
  saveImageUrl();
}

function handleSelClick(firstChild, targetImageSrc) {
  const selected = document.querySelector(".checked");
  if(selected !== null) {
    selected.classList.remove(CHECKED_CN);
  }
  firstChild.classList.add(CHECKED_CN);
  bgImage.style.backgroundImage = `url('${targetImageSrc}')`;
  bgImageZIndexM2.style.backgroundImage = `url('${targetImageSrc}')`;
  localStorage.setItem(CURRENTIMAGESRC_LS, targetImageSrc);
}

function handleDSClick(event) {
  const target = event.target;
  const targetChildCount = target.childElementCount;
  let targetImageBtns = "";
  if(targetChildCount === 2) {
    targetImageBtns = target;
  } else {
    targetImageBtns = target.parentNode;
  }
  const firstChild = targetImageBtns.firstChild;
  const lastChild = targetImageBtns.lastChild;
  const lastChildText = lastChild.innerText;
  const targetImage = targetImageBtns.parentNode.previousSibling;
  const targetImageSrc = targetImage.src;
  if(lastChildText === "Delete") {
    handleDelClick(targetImage, targetImageSrc);
  } else {
    handleSelClick(firstChild, targetImageSrc);
  }
} 

function appearShowImageScreen(event) {
  const target = event.target;
  const targetSrc = target.src;
  showImageScreen.classList.remove(HIDDEN_CN);
  showedImage.src = targetSrc;
}

function genImageBoxCount() {
  return imageColumn1.childElementCount + imageColumn2.childElementCount
}

function genId(number) {
  const sameId = imageSrc.filter(function(src) {
    return number == src.id;
  })
  if(sameId.length === 0) {
    newId = number
  } else {
    genId(number += 1)
  }
}

function paintImage(src, div) {
  const currentImageSrc = localStorage.getItem(CURRENTIMAGESRC_LS);
  const Column1ChildCount = imageColumn1.childElementCount;
  const imageBox = document.createElement("div");
  const image = document.createElement("img");
  const imageBtns = document.createElement("div");
  const imageSelBtn = document.createElement("div");
  const selCheckBox = document.createElement("div");
  const selSpan = document.createElement("span");
  if(Column1ChildCount <= maxNumber) {
    imageColumn1.prepend(imageBox);
  } else {
    imageColumn2.prepend(imageBox);
  }
  const srcIdNumber = genImageBoxCount()
  genId(srcIdNumber);
  if(div === "on") {
    const imageDelBtn = document.createElement("div");
    const delCheckBox = document.createElement("div");
    const delSpan = document.createElement("span");
    imageBtns.appendChild(imageDelBtn);
    imageDelBtn.appendChild(delCheckBox);
    imageDelBtn.appendChild(delSpan);
    delCheckBox.classList.add(CHECKBOX_CN);
    imageDelBtn.addEventListener("click", handleDSClick);
    delSpan.innerText = "Delete";
  }
  imageBox.appendChild(image);
  imageBox.appendChild(imageBtns);
  imageBtns.prepend(imageSelBtn);
  imageSelBtn.appendChild(selCheckBox);
  imageSelBtn.appendChild(selSpan);
  imageBox.classList.add(IMAGEBOX_CN);
  image.classList.add(IMAGE_CN);
  imageBtns.classList.add(IMAGEBTNS_CN);
  selCheckBox.classList.add(CHECKBOX_CN);
  selSpan.innerText = "Select";
  if(div === "off") {
    src = `images/${src}.jpg`;
  }
  image.src = src;
  if(currentImageSrc === src) {
    selCheckBox.classList.add(CHECKED_CN);
  }
  image.id = newId;
  const srcObj = {
    id: newId,
    src: image.src
  }
  imageSrc.push(srcObj);
  image.addEventListener("click", appearShowImageScreen);
  imageSelBtn.addEventListener("click", handleDSClick);
}

function loadOffImage() {
  if(IMG_NUMBER >= number) {
    paintImage(number, "off");
    number += 1;
    loadOffImage();
  }
}

function loadImage() {
  loadOffImage();
  if(imageUrl !== []) {
    imageUrl.forEach(function(url) {
      paintImage(url, "on");
    }) 
  }
}

function loadRandomImage() {
  const randomImage = localStorage.getItem(RANDOMIMAGE_LS);
  if(randomImage === "off") {
    randomBtnCheckBox.classList.remove(RANDOMON_CN);
  } else {
    randomBtnCheckBox.classList.add(RANDOMON_CN);
  }
}

function handleRBtnClick() {
  const randomImage = localStorage.getItem(RANDOMIMAGE_LS);
  if(randomImage !== "on") {
    localStorage.setItem(RANDOMIMAGE_LS, "on")
    randomBtnCheckBox.classList.add(RANDOMON_CN);
  } else {
    localStorage.setItem(RANDOMIMAGE_LS, "off")
    randomBtnCheckBox.classList.remove(RANDOMON_CN);
  }
}

function saveImageUrl() {
  localStorage.setItem(IMAGEURL_LS, JSON.stringify(imageUrl));
}

function addImage(event) {
  event.preventDefault()
  const imageUrlInputValue = imageUrlInput.value;
  const sameImageUrl = imageUrl.filter(function(url) {
    return imageUrlInputValue === url;
  })
  imageUrlInput.value = "";
  if(sameImageUrl.length === 0) {
    imageUrl.push(imageUrlInputValue);
    paintImage(imageUrlInputValue, "on");
    saveImageUrl();
  }
}

function loadImgUrlFormTimes() {
  const noneImageSrc = localStorage.getItem(NONEIMAGESRC_LS);
  if(noneImageSrc === "on") {
    bgImage.src = "#";
  }
}

function loadBookmarks() {
  const currentBookmarks = localStorage.getItem(BOOKMARK_LS);
  if(currentBookmarks !== null) {
    bookmarks = JSON.parse(currentBookmarks);
  }
}

function handleImgUrlFormTimesClick() {
  if(bgImage.src == "https://jihun04.github.io/momentun/index.html#") {
    bgImage.src = bgImageZIndexM2.src;
    localStorage.setItem(NONEIMAGESRC_LS, "off");
  } else {
    bgImage.src = "#";
    localStorage.setItem(NONEIMAGESRC_LS, "on");
  }
}

function disappearShowImageScreen() {
  
}

function init() {
  getMaxNumber();
  loadImage();
  loadRandomImage();
  loadImgUrlFormTimes();
  loadBookmarks();
  randomBtn.addEventListener("click", handleRBtnClick);
  imageUrlForm.addEventListener("submit", addImage);
  imgUrlFormTimes.addEventListener("click", handleImgUrlFormTimesClick);
  showImageScreenTimes.addEventListener("click", disappearShowImageScreen);
}

init();