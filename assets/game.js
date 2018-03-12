

$(document).ready(function(){




var wins = 0;
var losses = 0;
var totalScore = 0;

// Crystals
var crytsalOne = 0;
var crytsalTwo = 0;
var crytsalThree = 0;
var crytsalFour = 0;

function clearGame() {

  totalScore = 0;
  $("#totalScore").text(totalScore);
 
// assigning randomNumber to a random number
  randomNumber = Math.floor(Math.random() * 121);
  $("#randomNumber").text(randomNumber);

//4 crystals are assigned a random number
  //game will hide this amount until player clicks on crsytal .hide()

  crytsalOne = Math.floor(Math.random() * 13);
  $("#crytsalOne").text(crytsalOne);

  crytsalTwo = Math.floor(Math.random() * 13);
  $("#crytsalTwo").text(crytsalTwo);

  crytsalThree = Math.floor(Math.random() * 13);
  $("#crytsalThree").text(crytsalThree);

  crytsalFour = Math.floor(Math.random() * 13);
  $("#crytsalFour").text(crytsalFour);

}

$("#instructions").hide()






//GameStart

function gameStart(){


  wins = 0;
  losses = 0;
  totalScore = 0;
  $("#totalScore").text(totalScore);
 


// assigning randomNumber to a random number
  randomNumber = Math.floor(Math.random() * 121);
  $("#randomNumber").text(randomNumber);


//4 crystals are assigned a random number
  //game will hide this amount until player clicks on crsytal .hide()


  crytsalOne = Math.floor(Math.random() * 13);
  $("#crytsalOne").text(crytsalOne);

  crytsalTwo = Math.floor(Math.random() * 13);
  $("#crytsalTwo").text(crytsalTwo);

  crytsalThree = Math.floor(Math.random() * 13);
  $("#crytsalThree").text(crytsalThree);

  crytsalFour = Math.floor(Math.random() * 13);
  $("#crytsalFour").text(crytsalFour);
                  }



//The game working 

$("#crytsalOne").click(function() {
  totalScore = crytsalOne + totalScore;
  console.log(totalScore)
  $("#totalScore").text(totalScore).fadeToggle(200)
  if (totalScore === randomNumber) {
    alert("YOU WIN! Keep playing to see how many wins you can get!");
    wins++
    $("#wins").text(wins);
    clearGame ()
  } else if (totalScore > randomNumber) {
    alert("You lose!")
    losses++
    $("#losses").text(losses);
    clearGame ()
  }
});

$("#crytsalTwo").click(function() {
  totalScore = crytsalTwo + totalScore;
    console.log(totalScore)
    $("#totalScore").text(totalScore)
    if (totalScore === randomNumber) {
    alert("YOU WIN! keep playing to see how many wins you can get!");
    wins++
    $("#wins").text(wins);
    clearGame ()
  } else if (totalScore > randomNumber) {
    alert("You lose!")
    losses++
    $("#losses").text(losses);
    clearGame ()
  }
});

$("#crytsalThree").click(function() {
  totalScore = crytsalThree + totalScore;
    console.log(totalScore)
    $("#totalScore").text(totalScore)
    if (totalScore === randomNumber) {
    alert("YOU WIN! keep playing to see how many wins you can get!");
    wins++
    $("#wins").text(wins);
    clearGame ()
  } else if (totalScore > randomNumber) {
    alert("You lose!")
    losses++
    $("#losses").text(losses);
    clearGame ()
  }
});

$("#crytsalFour").click(function() {
  totalScore = crytsalFour + totalScore;
    console.log(totalScore)
    $("#totalScore").text(totalScore)
    if (totalScore === randomNumber) {
    alert("YOU WIN! keep playing to see how many wins you can get!");
    wins++
    $("#wins").text(wins);
    clearGame ()
  } else if (totalScore > randomNumber) {
    alert("You lose!")
    losses++
    $("#losses").text(losses);
    clearGame ()
  }
});

gameStart()

$("#btnInstr").click(function() {
  $("#instructions").toggle(400);
});


});
