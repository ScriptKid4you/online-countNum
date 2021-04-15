

const countBtn = document.querySelector(".countBtnDiv button");
const resetBtn = document.querySelector(".resetBtnDiv button");
let countNum = document.querySelector(".countNum p");

countBtn.addEventListener("click", countUp);
resetBtn.addEventListener("click", reset);

function countUp() {
  countNum.innerHTML++;

}

function reset(){
  countNum.innerHTML= 0;
}

const options = {
  bottom: '64px', // default: '32px'
  right: 'unset', // default: '32px'
  left: '32px', // default: 'unset'
  time: '0.5s', // default: '0.3s'
  mixColor: '#fff', // default: '#fff'
  backgroundColor: '#fff',  // default: '#fff'
  buttonColorDark: '#100f2c',  // default: '#100f2c'
  buttonColorLight: '#fff', // default: '#fff'
  saveInCookies: false, // default: true,
  label: '🌓', // default: ''
  autoMatchOsTheme: true // default: true
}

const darkmode = new Darkmode(options);
darkmode.showWidget();
