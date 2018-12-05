import { Component, OnInit } from "@angular/core";
import { HttpService } from "../http.service";
@Component({
  selector: "app-burbank",
  templateUrl: "./burbank.component.html",
  styleUrls: ["./burbank.component.css"]
})
export class BurbankComponent implements OnInit {
  burbank: any;

  constructor(private _httpService: HttpService) {}

  ngOnInit() {
    this.getBurbankDoe();
  }

  getBurbankDoe() {
    let observable = this._httpService.getBurbank();
    observable.subscribe(data => {
      this.burbank = data;
      console.log(this.burbank, "got heem");
    });
  }
}
