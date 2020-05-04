import "./styles.css";

var aDay = 24 * 60 * 60 * 1000; // hours*minutes*seconds*milliseconds
let today = new Date();
let bolusBirthday = new Date(new Date().getFullYear(), 4, 12);
let isToday = today.getDate() !== 12 && today.getMonth() !== 4;
function getDays() {
  if (today.getMonth() === 4 && today.getDate() > 12) {
    bolusBirthday.setFullYear(bolusBirthday.getFullYear() + 1);
  }
  return Math.round(
    Math.ceil((bolusBirthday.getTime() - today.getTime()) / aDay)
  );
}

let days = getDays();

let message = "";

if (isToday) {
  message = "yes :)";
} else {
  message = `nope, *checks notes* ${days} ${days !== 1 ? "days" : "day"} left`;
}

document.getElementById("app").innerHTML = `
<span class="mb10 top-icon">🧁</span>
<div id="main">
<p class="hero-text mb10">${message}</p>
<p style="margin-top: 200px;">by <a href="https://leankhan.github.io">LeanKhan</a></p>
</div>
`;
