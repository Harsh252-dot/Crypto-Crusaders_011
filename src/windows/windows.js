document.addEventListener('DOMContentLoaded', function () {
    const datetimeDisplay = document.getElementById('datetime');
    function getCurrentDateTime() {
        const now = new Date();
        const day = now.getDate();
        const month = now.getMonth();
        const year = now.getFullYear();
        const hours = String(now.getHours()).padStart(2, '0');
        const minutes = String(now.getMinutes()).padStart(2, '0'); 
        return `${day}-${month+1}-${year}\n${hours}:${minutes}`;
    }
    datetimeDisplay.textContent = getCurrentDateTime();
    setInterval(() => {
        datetimeDisplay.textContent = getCurrentDateTime();
    }, 1000);
});

window.onload = function() {
    if (performance.navigation.type === 1) {
        window.location.href = "startup.html";
    }
};

document.getElementById('brightnessRange').addEventListener('input', function() {
    var brightnessValue = this.value + '%';
    document.body.style.filter = 'brightness(' + brightnessValue + ')';
});

const clickableDiv = document.getElementById('last');
const slidingDiv = document.getElementById('lastdiv');

clickableDiv.addEventListener('click', () => {
    slidingDiv.classList.toggle('slide-in');
    slidingDiv.classList.toggle('slide-out');
});

const startBtn = document.getElementById('startBtn');
const start = document.getElementById('start');

startBtn.addEventListener('click', () => {
    start.classList.toggle('slide-in');
    start.classList.toggle('slide-out');
});