const clockContainer = document.querySelector(".js-clock"),
clockTitle = clockContainer.querySelector(".js-title"),
timestamp = document.querySelector(".timestamp"),
timestampSpan = timestamp.querySelector("span");

const TIMESTAMP_LS = "timestamp",
APPEARTIMESTAMP_CN = "appear-timestamp",
DISAPPEARTIMESTAMP_CN = "disappear-timestamp",
RGB_LS = "rgb",
ALPHA_LS = "alpha",
CLOCKCOLOR_LS = "clock-color";

function genRGB() {
    const rgb = Math.ceil(Math.random() * 255);
    return rgb;
}

function genA() {
    const alpha = Math.random() * (0.9 - 0.6) + 0.6;
    return alpha;
}

function changeClockColor() {
    const R = genRGB();
    const G = genRGB();
    const B = genRGB();
    const alpha = genA();
    clockContainer.style.color = `rgba(${R}, ${G}, ${B}, ${alpha})`;
}

function getTime() {
    const clockColorLs = localStorage.getItem(CLOCKCOLOR_LS);
    const dates = new Date();
    const year = dates.getFullYear();
    let month = dates.getMonth();
    const date = dates.getDate();
    let day = dates.getDay();
    const minutes = dates.getMinutes();
    const hours = dates.getHours();
    if(month === 0) {
        month = "January";
    }
    if(month === 1) {
        month = "February";
    }
    if(month === 2) {
        month = "March";
    }
    if(month === 3) {
        month = "April";
    }
    if(month === 4) {
        month = "May";
    }
    if(month === 5) {
        month = "June";
    }
    if(month === 6) {
        month = "July";
    }
    if(month === 7) {
        month = "August";
    }
    if(month === 8) {
        month = "September";
    }
    if(month === 9) {
        month = "October";
    }
    if(month === 10) {
        month = "November";
    }
    if(month === 11) {
        month = "December";
    }
    if(day === 1) {
        day = "Mon";
    }
    if(day === 2) {
        day = "Tue";
    }
    if(day === 3) {
        day = "Wed";
    }
    if(day === 4) {
        day = "Thu";
    }
    if(day === 5) {
        day = "Fri";
    }
    if(day === 6) {
        day = "Sat";
    }
    if(day === 0) {
        day = "Sun";
    }
    clockTitle.innerText = `${hours < 10 ? `0${hours}` : hours}:${minutes < 10 ? `0${minutes}` : minutes}`;
    timestampSpan.innerText = `${month} ${date < 10 ? `0${date}` : date} ${day}, ${year}`;
    if(clockColorLs === "on") {
        changeClockColor();
    }
}

function appearTimestamp() {
    timestamp.classList.add(APPEARTIMESTAMP_CN);
    timestamp.classList.remove(DISAPPEARTIMESTAMP_CN);
}

function disappearTimestamp() {
    timestamp.classList.add(DISAPPEARTIMESTAMP_CN);
    timestamp.classList.remove(APPEARTIMESTAMP_CN);
}

function loadTimestamp() {
    const currentTimestamp = localStorage.getItem(TIMESTAMP_LS);
    if(currentTimestamp === "on") {
        appearTimestamp();
    } else if(currentTimestamp === "off") {
        disappearTimestamp();
    } else {
        localStorage.setItem(TIMESTAMP_LS, "off");
    }
}

function handleClockClick() {
    const currentTimestamp = localStorage.getItem(TIMESTAMP_LS);
    const clockColorLs = localStorage.getItem(CLOCKCOLOR_LS);
    if(currentTimestamp === "on" && clockColorLs !== "on") {
        localStorage.setItem(TIMESTAMP_LS, "off");
    } else if(currentTimestamp === "off" && clockColorLs !== "on") {
        localStorage.setItem(TIMESTAMP_LS, "on");
    }
    if(clockColorLs === "on") {
        localStorage.setItem(CLOCKCOLOR_LS, "off");
        clockContainer.style.color = "white";
    }
    loadTimestamp();
}

function init(){
    getTime();
    setInterval(getTime, 1000);
    loadTimestamp();
    clockContainer.addEventListener("click", handleClockClick);
};
init();