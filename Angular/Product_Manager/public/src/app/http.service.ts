import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: "root"
})
export class HttpService {
  constructor(private _http: HttpClient) {}

  getProducts() {
    return this._http.get("/product/");
  }

  getOneProduct(productID) {
    console.log(productID);
    return this._http.get("/product/" + productID);
  }

  editProduct(product) {
    console.log(product);
    return this._http.put("/product/" + product.editID, product);
  }

  createProduct(newProduct) {
    console.log("Service check");
    return this._http.post("/product", newProduct);
  }

  deleteProduct(product) {
    console.log("Delete Service Check");
    return this._http.delete("/product/delete/" + product._id);
  }
}
