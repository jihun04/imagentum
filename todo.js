const toDoForm = document.querySelector(".ja-toDoFrom"),
toDoInput = toDoForm.querySelector("input"),
toDoList = document.querySelector(".js-toDoList"),
toDoBar = document.querySelector(".toDo-bar");

const TODOS_LS = "toDos",
TODOTEXT_CN = "toDo-text",
CLOSELIST_CN = "toDoList--close",
OPENLIST_CN = "toDoList--open",
APPEARTODOBAR_CN = "appear-toDo-bar",
DISAPPEARTODOBAR_CN = "disappear-toDo-bar";

let toDos = [];

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

function saveTodos() {
    localStorage.setItem(TODOS_LS, JSON.stringify(toDos));
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
    toDoList.appendChild(li);
    const toDoObj = {
        text: text,
        id: newId
    };
    toDos.push(toDoObj);
    saveTodos();
}

function handleToDoSubmit(event) {
    event.preventDefault();
    const currentValue = toDoInput.value;
    paintToDo(currentValue);
    toDoInput.value = "";
}

function handleToDoFormClick() {
    toDoList.classList.remove(CLOSELIST_CN);
    toDoList.classList.add(OPENLIST_CN);
    toDoBar.classList.remove(DISAPPEARTODOBAR_CN);
    toDoBar.classList.add(APPEARTODOBAR_CN);
}

function handleToDoBarClick() {
    toDoList.classList.add(CLOSELIST_CN);
    toDoList.classList.remove(OPENLIST_CN);
    toDoBar.classList.add(DISAPPEARTODOBAR_CN);
    toDoBar.classList.remove(APPEARTODOBAR_CN);
}

function loadToDos() {
    const loadedToDos = localStorage.getItem(TODOS_LS);
    if(loadedToDos !== null) {
        const parsedToDos = JSON.parse(loadedToDos);
        parsedToDos.forEach(function(toDo) {
            paintToDo(toDo.text);
        })
    }  
}

function init() {
    loadToDos();
    toDoForm.addEventListener("submit", handleToDoSubmit);
    toDoForm.addEventListener("click", handleToDoFormClick);
    toDoBar.addEventListener("click", handleToDoBarClick);
}
init()
