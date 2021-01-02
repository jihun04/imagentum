const linkBtn = document.querySelector(".link-btn"),
linkUrlInput = document.querySelector(".link-url-input"),
linkNameInput = document.querySelector(".link-name-input"),
imageColumns = document.querySelector(".image-columns"),
linkList = document.querySelector(".link-list"),
linkForm = document.querySelector(".link-form");

const LINKSTATE_LS = "link-state",
LINKBTN_ACTIVE_CN = "link-btn--active",
INPUT_BORDERRIGHTRADIUS_CN = "input--border-right-radius",
INPUT_NOTBORDERRADIUS_CN = "input--not-border-radius",
LINKS_LS = "links";

let links = [];

function saveLinks() {
  localStorage.setItem(LINKS_LS, JSON.stringify(links))
}

function genLinkId(id) {
  const sameId = links.filter(function(link) {
    return id === link.id
  })
  if(sameId.length === 0) {
    return id
  } else {
    genLinkId(id + 1);
  }
}

function addLink(event) {
  event.preventDefault();
  const urlValue = linkUrlInput.value;
  const nameValue = linkNameInput.value;
  linkUrlInput.value = "";
  linkNameInput.value = "";
  const linkObj = {
    name: nameValue,
    url: urlValue
  }
  links.push(linkObj);
  saveLinks();
  loadLink(nameValue, urlValue);
}

function eraseLinks() {
  linkBtn.classList.remove(LINKBTN_ACTIVE_CN);
  linkForm.classList.add(NONE);
  imageUrlForm.classList.remove(NONE);
  imageColumns.classList.remove(NONE);
  linkList.classList.add(NONE);
  localStorage.setItem(LINKSTATE_LS, "unactive");
}

function paintLinks() {
  linkBtn.classList.add(LINKBTN_ACTIVE_CN);
  linkForm.classList.remove(NONE);
  imageUrlForm.classList.add(NONE);
  imageColumns.classList.add(NONE);
  linkList.classList.remove(NONE);
  localStorage.setItem(LINKSTATE_LS, "active");
}

function modifyLink() {

}

function loadLink(name, url) {
  const li = document.createElement("li");
  const linkModify = document.createElement("div")
  const link = document.createElement("div");
  const linkMoreBtn = document.createElement("div");
  const linkFormModify = document.createElement("form");
  const linkUrlInputModify = document.createElement("input");
  const linkNameInputModify = document.createElement("input");
  const linkSubmitInput = document.createElement("input");
  const linkName = document.createElement("div");
  const linkNameSpan = document.createElement("span");
  const linkUrl = document.createElement("div");
  const linkUrlSpan = document.createElement("span");
  const ellipsisIcon = document.createElement("i");
  const linkMoreBtns = document.createElement("div");
  const linkModifyBtn = document.createElement("div");
  const linkModifyBtnSpan = document.createElement("span");
  const linkDeleteBtn = document.createElement("div");
  const linkDeleteBtnSpan = document.createElement("span");
  const id = links.length + 1;
  const newId = genLinkId(id);
  linkModify.classList.add("link--modify");
  link.classList.add("link");
  linkMoreBtn.classList.add("link-more-btn");
  linkFormModify.classList.add("link-form--modify");
  linkFormModify.classList.add(NONE);
  linkUrlInputModify.classList.add("link-url-input--modify");
  linkNameInputModify.classList.add("link-name-input--modify");
  linkName.classList.add("link__text");
  linkName.classList.add("link-name");
  linkUrl.classList.add("link__text");
  linkUrl.classList.add("link-url");
  ellipsisIcon.classList.add("fas");
  ellipsisIcon.classList.add("fa-ellipsis-v");
  linkMoreBtns.classList.add("link-more-btn__btns");
  linkMoreBtns.classList.add(NONE);
  linkModifyBtn.classList.add("link-modify-btn");
  linkDeleteBtn.classList.add("link-delete-btn");
  linkNameSpan.innerText = name;
  linkUrlSpan.innerText = url;
  linkModifyBtnSpan.innerText = "Modify";
  linkDeleteBtnSpan.innerText = "Delete";
  linkSubmitInput.classList.add(NONE);
  linkUrlInputModify.required = true;
  linkNameInputModify.required = true;
  linkUrlInputModify.type = "url";
  linkNameInputModify.type = "text";
  linkSubmitInput.type = "submit";
  linkUrlInputModify.placeholder = "Write a link";
  linkNameInputModify.placeholder = "Write a name";
  li.id = newId;
  li.appendChild(linkModify);
  li.appendChild(link);
  li.appendChild(linkMoreBtn);
  linkModify.appendChild(linkFormModify);
  linkFormModify.appendChild(linkUrlInputModify);
  linkFormModify.appendChild(linkNameInputModify);
  linkFormModify.appendChild(linkSubmitInput);
  link.appendChild(linkName);
  link.appendChild(linkUrl);
  linkName.appendChild(linkNameSpan);
  linkUrl.appendChild(linkUrlSpan);
  linkMoreBtn.appendChild(ellipsisIcon);
  linkMoreBtn.appendChild(linkMoreBtns);
  linkMoreBtns.appendChild(linkModifyBtn);
  linkMoreBtns.appendChild(linkDeleteBtn);
  linkModifyBtn.appendChild(linkModifyBtnSpan);
  linkDeleteBtn.appendChild(linkDeleteBtnSpan);
  linkFormModify.addEventListener("submit", modifyLink);
  linkList.prepend(li);
}

function loadLinkState() {
  const loadedLinkState = localStorage.getItem(LINKSTATE_LS);
  if(loadedLinkState === "active") {
    paintLinks();
  }
}

function loadLinks() {
  const loadedLinks = localStorage.getItem(LINKS_LS);
  if(loadedLinks !== null) {
    const parsed = JSON.parse(loadedLinks);
    parsed.forEach(function(link) {
      loadLink(link.name, link.url);
    })
  }
}

function handleLinkBtnClick() {
  const loadedLinkState = localStorage.getItem(LINKSTATE_LS);
  if(loadedLinkState === "active") {
    eraseLinks();
  } else {
    paintLinks();
  }
}

function init() {
  loadLinkState();
  loadLinks();
  linkBtn.addEventListener("click", handleLinkBtnClick);
  linkForm.addEventListener("submit", addLink);
}

init();