const inputNum = document.getElementById("input-num");
const maximit = 20;

inputNum.addEventListener("keyup", function (event) {
    const inputValue = parseInt(inputNum.value)
    if (inputValue > maximit) {
        inputNum.value = maximit;
    }

    if (event.key === "Enter") {
        inputNumber();
    }
});

inputNum.addEventListener("input", function () {
    const inputValue = parseInt(inputNum.value);
    if (inputNum > maximit) {
        inputNum.value = maximit;
    }
});

document.body.addEventListener("click", function (event) {
    if (event.target !== inputNum) {
        inputNumber();
    }
});

function inputNumber() {
    const inputValue = parseInt(inputNum.value);
    if (Number.isNaN(inputValue)) {
        alert("user can not enter more than 2 digit");
    }
    else {
        resetButton(inputValue);
    }
}

function resetButton(ip) {
    var x = Math.floor(Math.random() * ip) + 1;
    var y = Math.floor(Math.random() * ip) + 1;
    var z = Math.floor(Math.random() * ip) + 1;
    var w = Math.floor(Math.random() * ip) + 1;
    const fristBox = document.getElementById("box1");
    fristBox.innerHTML = x;
    const secondBox = document.getElementById("box2");
    secondBox.innerHTML = y;
    const thirdBox = document.getElementById("box3");
    thirdBox.innerHTML = z;
    const forthBox = document.getElementById("box4");
    forthBox.innerHTML = w;
}

function refreshButton() {
    const Rf = 0;
    var Boxes = document.querySelectorAll(".box");

    Boxes.forEach(box => {
        box.innerHTML = Rf;
    })
}