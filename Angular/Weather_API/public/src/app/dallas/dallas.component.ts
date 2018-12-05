import { Component, OnInit } from "@angular/core";
import { HttpService } from "../http.service";
@Component({
  selector: "app-dallas",
  templateUrl: "./dallas.component.html",
  styleUrls: ["./dallas.component.css"]
})
export class DallasComponent implements OnInit {
  dallas: any;

  constructor(private _httpService: HttpService) {}

  ngOnInit() {
    this.getDallasDoe();
  }

  getDallasDoe() {
    let observable = this._httpService.getDallas();
    observable.subscribe(data => {
      this.dallas = data;
      console.log(this.dallas, "got dallas");
    });
  }
}
