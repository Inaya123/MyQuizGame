class Quiz {
    constructor(){}
  
    getState(){
      var gameStateRef  = database.ref('gameState');
      gameStateRef.on("value",function(data){
         gameState = data.val();
      })
  
    }
  
    update(state){
      database.ref('/').update({
        gameState: state
      });
    }
  
    async start(){
      if(gameState === 0){
        contestant = new Contestant();
        var contestantCountRef = await database.ref('contestantCount').once("value");
        if(contestantCountRef.exists()){
          contestantCount = contestantCountRef.val();
          contestant.getCount();
        }
        question = new Question()
        question.display();
      }
    }
  
    play(){
      background("yellow")
     question.hide();
     Contestant.getContestantInfo();
      textSize(30);
      text("Result Of The Quiz",350,0)
  
      if(allContestants !== undefined){
        var display_position = 130;

        for(var plr in allContestants){
         var corectAns = "2";
         if(corectAns === allContestants[plr].answer)
            fill("green")
          else
            fill("red");
  
          display_position+=20;
          textSize(15);
          text(allContestants[plr].name + ": " + allContestants[plr].distance, 120,display_position)
        }
      }
  
      if(keyIsDown(UP_ARROW) && contestant.index !== null){
        contestant.distance +=50
        contestant.update();
      }
    }
  }