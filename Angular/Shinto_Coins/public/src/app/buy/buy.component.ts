import { Component, OnInit } from "@angular/core";
import { HttpService } from "../http.service";

@Component({
  selector: "app-buy",
  templateUrl: "./buy.component.html",
  styleUrls: ["./buy.component.css"]
})
export class BuyComponent implements OnInit {
  shintoValue: number;
  shintosOwned: number;
  purchaseAmount: any;

  constructor(private _httpService: HttpService) {}

  ngOnInit() {
    this.getShintoValue();
    this.getShintosOwned();
  }

  onSubmit() {
    this._httpService.buyShintos(this.purchaseAmount);
    this._httpService.addToValueViaBuy(this.purchaseAmount);
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
