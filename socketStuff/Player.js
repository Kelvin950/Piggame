const e = require("express");


class Player{
    constructor(name , score ){
        this.name=  name ;
        this.score =  0;
        this.currentScore =  score;
        this.id =  "";
        this.currentPlayer =false;
        this.inARoom = false;
        this.room = "";
    }

    SetcurrentScore(){
        this.currentScore= 0 ;
    }

    setScore(){
        this.score += this.currentScore;
    }

    getScore(){

        return this.score;
    }

    getName(){
        return this.name;
    }

    getRoom(){
        return  this.room;
    }

    getInARoom(){
        return this.inARoom;
    }
 setRoom(room){
     this.room = room;
 }
 UpdateRoom(){
    if(this.inARoom) this.inARoom =  false;
    else this.inARoom =  true;
     
 }
}


module.exports=Player