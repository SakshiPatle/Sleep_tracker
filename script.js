function calculateSleep() {
    const sleepTime = document.getElementById('sleep-time').value;
    const wakeUpTime = document.getElementById('wake-up-time').value;

    if (sleepTime && wakeUpTime) {
        const sleepDate = new Date(`01/01/2000 ${sleepTime}`);
        const wakeUpDate = new Date(`01/01/2000 ${wakeUpTime}`);

        if (wakeUpDate < sleepDate) {
            wakeUpDate.setDate(wakeUpDate.getDate() + 1);
        }

        const sleepMilliseconds = wakeUpDate - sleepDate;
        const sleepHours = Math.floor(sleepMilliseconds / (1000 * 60 * 60));
        const sleepMinutes = Math.floor((sleepMilliseconds % (1000 * 60 * 60)) / (1000 * 60));
        document.getElementById('sleep-hours').innerText = `${sleepHours}h ${sleepMinutes}m`;

        const resultBox = document.getElementById('result-box');
        const resultTitle = document.getElementById('result-title');
        const resultMessage = document.getElementById('result-message');

        resultBox.style.display = 'block';

        if (sleepHours >= 1 && sleepHours < 7) {
            resultTitle.innerText = 'Insufficient Sleep';
            resultMessage.innerHTML = 'Youre not getting enough sleep. Insufficient sleep can lead to various health issues such as fatigue, weakened immunity, decreased cognitive function, and impaired absorption of vitamins and minerals.';
        } else if (sleepHours >= 7 && sleepHours <= 9) {
            resultTitle.innerText = 'Optimal Sleep';
            resultMessage.innerHTML = 'Youre getting an optimal amount of sleep. This amount of sleep can help improve memory, reduce stress, boost your immune system, and aid in the absorption of vitamins and minerals.';
        } else if (sleepHours >= 9 && sleepHours <= 12) {
            resultTitle.innerText = 'Excessive Sleep';
            resultMessage.innerHTML = 'You are getting too much sleep. Excessive sleep can lead to health issues such as increased risk of diabetes, heart disease, and mental health issues.';
        } else {
            resultBox.style.display = 'none';
        }
    } else {
        alert('Please enter both sleep time and wake-up time.');
    }
}

document.addEventListener("DOMContentLoaded", function() {
    flatpickr("#calendar-input", {
        defaultDate: "today",
        clickOpens: true
    });
});
