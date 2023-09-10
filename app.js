const dayText = document.querySelector(".day_text");
const timeText = document.querySelector(".time_text");
const dayArr = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

const date = new Date();
const day = date.getDay();
const time = date.getUTCMilliseconds();

dayText.innerHTML = dayArr[day];
timeText.innerHTML = time;
