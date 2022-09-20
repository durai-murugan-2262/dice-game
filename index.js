// creating two random numbers for the dices
let randomNumber1 = Math.floor(Math.random() * 6 + 1);
let randomNumber2 = Math.floor(Math.random() * 6 + 1);

// selecting the image tag
let dice1 = document.getElementsByClassName("img")[0];
let dice2 = document.getElementsByClassName("img")[1];

// setting the src attribute to the image of which the random number generated.
dice1.setAttribute("src", `/images/dice${randomNumber1}.png`);
dice2.setAttribute("src", `/images/dice${randomNumber2}.png`);

// Selecting the h1 element.
let title = document.querySelector("h1");

// Choosing the winner.
if (randomNumber1 > randomNumber2) {
  title.innerHTML = "Player 1 Wins";
} else if (randomNumber2 > randomNumber1) {
  title.innerHTML = "Player 2 Wins";
} else {
  title.innerHTML = "Draw";
}
