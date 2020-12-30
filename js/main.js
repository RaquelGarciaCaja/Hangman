//duda! se pueden hacer dos funciones,
//una para rellenar los guiones y otra para pintar el hangman?

String.prototype.replaceAt = function (index, character) {
  return this.substr(0, index) + character + this.substr(index + character.length);
};

const btn = document.querySelector(".js-button");
const closeBtn = document.querySelector(".js-close");
const btnReset = document.querySelector(".js-buttonReset");
const words = ["hulk"];
// const words = ["hulk", "ironman", "aladin", "blancanieves", "seven", "thor", "gladiator", "origen", "Interstellar", ""];

const word = words[Math.floor(Math.random() * words.length)];
let hasFailed = true;
let countHasFailed = 0;
const hangmanImg0 = document.querySelector(".hangman__img0");
const hangmanImg1 = document.querySelector(".hangman__img1");
const hangmanImg2 = document.querySelector(".hangman__img2");
const hangmanImg3 = document.querySelector(".hangman__img3");
const hangmanImg4 = document.querySelector(".hangman__img4");
const hangmanImg5 = document.querySelector(".hangman__img5");
const hangmanImg6 = document.querySelector(".hangman__img6");
const resultWin = document.querySelector(".js-win");
const resultLose = document.querySelector(".js-lose");

//replace each word to _
let wordScript = word.replace(/./g, "_ ");
document.querySelector(".js-output").innerHTML = wordScript;

function pressBtn() {
  // return user.name.toLowerCase().includes(filterName.toLowerCase());

  const leter = document.querySelector(".js-input").value;
  for (const i in word) {
    if (leter === word[i]) {
      wordScript = wordScript.replaceAt(i * 2, leter);
      hasFailed = false;
    }
  }
  if (hasFailed) {
    countHasFailed++;
    if (countHasFailed == 1) {
      hangmanImg0.classList.add("hidden");
      hangmanImg1.classList.remove("hidden");
      hangmanImg2.classList.add("hidden");
      hangmanImg3.classList.add("hidden");
      hangmanImg4.classList.add("hidden");
      hangmanImg5.classList.add("hidden");
      hangmanImg6.classList.add("hidden");
    } else if (countHasFailed == 2) {
      hangmanImg0.classList.add("hidden");
      hangmanImg1.classList.add("hidden");
      hangmanImg2.classList.remove("hidden");
      hangmanImg3.classList.add("hidden");
      hangmanImg4.classList.add("hidden");
      hangmanImg5.classList.add("hidden");
      hangmanImg6.classList.add("hidden");
    } else if (countHasFailed == 3) {
      hangmanImg0.classList.add("hidden");
      hangmanImg1.classList.add("hidden");
      hangmanImg2.classList.add("hidden");
      hangmanImg3.classList.remove("hidden");
      hangmanImg4.classList.add("hidden");
      hangmanImg5.classList.add("hidden");
      hangmanImg6.classList.add("hidden");
    } else if (countHasFailed == 4) {
      hangmanImg0.classList.add("hidden");
      hangmanImg1.classList.add("hidden");
      hangmanImg2.classList.add("hidden");
      hangmanImg3.classList.add("hidden");
      hangmanImg4.classList.remove("hidden");
      hangmanImg5.classList.add("hidden");
      hangmanImg6.classList.add("hidden");
    } else if (countHasFailed == 5) {
      hangmanImg0.classList.add("hidden");
      hangmanImg1.classList.add("hidden");
      hangmanImg2.classList.add("hidden");
      hangmanImg3.classList.add("hidden");
      hangmanImg4.classList.add("hidden");
      hangmanImg5.classList.remove("hidden");
      hangmanImg6.classList.add("hidden");
    } else if (countHasFailed == 6) {
      hangmanImg0.classList.add("hidden");
      hangmanImg1.classList.add("hidden");
      hangmanImg2.classList.add("hidden");
      hangmanImg3.classList.add("hidden");
      hangmanImg4.classList.add("hidden");
      hangmanImg5.classList.add("hidden");
      hangmanImg6.classList.remove("hidden");
    }
  } else {
    if (wordScript.indexOf("_") < 0) {
      resultWin.style.display = "flex";
    }
    // } else if (wordScript.indexOf("_") < 0) {
    //   resultLose.style.display = "flex";
    // }
  }
  document.querySelector(".js-input").value = "";
  document.querySelector(".js-input").focus();
  document.querySelector(".js-output").innerHTML = wordScript;
}

function close() {
  resultWin.style.display = "none";
}
function reset() {
  location.reload();
}

btn.addEventListener("click", pressBtn);
closeBtn.addEventListener("click", close);
btnReset.addEventListener("click", reset);
