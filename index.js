//function to randomize the value of both dices

//function to show the result with the winner and the dice numbers

function result (){
    var resultPlayerOne = Math.floor(Math.random() * 6)+1;
    var resultPlayerTwo = Math.floor(Math.random() * 6)+1;

    console.log(resultPlayerOne);

    // document.getElementById("playerTittle").classList.add("playerTittleInvisible");
        
        document.getElementById("diceOneOne").classList.add("invisible");  //makes all images invisible again to give place to the new play
        document.getElementById("diceOneTwo").classList.add("invisible");
        document.getElementById("diceOneThree").classList.add("invisible");
        document.getElementById("diceOneFour").classList.add("invisible");
        document.getElementById("diceOneFive").classList.add("invisible");
        document.getElementById("diceOneSix").classList.add("invisible");

        document.getElementById("diceTwoOne").classList.add("invisible");  //makes all images invisible again to give place to the new play
        document.getElementById("diceTwoTwo").classList.add("invisible");  //makes all images invisible again to give place to the new play
        document.getElementById("diceTwoThree").classList.add("invisible");  //makes all images invisible again to give place to the new play
        document.getElementById("diceTwoFour").classList.add("invisible");  //makes all images invisible again to give place to the new play
        document.getElementById("diceTwoFive").classList.add("invisible");  //makes all images invisible again to give place to the new play
        document.getElementById("diceTwoSix").classList.add("invisible");  //makes all images invisible again to give place to the new play


    document.getElementById('playerOneWins').classList.add('invisible');
    document.getElementById('playerTwoWins').classList.add('invisible');
    document.getElementById('draw').classList.add('invisible');

     if (resultPlayerOne > resultPlayerTwo){
        let el = document.getElementById('playerOneWins');
        el.classList.remove('invisible');
     }
      else if (resultPlayerTwo > resultPlayerOne){
        let el = document.getElementById('playerTwoWins');
        el.classList.remove('invisible');
        }else{
        let el = document.getElementById('draw');
        el.classList.remove('invisible');
    }
    if(resultPlayerOne == 1){
        let imgDice = document.getElementById('diceOneOne');
        imgDice.classList.remove('invisible');
    }
    else if (resultPlayerOne == 2){
        let imgDice = document.getElementById('diceOneTwo');
        imgDice.classList.remove('invisible');
    }
    if(resultPlayerOne == 3){
        let imgDice = document.getElementById('diceOneThree');
        imgDice.classList.remove('invisible');
    }
    else if (resultPlayerOne == 4){
        let imgDice = document.getElementById('diceOneFour');
        imgDice.classList.remove('invisible');
    }
    if(resultPlayerOne == 5){
        let imgDice = document.getElementById('diceOneFive');
        imgDice.classList.remove('invisible');
    }
    else if (resultPlayerOne == 6){
        let imgDice = document.getElementById('diceOneSix');
        imgDice.classList.remove('invisible');
    }

    //second player dice images
    if(resultPlayerTwo == 1){
        let imgDice = document.getElementById('diceTwoOne');
        imgDice.classList.remove('invisible');
    }
    else if (resultPlayerTwo == 2){
        let imgDice = document.getElementById('diceTwoTwo');
        imgDice.classList.remove('invisible');
    }
    if(resultPlayerTwo == 3){
        let imgDice = document.getElementById('diceTwoThree');
        imgDice.classList.remove('invisible');
    }
    else if (resultPlayerTwo == 4){
        let imgDice = document.getElementById('diceTwoFour');
        imgDice.classList.remove('invisible');
    }
    if(resultPlayerTwo == 5){
        let imgDice = document.getElementById('diceTwoFive');
        imgDice.classList.remove('invisible');
    }
    else if (resultPlayerTwo == 6){
        let imgDice = document.getElementById('diceTwoSix');
        imgDice.classList.remove('invisible');
    }


}



    

    
   



