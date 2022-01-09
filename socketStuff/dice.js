

class Dice{


    constructor(){

        this.dice  = 0 ;
        this.diceSrc =""
    }

    generateRandomNumber(){
         this.dice = Math.trunc(Math.random() * 6) + 1;
       
    }

    getDice(){
        return this.dice;
    }

    setSrc(){

        this.diceSrc =  `dice-${this.getDice()}.png`

    }

    getSrc(){

        return this.diceSrc;
    }

}


module.exports =  Dice;