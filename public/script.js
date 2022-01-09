

const diceEl = document.querySelector('.dice')

let players = [];
let player=  {}
let UserScore ;
let alphabets =  ["a" ,"b" , 'c' ,'d' ,'e' ,'f' ,'g' ,'h' ,'i' , 'j' , 'k' , 'l' , 'm' , 'n' , 'o' ,'p' , 'q' , 'r' , 's' , 't', 'u', 'v' , 'w', 'x' , 'y', 'z'];

// console.log(alphabets[Math.floor((Math.random()* 26)+ 0)]);
const generate = (length )=>{

let results =  ``
    for(i=0 ;i<length;i++){
results += alphabets[Math.floor((Math.random()* 26)+ 0)]
    }

return  results
}

let scores = 0 ;
let username = localStorage.getItem("username");  

if(!username){
    
    username =  generate(5);
localStorage.setItem("username" ,username);
}

console.log(username);
const player0El = document.querySelector('.player--0');
const player1El = document.querySelector('.player--1');
const switchPlayer = function () {
    // document.getElementById(`current--${activePlayer}`).textContent = 0;
    // currentScore = 0;
    // activePlayer = activePlayer === 0 ? 1 : 0;
    player0El.classList.toggle('player--active');
    player1El.classList.toggle('player--active');
  };

  function setMain(players ,player  ){

  console.log(players);

    return `
     
    ${players.map((player ,index)=>{
      return  `<section class="player player--${index} ${(player.currentPlayer)? "player--active": ""}">
        <h2 class="name" id="name--${index}">${player.name}</h2>
        <p class="score" id="score--${index}">${player.score}</p>
        <div class="current">
          <p class="current-label">Current</p>
          <p class="current-score" id="current--${index}">${player.currentScore}</p>
        </div>
        
        </section>
        `
    }).join(" ")}

   
    <button class="btne btne--new" >🔄 New game</button>

     <button class="btne btne--roll"  ${(player.currentPlayer)?"": "disabled" } >🎲 Roll dice</button>
       
        
          
    <button class="btne btne--hold"  ${(player.currentPlayer)?"": "disabled" } >📥 Hold</button>
    <img src="img/dice-5.png" alt="Playing dice" class="dice" />
    `
  }

  function markUp(html){
    notification.innerHTML =  `<p>${html}</p>`;
              notification.style.top =  '3%';
               setTimeout(()=>{
                notification.style.top =  '-15%';
               } , 5000)
  }

  function draw(Mainplayers ){
    players  = Mainplayers;

    console.log(players);
    document.querySelector("main").innerHTML = "";
    document.querySelector("main").insertAdjacentHTML("afterbegin" , setMain(players , player ));
    document.querySelector(".btne--roll").addEventListener("click" ,click);
    document.querySelector(".btne--hold").addEventListener("click",Hold);
//  console.log(players);
  }