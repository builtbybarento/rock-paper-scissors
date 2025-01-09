// My attempt at getting the game to talk to whoever is playing
const { text } = require("body-parser");

document.addEventListener('DOMContentLoaded', () => {
  const title = document.getElementById('title').textContent;
  const result = document.getElementById('result').textContent;

  const speakText = (text) => {
    const utterance = new SpeechSynthesisUtterance(text);
    window.speechSynthesis.speak(utterance);
  };

  // Based on whats above, this is where the magic happens!
  speakText(`${title}. ${result}`);
});

// document.querySelector('#clickMe').addEventListener('click', makeReq)
var value;
function scissors() {
  value = 'scissors';
  makeReq();
  console.log('scissors');
}
function paper() {
  value = 'paper';
  makeReq();
  console.log('paper');
}
function rock() {
  value = 'rock';
  makeReq();
  console.log('rock');
}

async function makeReq() {
  // const playerHand = document.querySelector("#playerHand").value;
  const playerHand = value;
  const res = await fetch(`/api`);
  const data = await res.json();
  let enemyHand = data['enemy-hand'];
  console.log(data);
  console.log(enemyHand);

  let result = winOrLose(playerHand, enemyHand);

  // Print results
  document.querySelector("#result").textContent =
    `You played ${playerHand}. I played ${enemyHand}. You ${result}.`;

  // TODO: do a api post to send the result to the database
}

function winOrLose(playerHand, enemyHand) {
  // Define relationships 
  const chart = {
    'rock': 'scissors',
    'scissors': 'paper',
    'paper': 'rock'
  }

  // Check Tie
  if (playerHand === enemyHand) return "tie";
  // Use dictionary to determine win
  if (chart[playerHand] === enemyHand) return "win";
  // Not tie or win, must be loss
  return "lose";
}
