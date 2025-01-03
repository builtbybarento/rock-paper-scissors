document.querySelector('#clickMe').addEventListener('click', makeReq)

async function makeReq(){

  const userName = document.querySelector("#userName").value;
  const res = await fetch(`/api?student=${userName}`)
  const data = await res.json()

  console.log(data);
  document.querySelector("#personName").textContent = data.name
  document.querySelector("#personStatus").textContent = data.status
  document.querySelector("#personOccupation").textContent = data.currentOccupation


}

// function RPS(){
// 	return Math.ceil(Math.random() * 3)
// }

// let rps = Math.ceil(Math.random() * 3) === 1 ? "rock" ?
//           Math.ceil(Math.random() * 3) === 2 ? "paper" : "scissors"; 


