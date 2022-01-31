const Player=  require("./Player")



exports.addClientToMap =  (socketid , username , userSocketIdMap)=>{

    if(!userSocketIdMap.has(username)){
            userSocketIdMap.set(username , new Set([socketid]));
    }
    else{
        userSocketIdMap.get(username).add(socketid)
    }
}

exports.removeClientFromMap =  (socketid , username , userSocketIdMap)=>{

    if(userSocketIdMap.has(username)){
        let userSocketIdSet  = userSocketIdMap.get(username);
        userSocketIdSet.delete(socketid);

        
if(userSocketIdSet.size ===0){

    userSocketIdMap.delete(username);
}
    }



}

exports.switchPlayer = ( players)=>{
  
    let currentPlayer  = players.find(player => player.currentPlayer === true) ; 
    let  otherPlayer =  players.find(player => player.currentPlayer !== true);
      currentPlayer.currentScore =   0 ;
  
      currentPlayer.currentPlayer =  false ; 
         otherPlayer.currentPlayer =  true;
console.log(players);
      
  

}


exports.hold =  (players,cb)=>{

    let currentPlayer  = players.find(player => player.currentPlayer === true) ; 
    console.log(currentPlayer);
    let  otherPlayer =  players.find(player => player.currentPlayer !== true);
   
    currentPlayer.setScore();
      currentPlayer.SetcurrentScore();
   if(currentPlayer.getScore() >= 10){
        cb();
        return "won";
    }
      currentPlayer.currentPlayer =  false ; 
         otherPlayer.currentPlayer =  true;
console.log(players);
}


const Rooms = new Map() ;


exports.addUserIntoARoom = (player1 ,player2)=>{


    Rooms.set(player1.getRoom() , [player1 , player2] );
     


}
exports.outputRoom= ()=>{
    console.log(Rooms);
}
exports.setPlayer1ToCurrentPlayer = (player1)=>{

    const array  = Rooms.get(player1.getRoom()) ;
    array.find(player=> player.username=== player1.username).currentPlayer =  true;
      
}

exports.playersInRoom =(room)=>{


    return Rooms.get(room)

}


exports.leaveRoom= (room ,username)=>{

    const players =  Rooms.get(room);
    if(!players)return
  const index = players.findIndex(player=>player.name === username);
  players.splice(index , 1);
}

exports.InARoom=(player)=>{
   if(Rooms.has(player.room)){
       return true
   }

   return false;
}

// const player1  =new Player("jelvin" , 0);
// const player2 =  new Player("kelvin" , 1);

// addUserIntoARoom(player1 , player2);
// setPlayer1ToCurrentPlayer(player1)

// console.log(player1, player2);

// addUserIntoARoom(player1 , player2)