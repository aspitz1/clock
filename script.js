const clock = () => {let today = new Date();
let day = today.getDay();
let dayList = ['Sunday', 'Monday', 'Tuesday', 'Wednsday', 'Thursday', 'Friday', 'Saturday'];
let hour = today.getHours();
let minute = today.getMinutes();
let second = today.getSeconds();
let period = 'AM';
if (hour == 0) {
  hour = 12;
} else if (hour >= 12) {
  hour = hour -  12;
  period = 'PM';
}
hour = (hour < 10)? '0' + hour : hour;
minute = (minute < 10)? '0' + minute : minute;
second = (second < 10)? '0' + second : second;

let time = `${hour} : ${minute} : ${second} ${period}`;
document.getElementById('clock').innerText = time;
setTimeout(clock, 1000);
}
clock();
