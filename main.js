function showClock() {
  let h = document.getElementsByClassName('hr')[0];
  let m = document.getElementsByClassName('mn')[0];
  let s = document.getElementsByClassName('ss')[0];
  let period = document.getElementById('period');

  let date = new Date();
  let hours = date.getHours();
  let minutes = date.getMinutes();
  let seconds = date.getSeconds();
  let pe = "오전";

  if (hours === 0) {
      h = 12;
  }
  if (hours > 12) {
      hours = hours - 12;
      pe = "오후";
  }

  h.style.transform = `rotate(${30 * hours + minutes / 2}deg)`;
  m.style.transform = `rotate(${6 * minutes}deg)`;
  s.style.transform = `rotate(${6 * seconds}deg)`;

  period.innerHTML = pe;

  // let sound = new Audio('sound.mp3');
  // sound.play();
}

setInterval(showClock, 1000);