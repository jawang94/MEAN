import { Component, OnInit } from "@angular/core";
import { HttpService } from "../http.service";

@Component({
  selector: "app-list",
  templateUrl: "./list.component.html",
  styleUrls: ["./list.component.css"]
})
export class ListComponent implements OnInit {
  products: any;

  constructor(private _httpService: HttpService) {}

  ngOnInit() {
    this.getProducts();
  }

  getProducts() {
    let productListObservable = this._httpService.getProducts();
    productListObservable.subscribe(data => {
      console.log("Got product list!", data);
      this.products = data["data"];
    });
  }

  deleteProduct(product) {
    let deleteObservable = this._httpService.deleteProduct(product);
    deleteObservable.subscribe(data => {
      console.log("DELETED!", data);
      let updateProductList = this._httpService.getProducts();
      updateProductList.subscribe(data => {
        console.log("Updated product list!", data);
        this.products = data["data"];
      });
    });
  }
}
