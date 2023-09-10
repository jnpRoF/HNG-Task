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

let date = new Date();
const day = date.getDay();
const time = date.getTime();

dayText.innerHTML = dayArr[day];
timeText.innerHTML = time;
