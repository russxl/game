var buttonColours = ["red", "blue", "green", "yellow"];

var gamePattern = [];
var userPattern = [];
var level = 0;
var started = false;

$("body").keypress(function(event){

  if(!started){
    $("#level-title").text("Level "+ level);
    nextSequence();
    console.log(!started);
    started=true;

  }
  
  });

  $(".btn").click(function(){
      var theColor = $(this).attr("id");
      userPattern.push(theColor);

      animate(theColor);
      playSound(theColor);
    checkAnswer(userPattern.length-1);
    console.log(userPattern)
  })

function checkAnswer(currentLevel){
    if(gamePattern[currentLevel] === userPattern[currentLevel]){
        if(gamePattern.length === userPattern.length){
          setTimeout(function(){
            nextSequence()}
            
            ,1000);
           
        }

    }
    else{
        playSound("wrong");
        $("body").addClass("game-over");
        $("#level-title").text("Game Over, Press Any Key to Restart");
        setTimeout(
          function(){
          $("body").removeClass("game-over");
        },100)
        startOver();
    }

}

function nextSequence() {
  userPattern = [];
  level++;
  $("#level-title").text("Level "+ level);


  var randomNumber = Math.floor(Math.random() * 4);
  var randomChosenColour = buttonColours[randomNumber];
  gamePattern.push(randomChosenColour);

  //1. Use jQuery to select the button with the same id as the randomChosenColour
  //2. Use Google/Stackoverflow to figure out how you can use jQuery to animate a flash to the button selected in step 1.
  $("#" + randomChosenColour).fadeIn(100).fadeOut(100).fadeIn(100);

  //3. Use Google/Stackoverflow to figure out how you can use Javascript to play the sound for the button colour selected in step 1.
  var audio = new Audio("sounds/" + randomChosenColour + ".mp3");
console.log(gamePattern)
}

 function playSound(name){
  var audio = new Audio("sounds/" + name + ".mp3");
  audio.play();
 }

 function animate(colour){
  $("#" + colour).addClass("pressed");
  setTimeout(function(){
    $("#" + colour).removeClass("pressed");
  },100)
 }
function startOver(){
  level = 0;
  gamePattern = [];
  started=false;
}
