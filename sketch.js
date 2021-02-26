var canvas;
var gameState = 0
var contestantCount, database, quiz, question , contestant

function setup(){
  canvas = createCanvas(850,400);
  database = firebase.database()
  game = new Quiz();
  game.getState();
   game.start();
}


function draw(){
  background("pink");
  if(contestantCount === 2){
    game.update(1);
  }
  if(gameState === 1){
    clear();
    game.play();
  }
}
