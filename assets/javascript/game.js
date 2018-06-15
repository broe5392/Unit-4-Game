// assign variables
var randomNumber = [];
var wins = 0;
var losses = 0;
var crystals = [];
var crystalValue = [];
var yourScore = 0;

// random number generator for game objective
updateRandomNumber = function() {
randomNumber = Math.floor((Math.random()*101) + 19);    
$("#obj").text("Number Objective: " + randomNumber);
};
// assign random point value to each image. 

   $(".crystals").each(function(){
    crystalValue = Math.floor((Math.random()*11) + 1);
       $(this).attr("data-crystalValue", crystalValue);
   });

// 
reset = function() {
    updateRandomNumber();
    $(".crystals").each(function(){
        crystalValue = Math.floor((Math.random()*11) + 1);
           $(this).attr("data-crystalValue", crystalValue);
       });
       yourScore = 0;
    $("#score").text("Your current score is: " + yourScore + "!");
}

updateRandomNumber();

// on click function
$(".crystals").on("click", function() {
    crystals = $(this).attr("data-crystalValue");
    crystals = parseInt(crystals);
    yourScore += crystals;
    $("#score").text("Your current score is: " + yourScore + "!");
    alert("New score " + yourScore +"!");

    if (yourScore === randomNumber) {
        wins++;
        $("#wins").html("wins: " + wins);
        alert("Winner!!!"); 
        reset();  
    }
    else if (yourScore >= randomNumber) {
        losses++;
        $("#losses").html("losses: " + losses);
        alert("Loser!!");
        reset();
    }

    

});

