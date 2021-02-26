class Question {

    constructor() {
      this.input = createInput("Enter Your Name Here...");
      this.input2 =  createInput("Enter Correct Option No.")
      this.option1 = createElement("options");
      this.option2 = createElement("options");
      this.option3 = createElement("options");
      this.option4 = createElement("options");
      this.question = createElement('h3');
      this.title = createElement('h2')
      this.submit = createButton("submit")
    }
    hide(){
      this.input.hide();
      this.input2.hide();
      this.submit.hide();
    }
  
    display(){
      this.title.html("My Quiz App");
      this.title.position(350, 0);

      this.question.html("Question :- What starts and ends with the letter 'E', but has only one letter ?")
      this.question.position(50, 80);

      this.option1.html(" 1 : Everyone ")
      this.option1.position(150, 160);

      this.option2.html(" 2 : Envelope ")
      this.option2.position(150,180)

      this.option3.html(" 3 : Estimate ")
      this.option3.position(150,200)

      this.option4.html(" 4 : Example ")
      this.option4.position(150,220)
  
      this.input.position(150, 280);
      this.input2.position(400, 280);

      this.submit.html("Submit")
      this.submit.position(300,350)

      this.submit.mousePressed(()=>{
    this.title.hide();
    this.input.hide()
    this.input2.hide()
    this.submit.hide()

   contestant.name = this.input.value();
    contestantCount+=1;
    contestant.index = contestantCount;
    contestant.update();
    contestant.updateCount(contestantCount);

  }); 

    }
  }
