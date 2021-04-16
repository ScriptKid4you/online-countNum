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

