// function for the clock
const clock = () => {
  let today = new Date();
  let hour = today.getHours();
  let minute = today.getMinutes();
  let second = today.getSeconds();
// AM unless hour is >= 12
  let period = 'AM';
// condition for 12hr clock
  if (hour == 0) {
    hour = 12;
  } else if (hour >= 12) {
    hour = hour -  12;
    period = 'PM';
}
// makes any hour less then 10 display a zero first
  hour = (hour < 10)? '0' + hour : hour;
  minute = (minute < 10)? '0' + minute : minute;
  second = (second < 10)? '0' + second : second;
// putting it all together
  let time = `${hour} : ${minute} : ${second} ${period}`;
// runs in the <p> with id clock
  document.getElementById('clock').innerText = time;
// updates every 1000 millasecong = 1 second
  setTimeout(clock, 1000);
}

// display day of the week
const dayOfTheWeek = () => {
  let today = new Date();
  let day = today.getDay();
  let dayList = ['Sunday', 'Monday', 'Tuesday', 'Wednsday', 'Thursday', 'Friday', 'Saturday'];
  let smwtfs = `${dayList[day]}`
  document.getElementById('day').innerText = smwtfs;
}

// calender date
const calender = () => {
  let today = new Date();
  let month = today.getMonth() + 1;
  let day = today.getDate();
  let year = today.getFullYear();
// add 0 in front of days and months less then 10
  month = (month < 10)? '0' + month : month;
  day = (day < 10)? '0' + day : day;
  let todaysDate = `${month}/${day}/${year}`;
  document.getElementById('calender').innerText = todaysDate;
}
// run the functions
clock();
dayOfTheWeek();
calender();
