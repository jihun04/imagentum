const toDoForm = document.querySelector(".ja-toDoFrom"),
toDoInput = toDoForm.querySelector("input"),
toDoList = document.querySelector(".js-toDoList"),
toDoListDone = document.querySelector(".js-toDoList--done"),
toDoBar = document.querySelector(".toDo-bar"),
toDoListsBtns = document.querySelector(".toDoLists-btns"),
toDoListToDoBtn = toDoListsBtns.querySelector(".toDoLists-btns__toDo-btn"),
toDoListDoneBtn = toDoListsBtns.querySelector(".toDoLists-btns__done-btn");

const TODOS_LS = "toDos",
TODOSDONE_LS = "toDos--done",
TODOTEXT_CN = "toDo-text",
TODOTEXTDONE_CN = "toDo-text--done",
CLOSELIST_CN = "toDoList--close",
OPENLIST_CN = "toDoList--open",
APPEARTODOBAR_CN = "appear-toDo-bar",
DISAPPEARTODOBAR_CN = "disappear-toDo-bar",
APPEARTODOLISTSBTNS = "appear-toDoLists-btns",
DISAPPEARTODOLISTSBTNS = "disappear-toDoList-btns",
TODOLISTSTATUS_LS = "toDoListStatus",
CLICKEDLISTBTN_CN = "clicked-list-btn";

let listStatus = "";

let toDos = [];
let toDosDone = [];

function removeClickedToDoText(li) {
    toDoList.removeChild(li);
    const cleanToDos = toDos.filter(function(toDo) {
        return parseInt(li.id) !== toDo.id;
    })
    toDos = cleanToDos;
    saveTodos();
}

function handleToDoTextClick(event) {
    const text = event.target;
    paintToDoDone(text.innerText)
    if(text.className === "toDo-text") {
        const li = text.parentNode;
        removeClickedToDoText(li);
    } else {
        const li = text.parentNode.parentNode;
        removeClickedToDoText(li);
    }
}

function deleteToDo(event) {
    const btn = event.target;
    const li = btn.parentNode;
    toDoList.removeChild(li);
    const cleanToDos = toDos.filter(function(toDo) {
        return toDo.id !== parseInt(li.id);
    });
    toDos = cleanToDos;
    saveTodos();
}

function deleteToDoDone(event) {
    const btn = event.target;
    const li = btn.parentNode;
    toDoListDone.removeChild(li);
    const cleanToDos = toDosDone.filter(function(toDo) {
        return toDo.id !== parseInt(li.id);
    });
    toDosDone = cleanToDos;
    saveTodos();
}

function saveTodos() {
    localStorage.setItem(TODOS_LS, JSON.stringify(toDos));
    localStorage.setItem(TODOSDONE_LS, JSON.stringify(toDosDone));
}

function paintToDo(text) {
    const li = document.createElement("li");
    const delBtn = document.createElement("button");
    const toDoText = document.createElement("div");
    const span = document.createElement("span");
    const newId = toDos.length + 1;
    delBtn.innerText = "X";
    delBtn.addEventListener("click", deleteToDo);
    span.innerText = text;
    li.appendChild(delBtn);
    li.appendChild(toDoText);
    li.id = newId;
    toDoText.appendChild(span);
    toDoText.classList.add(TODOTEXT_CN);
    toDoText.addEventListener("click", handleToDoTextClick);
    toDoList.appendChild(li);
    const toDoObj = {
        text: text,
        id: newId
    };
    toDos.push(toDoObj);
    saveTodos();
}

function paintToDoDone(text) {
    const li = document.createElement("li");
    const delBtn = document.createElement("button");
    const toDoText = document.createElement("div");
    const span = document.createElement("span");
    const newId = toDosDone.length + 1;
    delBtn.innerText = "X";
    delBtn.addEventListener("click", deleteToDoDone);
    span.innerText = text;
    li.appendChild(delBtn);
    li.appendChild(toDoText);
    li.id = newId;
    toDoText.appendChild(span);
    toDoText.classList.add(TODOTEXT_CN);
    toDoText.classList.add(TODOTEXTDONE_CN);
    toDoListDone.prepend(li);
    const toDoObjDone = {
        text: text,
        id: newId
    };
    toDosDone.push(toDoObjDone);
    saveTodos();
}

function handleToDoSubmit(event) {
    const currentListStatus = localStorage.getItem(TODOLISTSTATUS_LS);
    event.preventDefault();
    if(currentListStatus === "toDo" || currentListStatus === "done") {
        const currentValue = toDoInput.value;
        paintToDo(currentValue);
    }
    toDoInput.value = "";
}

function handleToDoFormClick() {
    const currentListStatus = localStorage.getItem(TODOLISTSTATUS_LS);
    if(currentListStatus === "toDo") {
        toDoList.classList.remove(CLOSELIST_CN);
        toDoList.classList.add(OPENLIST_CN);
    }
    if(currentListStatus === "done") {
        toDoListDone.classList.remove(CLOSELIST_CN);
        toDoListDone.classList.add(OPENLIST_CN);
    }
    toDoBar.classList.remove(DISAPPEARTODOBAR_CN);
    toDoBar.classList.add(APPEARTODOBAR_CN);
    toDoListsBtns.classList.remove(APPEARTODOLISTSBTNS);
    toDoListsBtns.classList.add(DISAPPEARTODOLISTSBTNS);
}

function handleListStatus() {
    const currentListStatus = localStorage.getItem(TODOLISTSTATUS_LS);
    if(currentListStatus === "toDo") {
        toDoListToDoBtn.classList.add(CLICKEDLISTBTN_CN);
        toDoListDoneBtn.classList.remove(CLICKEDLISTBTN_CN);
    } else if(currentListStatus === "done") {
        toDoListToDoBtn.classList.remove(CLICKEDLISTBTN_CN);
        toDoListDoneBtn.classList.add(CLICKEDLISTBTN_CN);
    }
    if(currentListStatus === "toDo" || currentListStatus === "done") {
        toDoInput.placeholder = "Write a to do";
    } else {
        toDoInput.placeholder = "Please select";
    }
}

function handleListToDoClick() {
    listStatus = "toDo";
    localStorage.setItem(TODOLISTSTATUS_LS, listStatus);
    handleListStatus();
}

function handleListDoneClick() {
    listStatus = "done";
    localStorage.setItem(TODOLISTSTATUS_LS, listStatus);
    handleListStatus();
}

function handleToDoBarClick() {
    const currentListStatus = localStorage.getItem(TODOLISTSTATUS_LS);
    if(currentListStatus === "toDo") {
        toDoList.classList.add(CLOSELIST_CN);
        toDoList.classList.remove(OPENLIST_CN);
    }
    if(currentListStatus === "done") {
        toDoListDone.classList.add(CLOSELIST_CN);
        toDoListDone.classList.remove(OPENLIST_CN);
    }
    toDoBar.classList.add(DISAPPEARTODOBAR_CN);
    toDoBar.classList.remove(APPEARTODOBAR_CN);
    toDoListsBtns.classList.add(APPEARTODOLISTSBTNS);
    toDoListsBtns.classList.remove(DISAPPEARTODOLISTSBTNS);
    handleListStatus();
    toDoListToDoBtn.addEventListener("click", handleListToDoClick);
    toDoListDoneBtn.addEventListener("click", handleListDoneClick);
}

function askListStatus() {
    toDoList.classList.add(CLOSELIST_CN);
    toDoList.classList.remove(OPENLIST_CN);
    toDoBar.classList.add(DISAPPEARTODOBAR_CN);
    toDoBar.classList.remove(APPEARTODOBAR_CN);
    toDoListsBtns.classList.add(APPEARTODOLISTSBTNS);
    toDoListsBtns.classList.remove(DISAPPEARTODOLISTSBTNS);
    toDoListToDoBtn.addEventListener("click", handleListToDoClick);
    toDoListDoneBtn.addEventListener("click", handleListDoneClick);
}

function loadToDos() {
    const loadedToDos = localStorage.getItem(TODOS_LS);
    const loadedToDosDone = localStorage.getItem(TODOSDONE_LS);
    if(loadedToDos !== null) {
        const parsedToDos = JSON.parse(loadedToDos);
        parsedToDos.forEach(function(toDo) {
            paintToDo(toDo.text);
        })
    }
    if(loadedToDosDone !== null) {
        const parsedToDosDone = JSON.parse(loadedToDosDone);
        parsedToDosDone.forEach(function(toDo) {
            paintToDoDone(toDo.text);
        })
    }
}

function init() {
    loadToDos();
    askListStatus();
    handleListStatus();
    toDoForm.addEventListener("submit", handleToDoSubmit);
    toDoForm.addEventListener("click", handleToDoFormClick);
    toDoBar.addEventListener("click", handleToDoBarClick);
}
init()
