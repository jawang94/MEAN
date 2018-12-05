import { Component, OnInit } from "@angular/core";
import { HttpService } from "../http.service";
import { ActivatedRoute, Params, Router } from "@angular/router";

@Component({
  selector: "app-transaction",
  templateUrl: "./transaction.component.html",
  styleUrls: ["./transaction.component.css"]
})
export class TransactionComponent implements OnInit {
  selectedTransaction: any;
  paramID: any;

  constructor(
    private _route: ActivatedRoute,
    private _router: Router,
    private _httpService: HttpService
  ) {}

  ngOnInit() {
    this._route.params.subscribe((params: Params) => {
      console.log("The param id is", params["id"]);
      this.paramID = params["id"];
    });
    this.getSelectedTransaction();
  }

  getSelectedTransaction() {
    this.selectedTransaction = this._httpService.shareTransaction(this.paramID);
  }
}
