const imageColumn1 = document.querySelector(".image-column1"),
imageColumn2 = document.querySelector(".image-column2");

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
  const parsed = JSON.parse(imageUrls);
  maxNumber = Math.ceil((IMG_NUMBER + parsed.length) / 2)
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

}

function paintImage2(src, div) {
  const currentImageSrc = localStorage.getItem(CURRENTIMAGESRC_LS);
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
  imageColumn2.appendChild(imageBox);
  imageBox.appendChild(image);
  imageBox.appendChild(imageBtns);
  imageBtns.prepend(imageSelBtn);
  imageSelBtn.appendChild(selCheckBox);
  imageSelBtn.appendChild(selSpan);
  imageBox.classList.add(IMAGEBOX_CN);
  image.classList.add(IMAGE_CN);
  imageBtns.classList.add(IMAGEBTNS_CN);
  selCheckBox.classList.add(CHECKBOX_CN);
  selCheckBox.addEventListener("click", handleSelClick);
  selSpan.innerText = "Select";
  if(div === "off") {
    image.src = `images/${src}.jpg`;
  } else if(div === "on") {
    image.src = src;
  }
  if(currentImageSrc === image.src) {
    selCheckBox.classList.add(CHECKED_CN);
  }
}

function paintImage1(src, div) {
  const currentImageSrc = localStorage.getItem(CURRENTIMAGESRC_LS);
  const Column1ChildCount = imageColumn1.childElementCount;
  if(Column1ChildCount <= maxNumber) {
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
      delCheckBox.addEventListener("click", handleDelClick);
      delSpan.innerText = "Delete";
    }
    imageColumn1.appendChild(imageBox);
    imageBox.appendChild(image);
    imageBox.appendChild(imageBtns);
    imageBtns.prepend(imageSelBtn);
    imageSelBtn.appendChild(selCheckBox);
    imageSelBtn.appendChild(selSpan);
    imageBox.classList.add(IMAGEBOX_CN);
    image.classList.add(IMAGE_CN);
    imageBtns.classList.add(IMAGEBTNS_CN);
    selCheckBox.classList.add(CHECKBOX_CN);
    selCheckBox.addEventListener("click", handleSelClick);
    selSpan.innerText = "Select";
    if(div === "off") {
      image.src = `images/${src}.jpg`;
    } else if(div === "on") {
      image.src = src;
    }
    if(currentImageSrc === image.src) {
      selCheckBox.classList.add(CHECKED_CN);
    }
  } else {
    paintImage2(src, div);
  }
}

function countNumber() {
  if(IMG_NUMBER >= number) {
    paintImage1(number, "off");
    number += 1;
    countNumber();
  }
}

function loadImage() {
  const imageUrls = localStorage.getItem(IMAGEURL_LS);
  countNumber();
  if(imageUrls !== NONE) {
    const parsed = JSON.parse(imageUrls);
    parsed.forEach(function(url) {
      paintImage1(url, "on");
    }) 
  }
}

function init() {
  getMaxNumber();
  loadImage();
  
}

init();