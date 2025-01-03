document.querySelector('#clickMe').addEventListener('click', makeReq)

async function makeReq(){
  const playerHand = document.querySelector("#playerHand").value;
  const res = await fetch(`/api`)
  const data = await res.json() 
  const enemyHand = data['enemy-hand'].hand;

  let result = winOrLose(playerHand, enemyHand);

  // Print results
  document.querySelector("#result").textContent = 
    `You played ${playerHand}. I played ${enemyHand}. You ${result}.`


}

function winOrLose(playerHand, enemyHand){
  // Define relationships 
  const chart = {
    'rock' : 'scissors',
    'scissors' : 'paper',
    'paper' : 'rock'
  }

  // Check Tie
  if(playerHand === enemyHand) return "tie";
  // Use dictionary to determine win
  if(chart[playerHand] === enemyHand) return "win";
  // Not tie or win, must be loss
  return "lose";

}