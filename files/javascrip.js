const timeDisplay = document.getElementById("timeDisplay");
function update() {
    const date = new Date();
    let minString = ""; let hrString = ""; let secString = "";
    if (date.getMinutes() <= 9) {
        minString = "0";
    }
    if (date.getHours() <= 9) {
        hrString = "0";
    }
    if (date.getSeconds() <= 9) {
        secString = "0";
    }
    timeDisplay.innerHTML = hrString + date.getHours() + ":" + minString + date.getMinutes() + ":" + secString + date.getSeconds();
    window.requestAnimationFrame(update);
}
function initialize() {
    update();
}
document.addEventListener("DOMContentLoaded", initialize);