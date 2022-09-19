var colors = ["red","green","blue","yellow"];
var gamePattern = [];
var userPattern = [];
var level = 0;
var started = false;
var random = Math.floor(Math.random()*100)
var random2 = Math.floor(Math.random()*200)


$("body").keypress(function(){

    if(!started){
        $("#level-title").text("Level "+ level );
      
        started = true;
        console.log(started);
    }
});
$(".btn").click(function(){
    var pattern = $(this).attr("id");
    userPattern.push(pattern);
    nextSequence();
    audio(pattern);
    animate(pattern);
    buttonChecker(userPattern.length-1);
    console.log(pattern);
    console.log(userPattern);
    
    

})
function buttonChecker(check){
    if(gamePattern[check]===userPattern[check]  ){
         if (gamePattern.length === userPattern.length){
        setTimeout(function(){
            nextSequence()}
        ,1000);
        console.log(userPattern)
    }

}
else{
audio("wrong");
$("#level-title").text("Game-over! Press any key to continue.");
$("body").addClass("game-over");
setTimeout(function(){
    $("body").removeClass("game-over"); 
},100)
startOver();
}

}

function nextSequence(){
    
userPattern=[];
level++;
$("#level-title").text("Level "+ level );


    var randomNumber = Math.floor((Math.random()*4));
    var randomColor = colors[randomNumber];

    gamePattern.push(randomColor);


    $("#" + randomColor).css( {position: "absolute",
    top: ""+random+"px", left: ""+random2+"px"});

    var audio = new Audio ("sounds/"+ randomColor+".mp3");
      audio.play();
      console.log(gamePattern);
}

function audio(name){
    var audio = new Audio ("sounds/"+ name +".mp3");
    audio.play();
}


function animate(button){
$("#"+ button).addClass("pressed");
setTimeout(function(){
    $("#"+button).removeClass("pressed"); 
},100)
}
function startOver(){
    started = false;
    gamePattern = [];
    level = 0;
}
console.log(started);