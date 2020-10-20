var today = new Date();
var date =
  today.getDate() + "-" + (today.getMonth() + 1) + "-" + today.getFullYear();
document.getElementById("adate").innerHTML = date;

setInterval(clock, 500);
function clock() {
  var time = new Date();
  var hrs = time.getHours();
  var min = time.getMinutes();
  var sec = time.getSeconds();
  var a = "AM";

  if (hrs > 12) {
    a = "PM";
  }
  if (hrs > 12) {
    hrs = hrs - 12;
  }
  if (hrs == 0) {
    hrs = 12;
  }
  if (hrs < 10) {
    hrs = "0" + hrs;
  }
  if (min < 10) {
    min = "0" + min;
  }
  if (sec < 10) {
    sec = "0" + sec;
  }

  document.getElementById("time").innerHTML =
    hrs + "-" + min + "-" + sec + "-" + a;
}

time();
