import { formatTwoDigits } from "../reusable-variables.js";

const countDown = JSON.parse(localStorage.getItem("timeData")) || {
  hour: 19,
  minute: 50,
  seconds: 40,
};

// Helper function to format numbers to two digits

function settingTime() {
  countDown.hour = 0;
  countDown.minute = 0;
  countDown.seconds = 5;

  localStorage.setItem("timeData", JSON.stringify(countDown));
}

const countingDown = () => {
  setInterval(() => {
    if (countDown.seconds > 0) {
      countDown.seconds--;
    }

    if (countDown.seconds === 0 && countDown.minute > 0) {
      countDown.seconds = 59;

      countDown.minute--;
    }

    if (countDown.minute === 0 && countDown.hour > 0) {
      countDown.hour--;
    }

    restartingTimer();

    localStorage.setItem("timeData", JSON.stringify(countDown));

    document.querySelector(".bottomOA-LeftBottom").innerHTML = `
      <div class="tCD-Hour">${formatTwoDigits(countDown.hour)}</div>:
      <div class="tCD-minute">${formatTwoDigits(countDown.minute)}</div>:
      <div class="tCD-seconds">${formatTwoDigits(countDown.seconds)}</div>
    `;
  }, 1500);
};

function restartingTimer() {
  if (
    countDown.seconds === 0 &&
    countDown.minute === 0 &&
    countDown.hour === 0
  ) {
    setTimeout(() => {
      countDown.hour = 19;
      countDown.minute = 50;
      countDown.seconds = 41;

      localStorage.setItem("timeData", JSON.stringify(countDown));
    }, 2000);
  }
}

countingDown();
settingTime();

document.querySelector(".bottomOA-LeftBottom").innerHTML = `
  <div class="tCD-Hour">${countDown.hour}</div>:
  <div class="tCD-minute">${countDown.minute}</div>:
  <div class="tCD-seconds">${countDown.seconds}</div>
`;
