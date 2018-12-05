import { Component, OnInit } from "@angular/core";
import { HttpService } from "../http.service";

@Component({
  selector: "app-dc",
  templateUrl: "./dc.component.html",
  styleUrls: ["./dc.component.css"]
})
export class DcComponent implements OnInit {
  washingtonDC: any;

  constructor(private _httpService: HttpService) {}

  ngOnInit() {
    this.getDcDoe();
  }

  getDcDoe() {
    let observable = this._httpService.getDc();
    observable.subscribe(data => {
      this.washingtonDC = data;
      console.log(this.washingtonDC, "got heem");
    });
  }
}
