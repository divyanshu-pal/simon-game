

var buttonColours = ["red", "blue", "green", "yellow"];
var gamePattern = [];
var userClickedPattern = [];




var started = false;
var lavel = 0;
$(document).keypress(function(){
    if(!started){

   
   
    $("h1").text("Lavel"+" "+lavel);
    nextSequence();
    started = true;
    }


    

});


function nextSequence(){
    userClickedPattern = [];
    lavel++;
     
    $("h1").text("Lavel"+" "+lavel);
  
    var randomNumber = Math.floor(Math.random() * 4);
      var randomcolor =buttonColours[randomNumber];
      gamePattern.push(randomcolor);

      $("#"+randomcolor).fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100);
      playSound(randomcolor);
   


    //   var audio = new Audio("sounds/"+randomcolor+".mp3");
    //   audio.play();
}


function playSound(name){
    var audio = new Audio("sounds/"+name+".mp3");
    audio.play();
 }





 
function animatePress(currentColour){
    $("#"+currentColour).addClass("pressed");
    setTimeout(function(){
     $("#"+currentColour).removeClass("pressed");
    },100);
 
 }

 

//1. Use jQuery to detect when any of the buttons are clicked and trigger a handler function.
$(".btn").click(function() {

    //2. Inside the handler, create a new variable called userChosenColour to store the id of the button that got clicked.
    var userChosenColour = $(this).attr("id");// to store the id <a data-id="457">link</a>   ||||||  $(this).attr("data-id") // returns the string "457"
  
    //4. Add the contents of the variable userChosenColour created in step 2 to the end of this new userClickedPattern
    userClickedPattern.push(userChosenColour);
  
    //console.log(userClickedPattern);
    // var audio = new Audio("sounds/"+userChosenColour+".mp3");
    //   audio.play();
    animatePress(userChosenColour);
    playSound(userChosenColour);
    checkAnswer(userClickedPattern.length-1);
    
  
  });




  function checkAnswer(currentLevel){
   if(userClickedPattern[currentLevel] ===gamePattern[currentLevel])
   {
     if(userClickedPattern.length === gamePattern.length){
        // setTimeout(function () {
            nextSequence();
        //   }, 1000);
     }


   }
   else{
    $("h1").text("wrong");
   }

  }



















