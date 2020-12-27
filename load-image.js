const imageColumn1 = document.querySelector(".image-column1"),
imageColumn2 = document.querySelector(".image-column2"),
bgImage = document.querySelector(".bgImage");

const IMAGEURL_LS = "image-url",
IMAGEBOX_CN = "image-box",
IMAGE_CN = "image-box__image",
IMAGEBTNS_CN = "image-box__btns",
CHECKBOX_CN = "check-box",
CHECKED_CN = "checked";

let imageUrl = [],
maxNumber = "",
number = 1;

function getMaxNumber() {
  const imageUrls = localStorage.getItem(IMAGEURL_LS);
  if(imageUrls === null) {
    maxNumber = Math.ceil(IMG_NUMBER / 2);
  } else {
    const parsed = JSON.parse(imageUrls);
    maxNumber = Math.ceil((IMG_NUMBER + parsed.length) / 2);
  }
}

function handleDelClick(event) {
  const target = event.target;
  const targetChildCount = target.childElementCount;
  if(targetChildCount === 2) {
    const firstChild = target.firstChild;
    firstChild.classList.add(CHECKED_CN);
    const targetImageBox = target.parentNode.parentNode;
    const targetImageColumn = targetImageBox.parentNode;
    targetImageColumn.removeChild(targetImageBox);
  } else {
    if(target.localName === "div") {
      target.classList.add(CHECKED_CN);
    } else {
      target.previousSibling.classList.add(CHECKED_CN);
    }
    const targetImageBox = target.parentNode.parentNode.parentNode;
    const targetImageColumn = targetImageBox.parentNode;
    targetImageColumn.removeChild(targetImageBox);
  }
}

function handleSelClick(event) {
  const selected = document.querySelector(".checked");
  const target = event.target;
  const targetChildCount = target.childElementCount;
  selected.classList.remove(CHECKED_CN);
  if(targetChildCount === 2) {
    const firstChild = target.firstChild;
    firstChild.classList.add(CHECKED_CN);
    const targetImage = target.parentNode.previousSibling;
    const targetImageSrc = targetImage.src;
    bgImage.src = targetImageSrc;
  } else {
    if(target.localName === "div") {
      target.classList.add(CHECKED_CN);
    } else {
      target.previousSibling.classList.add(CHECKED_CN);
    }
    const targetImage = target.parentNode.parentNode.previousSibling;
    const targetImageSrc = targetImage.src;
    bgImage.src = targetImageSrc;
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
  if(div === "on") {
    const imageDelBtn = document.createElement("div");
    const delCheckBox = document.createElement("div");
    const delSpan = document.createElement("span");
    imageBtns.appendChild(imageDelBtn);
    imageDelBtn.appendChild(delCheckBox);
    imageDelBtn.appendChild(delSpan);
    delCheckBox.classList.add(CHECKBOX_CN);
    imageDelBtn.addEventListener("click", handleDelClick);
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
  imageSelBtn.addEventListener("click", handleSelClick);
  selSpan.innerText = "Select";
  if(div === "off") {
    image.src = `images/${src}.jpg`;
  } else if(div === "on") {
    image.src = src;
  }
  if(currentImageSrc === image.src) {
    selCheckBox.classList.add(CHECKED_CN);
  }
  if(Column1ChildCount <= maxNumber) {
    imageColumn1.appendChild(imageBox);
  } else {
    imageColumn2.appendChild(imageBox);
  }
}

function countNumber() {
  if(IMG_NUMBER >= number) {
    paintImage(number, "off");
    number += 1;
    countNumber();
  }
}

function loadImage() {
  const imageUrls = localStorage.getItem(IMAGEURL_LS);
  countNumber();
  if(imageUrls !== null) {
    const parsed = JSON.parse(imageUrls);
    parsed.forEach(function(url) {
      paintImage(url, "on");
    }) 
  }
}

function init() {
  getMaxNumber();
  loadImage();
  
}

init();