




const socket= io({
    query:{
        username:username
    }
});
let userID ;


socket.on("hasJoined" , (data)=>{
    console.log(data);
})


// socket.on("connect" , ()=>{
//     console.log(socket.id);
//     userId =  socket.id;
//     socket.emit("id" , {data:userID})
// })




socket.on("userSconnected" ,data=>{

    
    console.log(data.names);
   let {names} =  data
   names =  names.filter(name=>name !== username)
   console.log(names);
ul.innerHTML =  ""
     const html =  names.map(name =>{
         return `    <li >
         <p class="li">${name}</p>
         <span> Online</span> ${data.players.find(p=>p.name===name)?`<span> <i class="fas fa-dice-five"></i> In a game</span>` : ""} 
       </li>`
     }).join(" ");

     ul.insertAdjacentHTML("afterbegin" ,html);

//    <ul> 
//       ${names.map(name=>{
//        return  `<li class="li">${name}</li>`
//       }).join(" ")}
//    </ul>`

   

    })

// })


 ul.addEventListener("click" , (e)=>{
    
       
        if(!e.target.classList.contains("li"))return;
        console.log(e.target.innerHTML);
    //    console.log(e.target.srcElement);
        socket.emit("invite" , {
            name:e.target.innerHTML,
            sender:username
        } , (msg)=>{
            console.log(msg);
            if(msg){
              return markUp(msg);
            }
          
        })
})
//   socket.emit('sendMessage', message, (error) => {
//     if (error) {
//     return console.log(error)
//     }
//     console.log('Message delivered!')
//    })




socket.on("invitation" ,data=>{
    console.log(data);

    const html = `<div><p>${data.from.sender} : ${data.message}</p> <button class="btn btn-primary accept">Accept</button> <button class="btn btn-danger decline">Cancel</button></div>`;
    notification.innerHTML =  "";
    
    notification.insertAdjacentHTML("afterbegin" , html);
    notification.style.top =  '3%';

//     index.classList.remove("hidden");
//     invitationUl.innerHTML+= ` <li>
//    ${data.from.sender} sent you an invite <button class="decline">decline</button> <button class="accept">accept</button>

// </li>`

document.querySelector(".decline").addEventListener("click" ,e=>{
    notification.innerHTML =  "";
    notification.style.top =  '-15%';

    socket.emit("declined" , {id:data.from.id ,sender:data.from.sender})
    })

// })

document.querySelector(".accept").addEventListener("click" ,e=>{
    //     console.log(e.target);
    // console.log(e.target.parentElement);
    // console.log("accept");
notification.innerHTML =  "";
    notification.style.top =  '-15%';

    socket.emit("joined" , {id:data.from.id ,sender:data.from.sender})
    })


  
})
// invitationUl.addEventListener("click" , (e)=>{
//     if(e.target.classList.contains(`${data.from.sender}`)){

//         console.log(e.target);
//        }
    
   socket.on("declined" , (data)=>{
       console.log(data);

       return markUp(data);

   })

//     // e.target.parentElement.classList.add("hidden");


// })

// })

// window.addEventListener("load" , ()=>{
//     if(location.pathname ==="/game.html"){
//         console.log("dkf");
//         console.log(location.search);
//         const room =  location.search.split("=")[1];
//         console.log(room);
        
//         socket.emit("joinedGame" , {
           
//             room:room
//         })
//         // socket.on("gamePlayer" , (data)=>{
//         //     console.log(data);
//         //     player = data.data ; 
//         //     console.log(player);
//         //     UserScore=document.getElementById(`#name--${player.name}`);
//         // })
//         socket.on("drawGame" , data=>{
//             console.log(data);
//             players = data.players;
//                   console.log(player);
//             draw(players)
//             console.log(players);
//         })

//     }
// })

// document.addEventListener("")

socket.on("hello" , data=>{
    console.log(data);
})


function click(e){
    console.log(e.target);
     console.log(player);
        socket.emit("roll" ,{
            player:player ,
            room: player.room}
        )
    
       
    
    }

    function Hold(e){
        console.log(e.target);
        console.log(player);
        socket.emit("hold" , {
            player:player,
            room:player.room
        })  
    }


    socket.on("hold" , data=>{
        console.log(data);
        player =  data.players.find(player=>player.name === username);
        console.log(player);
        // console.log(data.username);
        draw(data.players);
    })

socket.on("roll" , data=>{

    console.log(player);
    console.log(data);
    // console.log(UserScore);
   
document.querySelector("img").src=  `img/${data.diceSrc}`
document.getElementById(`current--${players.findIndex(player=>player.currentPlayer === true)}`).textContent =  data.score;
    //   document.querySelector(`#current--${players.findIndex(player=>player.currentPlayer === true)}`).textContent =  data.score  
    //   console.log(diceEl);  
});

// socket.on("changeLocation" , data=>{
//     if(data.players.length<2){
//         return;
//     }else{
//         // players  = data.players;

//         // console.log(players);
//         // document.querySelector("main").innerHTML = "";
//         // document.querySelector("main").insertAdjacentHTML("afterbegin" , setMain(players , player ))
//         // document.querySelector(".btn--roll").addEventListener("click" ,click);
  
//         location.href=`/game.html?room=${data.players[0].room}`;
      
//     }
       
    
// })

socket.on("gamePlayer" , (data)=>{
    console.log(data);
    player = data.data ; 
    console.log(player);
    UserScore=document.getElementById(`#name--${player.name}`);
})

socket.on("switch" , data=>{
    console.log(data);
    player =  data.players.find(player=>player.name === username);
    console.log(player);
    console.log(data.username);
    draw(data.players);

})
socket.on("drawGame" , data=>{
                console.log(data);
                players = data.players;
                      console.log(player);
                draw(players)
                console.log(players);
            })

// socket.on("usersConnected" , data=>{
//     console.log(data);
// })


socket.on("playerLeft" , (data)=>{
    console.log(data ,'playerleft');
  showModal(data.data)
});

socket.on("NotInARoom" , data=>{
    console.log(data);
})


form.addEventListener("submit" ,e=>{

    e.preventDefault();
const message = document.querySelector("input").value ; 
if(message === ""){
    return; 
}
console.log(message);
 socket.emit("messageSent" , {
     from:username ,
     message:message,
     room:player.room
 } , (error)=>{
    // message=  "";
    return markUp(error);
 })
 document.querySelector("input").value = "";
})

socket.on("message" ,data=>{
    console.log(data);
const messages  =  `<li><p>${data.from}: ${data.message}</p></li>`;
chatUl.innerHTML +=messages;
})

socket.on("playerWon" ,(data)=>{
    console.log(data);
    const player =  data.players.find(p=>p.name === username);
    console.log(player);
   if(player.score >=10){
       const index = memoji.indexOf('0');
       let str = memoji.substr(index ,4);
        str=  +str + 1;
          showEnd(`img/IMG_0${str}.PNG` , "You won" , ()=>{
              console.log(str);
              socket.emit("newGame" , {
                room:player.room,
                name:username
              })
          })
       console.log("You won");
   }
   else{
    const index = memoji.indexOf('0');
    let str = memoji.substr(index ,4);
     str=  +str + 2;
     showEnd(`img/IMG_0${str}.PNG` , "You lost" , ()=>{
        console.log(str);
    })
       console.log("player lost");
   }
    console.log("ddff");
})

socket.on("newGame" , data=>{
    console.log(data);
    players = data.players;
          console.log(player);
    newGame(players)
    console.log(players);
})