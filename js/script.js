const objectDate = new Date("July 15 2023 09:30:00");
const countdownElement = document.querySelector("#countdown");

function updateCountdown() {
    const currentDate = new Date();

    const timeDifference = objectDate - currentDate;

    const sec = Math.floor(timeDifference / 1000) % 60;
    const min = Math.floor(timeDifference / 1000 / 60) % 60;
    const hour = Math.floor(timeDifference / 1000 / 60 / 60) % 24;
    const days = Math.floor(timeDifference / 1000 / 60 / 60 / 24);

    console.log(`il countdown è: ${days}: ${hour}: ${min}: ${sec}`);
    countdownElement.innerHTML = `${days}gg : ${hour}ore : ${min}min : ${sec}sec`
}

setInterval(updateCountdown, 1000);