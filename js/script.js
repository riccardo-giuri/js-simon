/**
 * Date that i choose to start the countdown from
 * @type {Date}
 */
const objectDate = new Date("July 15 2023 09:30:00");

/**
 * Element HTML where i will print the countdown
 * @type {Element}
 */
const countdownElement = document.querySelector("#countdown");

/**
 * Update the value of the countdown
 */
function updateCountdown() {
    //current date
    const currentDate = new Date();

    //the difference between the 2 dates
    const timeDifference = objectDate - currentDate;

    //convertions from sec to different times
    const sec = Math.floor(timeDifference / 1000) % 60;
    const min = Math.floor(timeDifference / 1000 / 60) % 60;
    const hour = Math.floor(timeDifference / 1000 / 60 / 60) % 24;
    const days = Math.floor(timeDifference / 1000 / 60 / 60 / 24);

    //print the value in the container HTML
    countdownElement.innerHTML = `${days}gg : ${hour}ore : ${min}min : ${sec}sec`
}

//update the countdown function every second
setInterval(updateCountdown, 1000);