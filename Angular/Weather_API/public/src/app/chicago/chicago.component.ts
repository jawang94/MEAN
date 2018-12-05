import { Component, OnInit } from "@angular/core";
import { HttpService } from "../http.service";
@Component({
  selector: "app-chicago",
  templateUrl: "./chicago.component.html",
  styleUrls: ["./chicago.component.css"]
})
export class ChicagoComponent implements OnInit {
  chicago: any;

  constructor(private _httpService: HttpService) {}

  ngOnInit() {
    this.getChicagoDoe();
  }

  getChicagoDoe() {
    let observable = this._httpService.getChicago();
    observable.subscribe(data => {
      this.chicago = data;
      console.log(this.chicago, "got chicago");
    });
  }
}
