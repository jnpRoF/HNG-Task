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
setInterval(() => {
  let date = new Date();
  const time = date.getTime();
  timeText.innerHTML = time;
}, 1000);

dayText.innerHTML = dayArr[day];
