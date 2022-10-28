// Создадим таймеры 
let timer = null;
let timerRound = null;
let timerEnd = null;

function timers() {
// Создадим элементы 
let parent = document.getElementById('timer');
let divHours = document.createElement('div');
let divMunuts = document.createElement('div');
let divSeconds = document.createElement('div');
// Добавим элементы в DOM
let createHours = parent.appendChild(divHours);
let createMunuts = parent.appendChild(divMunuts);
let createSeconds = parent.appendChild(divSeconds);
// Создадим время
let hours = new Date().getHours();
let minuts = new Date().getMinutes();
let sec = new Date().getSeconds();
// Назначим стили таймера
divHours.style.fontSize = '40px';
divMunuts.style.fontSize = '60px';
divSeconds.style.fontSize = '80px';

function setTime() {
  let hours = new Date().getHours();
  let minuts = new Date().getMinutes();
  let sec = new Date().getSeconds();
  hours = ('0' + hours).substr(-2, 2);
  minuts = ('0' + minuts).substr(-2, 2);
  sec = ('0' + sec).substr(-2, 2);
  divHours.innerHTML = hours + ':';
  divMunuts.innerHTML = minuts + ':';
  divSeconds.innerHTML = sec;
  let result = divHours.innerHTML + divMunuts.innerHTML + divSeconds.innerHTML
  return result;
}
// Предварительно вызовем функцию перед таймером для мгновенного отображения на странице
setTime();
// вызываем функцию endTime каждую секунду
timer = setInterval(setTime, 1000)
// Зададим внешние переменные
let newParent = document.getElementById('end')
let newTimer = document.createElement('div');
let createNewTimer = newParent.appendChild(newTimer);

function endTime() {
  // Зададим внутренние переменные
  let hoursEnd = 23 - new Date().getHours();
  let minutsEnd = 59 - new Date().getMinutes();
  let secondsEnd = 60 - new Date().getSeconds();
  // Преобразуем к значению из двух знаков
  hoursEnd = ('0' + hoursEnd).substr(-2, 2);
  minutsEnd = ('0' + minutsEnd).substr(-2, 2);
  secondsEnd = ('0' + secondsEnd).substr(-2, 2);
  return newTimer.innerHTML = hoursEnd + ':' + minutsEnd + ':' + secondsEnd;
}
// Предварительно вызовем функцию перед таймером для мгновенного отображения на странице
endTime();
// вызываем функцию endTime каждую секунду
timerEnd = setInterval(endTime, 1000)

function roundTime() {
  let round = document.getElementById('round');
  let sec = new Date().getSeconds();
  let miSecconds = new Date().getMilliseconds();
  let persent = (sec + miSecconds/1000)*1.666;
  let gradient = persent + '%';
  round.style.background = ('linear-gradient(0deg, rgb(82, 0, 11)' + gradient + ', rgb(  255 255 255 / 26%) 0%, rgba(255, 255, 255, 0) 99.79%');
  if (Math.ceil(persent) % 2 == 0) {
    round.style.boxShadow = ('rgb(50 50 93) 0px 50px 150px -20px, rgb(0 0 0 / 30%) 0px 30px 60px -30px, rgb(10 37 64 / 35%) 0px -2px 6px 0px inset')
  } else {
    round.style.boxShadow = ('rgb(50 50 93) 0px 50px 100px -20px, rgb(0 0 0 / 30%) 0px 30px 60px -30px, rgb(10 37 64 / 35%) 0px -2px 6px 0px inset')
  } 
}
roundTime();
timerRound = setInterval(roundTime, 100)
}

timers()

function stopInterval() {
  let btn = document.getElementById('stopBtn');
  btn.innerHTML = 'YOU WIN'
  if(btn.click){
    clearInterval(timer);
    clearInterval(timerRound);
    clearInterval(timerEnd);
    let clock = document.getElementById('timer');
    clock.style.opacity = '0.9';
    clock.style.color = ' rgba(120, 120, 199)';
    round.style.background= ('linear-gradient(0deg, rgb(0 0 0 / 0%) 92.1365%, rgb(0 0 0 / 6%) 0%, rgba(255, 255, 255, 0) 99.79%)')
    round.style.boxShadow = ('rgb(50 50 93) 0px 50px 400px -20px, rgb(0 0 0 / 30%) 0px 30px 60px -30px, rgb(10 37 64 / 35%) 0px -2px 6px 0px inset')
  } 
}
