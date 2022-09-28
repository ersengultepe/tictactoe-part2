import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})
export class GameComponent implements OnInit {

  games: string[] = [
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
  ]

  deger: string = "X";
  winner: string = "";


  constructor() { }

  ngOnInit(): void {
  }

  set(index: number){
    if (this.games[index] != "") {
      return;
    }

    this.games[index] = this.deger
    if (this.deger == "X") {
      this.deger = "O"
    }else{
      this.deger = "X"
    }

    this.gameCheck();
  }

  reset(){
    this.games = [
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
    ]

    this.deger = "X"
    this.winner = "";
  }

  gameCheck(){
    let deger2 = this.deger
    if (this.deger == "X") {
      deger2 = "O"
    }else{
      deger2 = "X"
    }

    if (this.games[0] != "" && (this.games[0]   == this.games[1]) && this.games[1] == this.games[2]) {
      this.winner = deger2  + " KAZANDI!!!"
    }else if (this.games[3] != "" && this.games[3] == this.games[4] && this.games[4] == this.games[5]) {
      this.winner = deger2  + " KAZANDI!!!"
    }else if (this.games[6] != "" &&this.games[6] == this.games[7] && this.games[7] == this.games[8]) {
      this.winner = deger2  + " KAZANDI!!!"
    }else if (this.games[0] != "" && this.games[3] != "" &&this.games[0] == this.games[3] && this.games[3] == this.games[6]) {
      this.winner = deger2  + " KAZANDI!!!"
    }else if (this.games[1] != "" && this.games[4] != "" &&this.games[1] == this.games[4] && this.games[4] == this.games[7]) {
      this.winner = deger2  + " KAZANDI!!!"
    }else if (this.games[2] != "" && this.games[5] != "" &&this.games[2] == this.games[5] && this.games[5] == this.games[8]) {
      this.winner = deger2  + " KAZANDI!!!"
    }else if (this.games[0] != "" && this.games[4] != "" &&this.games[0] == this.games[4] && this.games[4] == this.games[8]) {
      this.winner = deger2  + " KAZANDI!!!"
    }else if (this.games[2] != "" && this.games[4] != "" &&this.games[2] == this.games[4] && this.games[4] == this.games[6]) {
      this.winner = deger2  + " KAZANDI!!!"
    }
  }

}
