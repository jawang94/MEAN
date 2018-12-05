import { Component, OnInit } from "@angular/core";
import { HttpService } from "../http.service";

@Component({
  selector: "app-seattle",
  templateUrl: "./seattle.component.html",
  styleUrls: ["./seattle.component.css"]
})
export class SeattleComponent implements OnInit {
  seattle: any;

  constructor(private _httpService: HttpService) {}

  ngOnInit() {
    this.getSeattleDoe();
  }

  getSeattleDoe() {
    let observable = this._httpService.getSeattle();
    observable.subscribe(data => {
      this.seattle = data;
      console.log(this.seattle, "got seattle");
    });
  }
}
