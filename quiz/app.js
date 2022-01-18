const max = document.getElementById("max");
const guessing = document.getElementById("guessing");
const compare = document.querySelector("#result span:first-child");
const result = document.querySelector("#result span:last-child");
const randomNumberForm = document.getElementById("randomNumberForm");

function handlbutton(event) {
    event.preventDefault();
    const maxInt = parseInt(max.value);
    const guessingInt = parseInt(guessing.value);

  const randomNum = Math.floor(Math.random() * maxInt);
    compare.innerText = `You chose: ${guessingInt}, the machine chose: ${randomNum}`;
    if (guessingInt === randomNum) {
    result.innerText = "You Win!";
    } else {
    result.innerText = "You lose!";
    }
}

randomNumberForm.addEventListener("submit", handlbutton);
