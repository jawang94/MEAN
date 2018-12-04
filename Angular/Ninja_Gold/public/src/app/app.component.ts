import { Component, OnInit } from "@angular/core";
import { HttpService } from "./http.service";
import { Type } from "@angular/compiler";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent implements OnInit {
  score = 0;
  messages = [];
  leaderboard = [];

  constructor(private _httpService: HttpService) {}
  ngOnInit() {
    this.messages = [{ message: "No activity yet" }];
  }

  leaderboardClick() {
    let observable = this._httpService.getUsers();
    observable.subscribe(data => {
      this.leaderboard = data["data"];
    });
  }
  saveClick(score: Number) {
    let observable = this._httpService.postToServer({
      score: this.score
    });
    observable.subscribe(data => console.log("Got your score!", data));
  }
  farmClick() {
    let x = Math.floor(Math.random() * (5 - 2 + 1) + 2);
    this.score += x;
    if (this.messages.length > 5) {
      this.messages = [];
    }
    this.messages.push({
      message: "You have gained " + x + " coins from the farm"
    });
    console.log("You have gained " + x + " coins", this.score);
  }
  caveClick() {
    let x = Math.floor(Math.random() * (10 - 5 + 1) + 5);
    this.score += x;
    if (this.messages.length > 5) {
      this.messages = [];
    }
    this.messages.push({
      message: "You have gained " + x + " coins from the cave"
    });
    console.log("You have gained " + x + " coins", this.score);
  }
  houseClick() {
    let x = Math.floor(Math.random() * (15 - 7 + 1) + 7);
    this.score += x;
    if (this.messages.length > 5) {
      this.messages = [];
    }
    this.messages.push({
      message: "You have gained " + x + " coins from the house"
    });
    console.log("You have gained " + x + " coins", this.score);
  }
  casinoClick() {
    let x = Math.floor(Math.random() * (-100 - 100 + 1) + 100);
    this.score += x;
    if (this.messages.length > 5) {
      this.messages = [];
    }
    if (x >= 0) {
      this.messages.push({
        message: "You have gained " + x + " coins from the casino"
      });
      console.log("You have gained " + x + " coins", this.score);
    } else {
      this.messages.push({
        message: "You have lost " + x + " coins from the casino"
      });
      console.log("You have lost " + Math.abs(x) + " coins", this.score);
    }
  }
  resetClick() {
    this.score = 0;
  }
}
