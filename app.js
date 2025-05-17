let usescr = 0
let compscr = 0
const choice = document.querySelectorAll(".choices")
const msg = document.querySelector("#msg")
const userscrpara = document.querySelector("#num1")
const compscrpara = document.querySelector("#num2")
const getcompchoice = () => {
  const option = ["rock", "paper", "scissors"]
  const randidx = Math.floor(Math.random() * 3)
  return option[randidx]
}
const draw = () => {
  console.log("game was draw")
  msg.innerText = "DRAW! PLAY AGAIN"
  msg.style.backgroundColor = "black"
}

const showWinner = (userwin, userchoice, compchoise) => {
  if (userwin) {
    usescr++;
    userscrpara.innerText = usescr
    msg.innerText = `you win your ${userchoice} beats ${compchoise}`
    msg.style.backgroundColor = "green"
  } else {
    compscr++;
    compscrpara.innerText = compscr
    msg.innerText = `you lose ${compchoise} beats your ${userchoice}`
    msg.style.backgroundColor = "red"
  }
}

const playgame = (userchoice) => {
  console.log("user choice = ", userchoice)
  const compchoise = getcompchoice()
  console.log("comp choice = ", compchoise)

  if (userchoice === compchoise) {
    draw()
  } else {
    let userwin = true;
    if (userchoice === "rock") {
      userwin = compchoise === "paper" ? false : true;
    } else if (userchoice === "paper") {
      userwin = compchoise === "scissors" ? false : true;
    } else {
      userwin = compchoise === "rock" ? false : true;
    }
    showWinner(userwin, userchoice, compchoise);
  }
}


choice.forEach((choices) => {
  choices.addEventListener("click", () => {
    const userchoice = choices.getAttribute("id")
    playgame(userchoice)
  })
})





