

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
let memoji = localStorage.getItem("memoji");

if(!username){
    
    username =  generate(5);


localStorage.setItem("username" ,username);
}

if(!memoji){
    showMemoji();
  
  
}
if(memoji){
  document.querySelector(".sidebar-header").innerHTML =  `<h1><img src="img/${memoji}" class="memoji"  width="100px"/>${username}</h1>`
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
               } , 3000)
  }
function showModal(html){

  const markUp =  `<p>${html} Leave room as well</p><button class="btn btn-secondary reload">Okay</button>`;
  modal1.innerHTML= '';
  modal1.insertAdjacentHTML("afterbegin" , markUp);
  modal1.classList.remove('hidden');
  overlay.classList.remove('hidden');
document.querySelector(".reload").addEventListener("click" , ()=>{
  location.reload();
})
}

function showMemoji(){
  const markUp =  `<img src="img/IMG_0536.PNG" class="memoji"  width="100px"/>
  <img src="img/IMG_0539.PNG"  class="memoji" width="100px"/>
  <img src="img/IMG_0543.PNG"   class="memoji" width="100px"/>
  <img src="img/IMG_0546.PNG"  class="memoji" width="100px"/>
  <img src="img/IMG_0549.PNG"  class="memoji" width="100px"/>`;
  modal1.innerHTML= '';
  modal1.insertAdjacentHTML("afterbegin" , markUp);
  modal1.classList.remove('hidden');
  overlay.classList.remove('hidden');

  document.querySelectorAll("img").forEach(img=>{
    img.addEventListener("click" , ()=>{
       const index =  img.src.indexOf('I');
      memoji =  img.src.substr(index);
      modal1.classList.add('hidden');
      overlay.classList.add('hidden');
      console.log(2);
     localStorage.setItem("memoji" ,memoji);
     
document.querySelector(".sidebar-header").innerHTML =  `<h1><img src="img/${memoji}" class="memoji"  width="100px"/>${username}</h1>`;
    })
  })

}
function showEnd(src , state , cb){

  const markUp = `<div>
 ${state === "You won" ? ` <button id="btn" class="btne btne--new">🔄 New game</button>`:``}
  <img src="${src}" />
       <h1>${state}</h1>
  </div>`;
  modal1.innerHTML= '';
  modal1.insertAdjacentHTML("afterbegin" , markUp);

  modal1.classList.remove('hidden');

  overlay.classList.remove('hidden');

  document.getElementById("btn").addEventListener('click',()=>{
cb();
modal1.classList.add('hidden');
overlay.classList.add('hidden');

  })
document.querySelector(".sidebar-header").innerHTML =  `<h1><img src="img/${memoji}" class="memoji"  width="100px"/>${username}</h1>`;
}
  function draw(Mainplayers ){
    players  = Mainplayers;

    console.log(players);
    document.querySelector("main").innerHTML = "";
    document.querySelector("main").insertAdjacentHTML("afterbegin" , setMain(players , player ));
    document.querySelector(".btne--roll").addEventListener("click" ,click);
    document.querySelector(".btne--hold").addEventListener("click",Hold);
    sidebar.classList.remove("show-sidebar");
    // modal1.classList.add('hidden');
    // overlay.classList.add('hidden');
//  console.log(players);
  }

  function newGame(Mainplayers ){
    players  = Mainplayers;

    console.log(players);
    document.querySelector("main").innerHTML = "";
    document.querySelector("main").insertAdjacentHTML("afterbegin" , setMain(players , player ));
    document.querySelector(".btne--roll").addEventListener("click" ,click);
    document.querySelector(".btne--hold").addEventListener("click",Hold);
    sidebar.classList.remove("show-sidebar");
    modal1.classList.add('hidden');
    overlay.classList.add('hidden');
//  console.log(players);
  }