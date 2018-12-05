import { Component, OnInit } from "@angular/core";
import { HttpService } from "../http.service";

@Component({
  selector: "app-ledger",
  templateUrl: "./ledger.component.html",
  styleUrls: ["./ledger.component.css"]
})
export class LedgerComponent implements OnInit {
  transactionHistory: any;

  constructor(private _httpService: HttpService) {}

  ngOnInit() {
    this.getTransactions();
  }

  getTransactions() {
    this.transactionHistory = this._httpService.shareTransactionHistory();
  }
}
