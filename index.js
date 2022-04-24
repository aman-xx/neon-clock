setInterval(function () {
  let hours = document.getElementById("hours");
  let minutes = document.getElementById("minutes");
  let seconds = document.getElementById("seconds");
  let ampm = document.getElementById("ampm");

  let h = new Date().getHours();
  let m = new Date().getMinutes();
  let s = new Date().getSeconds();

  let hr_dot = document.querySelector(".hr_dot");
  let min_dot = document.querySelector(".min_dot");
  let sec_dot = document.querySelector(".sec_dot");

  if (h <= 12) {
    ampm.innerHTML = "AM";
  } else {
    ampm.innerHTML = "PM";
  }

  //24hr to 12hr
  if (h > 12) {
    h = h - 12;
  }

  //add zero before single digit
  if (h < 10) {
    h = "0" + h;
  }
  if (m < 10) {
    m = "0" + m;
  }
  if (s < 10) {
    s = "0" + s;
  }

  hours.innerHTML = h + "<br> <span>Hours</span>";
  minutes.innerHTML = m + "<br> <span>Minutes</span>";
  seconds.innerHTML = s + "<br> <span>Seconds</span>";

  hh.style.strokeDashoffset = 440 - (440 * h) / 12;
  mm.style.strokeDashoffset = 440 - (440 * m) / 60;
  ss.style.strokeDashoffset = 440 - (440 * s) / 60;

  hr_dot.style.transform = `rotate(${h * 30}deg)`;
  // 360/12=30
  min_dot.style.transform = `rotate(${m * 6}deg)`;
  // 360/60=6
  sec_dot.style.transform = `rotate(${s * 6}deg)`;
}, 1000);
