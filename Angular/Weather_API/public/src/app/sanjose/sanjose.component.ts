import { Component, OnInit } from "@angular/core";
import { HttpService } from "../http.service";

@Component({
  selector: "app-sanjose",
  templateUrl: "./sanjose.component.html",
  styleUrls: ["./sanjose.component.css"]
})
export class SanjoseComponent implements OnInit {
  sanjose: any;

  constructor(private _httpService: HttpService) {}

  ngOnInit() {
    this.getSanJoseDoe();
  }

  getSanJoseDoe() {
    let observable = this._httpService.getSanJose();
    observable.subscribe(data => {
      this.sanjose = data;
      console.log(this.sanjose, "got heem");
    });
  }
}
