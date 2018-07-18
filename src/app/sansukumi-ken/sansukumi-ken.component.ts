import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sansukumi-ken',
  templateUrl: './sansukumi-ken.component.html',
  styleUrls: ['./sansukumi-ken.component.css']
})
export class SansukumiKenComponent implements OnInit {

  user="../../assets/player-1.jpg";
  cpu="../../assets/computer-logo.png";
  battleScreen = "../../assets/vs.jpg";
  handMode: boolean = true;
  
  displaypictures(input1, input2) {
    this.user = input1 
    this.cpu = input2
    if(this.handMode === true){
    var slug = "../../assets/pinky(slug).jpg"
    var frog = "../../assets/thumbsup(frog).jpg"
    var snake = "../../assets/pointing(snake).jpg"
    }else{
    var slug = "../../assets/slug.jpg"
    var frog = "../../assets/frog.jpg"
    var snake = "../../assets/snake.jpg"
    }

    if(this.user === "slug"){
      this.user = slug 
    }
    if(this.user === "frog"){
      this.user = frog 
    }
    if(this.user === "snake"){ 
      this.user = snake 
    }
    if(this.cpu == "slug"){
       this.cpu = slug
    }
    if(this.cpu == "frog"){ 
      this.cpu = frog
    }
    if(this.cpu == "snake"){ 
      this.cpu = snake
    } 
  }

  rps(userInput){

    var rpsOptions = ["slug", "snake", "frog", "pinky", "thumbsUp", "pointing"]
    var computerChoice = rpsOptions[Math.floor(Math.random()*3)];
    this.displaypictures(userInput, computerChoice);
   if(//Lose
      (computerChoice === "frog" && userInput === "slug") ||
      (computerChoice === "slug" && userInput === "snake") || 
      (computerChoice === "snake" && userInput === "frog")) {
        this.battleScreen = "../../assets/tenor.gif";
      console.log("CmonBruh");
    }else if(//Win
      (computerChoice === "slug" && userInput === "frog") || 
      (computerChoice === "snake" && userInput === "slug") || 
      (computerChoice === "frog" && userInput === "snake")){
      console.log("Trihard");
      this.battleScreen = "../../assets/winner.jpg";
    }else{//Tie
      console.log("CoolStoryBro");
      this.battleScreen = "../../assets/no-one-wins.png";
    }
  }
 
  constructor() { }


  ngOnInit() {
  }

}
