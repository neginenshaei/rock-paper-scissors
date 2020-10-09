var i = 0;
var yourScore = 0;
var tieScore = 0;
var compScore = 0;

function rpsGame(yourChoice) {
  i++;
  round();
  handShake();
  var humanChoice = yourChoice.id;
  var computerChoice = compChoice(randomNum());
  chosenImage(humanChoice, computerChoice);
  var result = winner(humanChoice, computerChoice);
  message = finalMessage(result);
  console.log(message);
  scores();
  gameFront(result);
}

function round() {
  var times = document.getElementById("round");
  return (times.innerHTML = "<h1 class='mb - 4 m - auto'>Round " + i + "</h1>");
}

function handShake() {
  var comphandShake = document.getElementById("compHand");
  var yourhandShake = document.getElementById("yourHand");
  comphandShake.classList.add("hands");
  yourhandShake.classList.add("hands");
}

function chosenImage(yourImageId, compImageId) {
  document.getElementById("yourHand").src =
    "./assets/img/" + yourImageId + "3.png";
  document.getElementById("compHand").src =
    "./assets/img/" + compImageId + "2.png";
}

function scores() {
  var prevScore = document.getElementById("scores");
  prevScore.innerHTML = "";

  var p1 = document.createElement("p");
  var p2 = document.createElement("p");
  var p3 = document.createElement("p");

  var you = document.createTextNode("YOU: " + yourScore);
  var tie = document.createTextNode("TIES: " + tieScore);
  var comp = document.createTextNode("COMPUTER: " + compScore);

  p1.appendChild(you);
  p2.appendChild(tie);
  p3.appendChild(comp);

  prevScore.appendChild(p1);
  prevScore.appendChild(p2);
  prevScore.appendChild(p3);
}

function randomNum() {
  return Math.floor(Math.random() * 3);
}

function compChoice(number) {
  var chance = ["rock", "paper", "scissors"];
  return chance[number];
}

function winner(yourChoice, computerChoice) {
  var winNum;
  if (yourChoice === computerChoice) {
    winNum = 0.5;
    tieScore++;
  } else if (
    (yourChoice === "rock" && computerChoice === "scissors") ||
    (yourChoice === "scissors" && computerChoice === "paper") ||
    (yourChoice === "paper" && computerChoice === "rock")
  ) {
    winNum = 1;
    yourScore++;
  } else {
    winNum = 0;
    compScore++;
  }
  return winNum;
}

function finalMessage(number) {
  if (number === 1) {
    return { message: "You Win!", color: "green" };
  } else if (number === 0.5) {
    return { message: "You Tied!", color: "yellow" };
  } else {
    return { message: "You Lost!", color: "red" };
  }
}

function gameFront(number) {
  var messageH = document.getElementById("remove");
  document.getElementById("remove").remove();
  var message = finalMessage(number);
  messageH.innerHTML =
    "<h2 style='color: " +
    message.color +
    "'class='resultText'>" +
    message.message +
    "</h2>";
  document.getElementById("result").appendChild(messageH);
}
