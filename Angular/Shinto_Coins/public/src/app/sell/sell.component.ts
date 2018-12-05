import { Component, OnInit } from "@angular/core";
import { HttpService } from "../http.service";

@Component({
  selector: "app-sell",
  templateUrl: "./sell.component.html",
  styleUrls: ["./sell.component.css"]
})
export class SellComponent implements OnInit {
  shintoValue: number;
  shintosOwned: number;
  sellAmount: any;

  constructor(private _httpService: HttpService) {}

  ngOnInit() {
    this.getShintoValue();
    this.getShintosOwned();
  }

  onSubmit() {
    this._httpService.sellShintos(this.sellAmount);
    this._httpService.minusFromValue(this.sellAmount);
    this.shintoValue = this._httpService.shareShintoValue();
    this.shintosOwned = this._httpService.shareShintosOwned();
  }

  getShintoValue() {
    this.shintoValue = this._httpService.shareShintoValue();
  }
  getShintosOwned() {
    this.shintosOwned = this._httpService.shareShintosOwned();
  }
}
