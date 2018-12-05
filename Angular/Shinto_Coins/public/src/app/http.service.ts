import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: "root"
})
export class HttpService {
  transactions = [];
  selectedTransaction: any;
  transactionID = 0;
  shintoValue = 0;
  shintosOwned = 0;

  constructor(private _http: HttpClient) {}

  shareTransactionHistory() {
    return this.transactions;
  }
  shareShintoValue() {
    return this.shintoValue;
  }
  shareShintosOwned() {
    return this.shintosOwned;
  }
  shareTransaction(num) {
    this.transactions.forEach(element => {
      if (element.id === parseInt(num)) {
        this.selectedTransaction = element;
      }
    });
    return this.selectedTransaction;
  }
  addToValueViaBuy(num) {
    this.transactions.push({
      id: this.transactionID,
      action: "Bought",
      amount: num,
      value: this.shintoValue
    });
    this.transactionID++;
    this.shintoValue += parseInt(num);
  }
  addToValueViaMine(num) {
    this.transactions.push({
      id: this.transactionID,
      action: "Mined",
      amount: num,
      value: this.shintoValue
    });
    console.log(this.transactionID);
    this.transactionID++;
    console.log(this.transactionID);
    this.shintoValue += parseInt(num);
  }
  buyShintos(num) {
    this.shintosOwned += parseInt(num);
  }
  minusFromValue(num) {
    this.shintoValue -= parseInt(num);
  }
  sellShintos(num) {
    this.transactions.push({
      id: this.transactionID,
      action: "Sold",
      amount: num,
      value: this.shintoValue
    });
    this.transactionID++;
    this.shintosOwned -= parseInt(num);
  }
}
