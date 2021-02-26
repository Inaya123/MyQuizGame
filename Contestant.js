class Contestant {
    constructor(){
      this.index = null;
      this.distance = 0;
      this.name = null;

    } 
  
    getCount(){
      var contestantCountRef = database.ref('contestantCount');
      contestantCountRef.on("value",(data)=>{
         contestantCount = data.val();
      })
    }
  
    updateCount(count){
      database.ref('/').update({
        contestantCount: count
      });
    }
  
    update(){
      var contestantIndex = "Contestants/Contestant" + this.index;
      database.ref(contestantIndex).set({
        name:this.name,
        distance:this.distance
      });
    }
  
    static getcontestantInfo(){
      var contestantInfoRef = database.ref('Contestants');
      contestantInfoRef.on("value",(data)=>{
        allContestants = data.val();
      })
    }
    static updateContestantInfo(contestantInfo){
      database.ref("/").update({
        allContestants: contestantInfo
      })
    }
    // static getCarsAtEnd() {
    //   database.ref("CarsAtEnd").on("value",(data)=>{
    //     this.rank = data.val();
    //   })
    // }
    // static updateCarsAtEnd(rank) {
    //    database.ref("/").update({
    //      CarsAtEnd:rank
    //    })
    // }
  }



