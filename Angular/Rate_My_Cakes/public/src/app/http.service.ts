import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: "root"
})
export class HttpService {
  constructor(private _http: HttpClient) {}

  getCakes() {
    return this._http.get("/cakes/");
  }

  getOneCake(cakeID) {
    console.log(cakeID);
    return this._http.get("/cakes/" + cakeID);
  }

  rateCake(cake) {
    console.log(cake);
    return this._http.put("/cakes/" + cake.editID, cake);
  }

  addCake(newCake) {
    return this._http.post("/cakes", newCake);
  }
}
