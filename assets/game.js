

$(document).ready(function(){


//psedocode for Cyrstal counter



// var randomNumber = Math.floor(Math.random() * 121); // unsrure if I need this or not. Should it be 0?

// wins = 0
// losses = 0
// total score = 0 
var wins = 0;
var losses = 0;
var totalScore = 0;
var userScore = 0;

// Crystals
var crytsalOne = 0;
var crytsalTwo = 0;
var crytsalThree = 0;
var crytsalFour = 0;



//GameStart

//Random Number is displayed - goal number
    //randonNumber should be between 19-120
function gameStart(){


  wins = 0;
  $("#wins").text(wins);
  losses = 0;
  $("#losses").text(losses);
  totalScore = 0;
  $("#totalScore").text(totalScore);
  userScore = 0;
  $("#userScore").text(userScore);


// assigning randomNumber to a random number
  randomNumber = Math.floor(Math.random() * 121);
  $("#randomNumber").text(randomNumber);


//4 crystals are assigned a random number
  //game will hide this amount until player clicks on crsytal .hide()

  //Crystals should be assigned a random hidden value between 1-12

  crytsalOne = Math.floor(Math.random() * 13);
  $("#crytsalOne").text(crytsalOne);

  crytsalTwo = Math.floor(Math.random() * 13);
  $("#crytsalTwo").text(crytsalTwo);

  crytsalThree = Math.floor(Math.random() * 13);
  $("#crytsalThree").text(crytsalThree);

  crytsalFour = Math.floor(Math.random() * 13);
  $("#crytsalFour").text(crytsalFour);

                  }


//Interacting with the game

$("#crytsalOne").click(function() {
  userScore = crytsalOne + userScore;
});

$("#crytsalTwo").click(function() {
  userScore = crytsalTwo + userScore;
});

$("#crytsalThree").click(function() {
  userScore = crytsalThree + userScore;
});

$("#crytsalFour").click(function() {
  userScore = crytsalFour + userScore;
});




//If crystals are clicked their randomly assinged numbr will be displayed in the total score
    // each time a new crytsal is clicked the number should be added to the total score


// If the number added number from the total crystals are equal to the goal number the player wins 
    // wins counter goes up +1
    // game restarts

// else if the number is over the goal score, the player looses 
    // the looses counter goes up +1
    // game restarts

});
