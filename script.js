let homeScore = 0;
let guestScore = 0;

let homeScoreDisplay = document.getElementById("home-score");
let guestScoreDisplay = document.getElementById("guest-score");
let btn1stQuarter = document.getElementById("1q");
let btn2ndQuarter = document.getElementById("2q");
let btn3rdQuarter = document.getElementById("3q");
let btn4thQuarter = document.getElementById("4q");

function homeAdd1() {
    homeScore += 1;
    homeScoreDisplay.textContent = homeScore;
}

function homeAdd2() {
    homeScore += 2;
    homeScoreDisplay.textContent = homeScore;
}

function homeAdd3() {
    homeScore += 3;
    homeScoreDisplay.textContent = homeScore;
}

function guestAdd1() {
    guestScore += 1;
    guestScoreDisplay.textContent = guestScore;
}

function guestAdd2() {
    guestScore += 2;
    guestScoreDisplay.textContent = guestScore;
}

function guestAdd3() {
    guestScore += 3;
    guestScoreDisplay.textContent = guestScore;
}

function newGame() {
    homeScore = 0;
    guestScore = 0;
    homeScoreDisplay.textContent = 0;
    guestScoreDisplay.textContent = 0;
    activateQuarter1()
}

function activateQuarter1() {
    btn1stQuarter.style.color = "#FCD34D"
    btn2ndQuarter.style.color = "#9AABD8"
    btn3rdQuarter.style.color = "#9AABD8"
    btn4thQuarter.style.color = "#9AABD8"
}

function activateQuarter2() {
    btn1stQuarter.style.color = "#9AABD8"
    btn2ndQuarter.style.color = "#FCD34D"
    btn3rdQuarter.style.color = "#9AABD8"
    btn4thQuarter.style.color = "#9AABD8"
}

function activateQuarter3() {
    btn1stQuarter.style.color = "#9AABD8"
    btn2ndQuarter.style.color = "#9AABD8"
    btn3rdQuarter.style.color = "#FCD34D"
    btn4thQuarter.style.color = "#9AABD8"
}

function activateQuarter4() {
    btn1stQuarter.style.color = "#9AABD8"
    btn2ndQuarter.style.color = "#9AABD8"
    btn3rdQuarter.style.color = "#9AABD8"
    btn4thQuarter.style.color = "#FCD34D"
}