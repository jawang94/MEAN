import { Component, OnInit } from "@angular/core";
import { HttpService } from "../http.service";

@Component({
  selector: "app-mine",
  templateUrl: "./mine.component.html",
  styleUrls: ["./mine.component.css"]
})
export class MineComponent implements OnInit {
  answer = "13";
  guess: any;
  result: any;

  constructor(private _httpService: HttpService) {}

  ngOnInit() {}

  onSubmit() {
    if (this.answer === this.guess) {
      this._httpService.addToValueViaMine(1);
      this.result = "CORRECT!";
    } else {
      this.result = "INCORRECT...";
    }
  }
}
