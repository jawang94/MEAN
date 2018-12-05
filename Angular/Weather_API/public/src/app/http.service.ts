import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: "root"
})
export class HttpService {
  constructor(private _http: HttpClient) {}

  getSeattle() {
    let seattle = this._http.get(
      "https://api.openweathermap.org/data/2.5/weather?id=5809844&APPID=acf7948df39543b2ca5f597606c094aa"
    );
    return seattle;
  }
  getSanJose() {
    let sanjose = this._http.get(
      "https://api.openweathermap.org/data/2.5/weather?id=3651588&APPID=acf7948df39543b2ca5f597606c094aa"
    );
    return sanjose;
  }
  getBurbank() {
    let burbank = this._http.get(
      "https://api.openweathermap.org/data/2.5/weather?id=5331835&APPID=acf7948df39543b2ca5f597606c094aa"
    );
    return burbank;
  }
  getDallas() {
    let dallas = this._http.get(
      "https://api.openweathermap.org/data/2.5/weather?id=5722064&APPID=acf7948df39543b2ca5f597606c094aa"
    );
    return dallas;
  }
  getDc() {
    let dc = this._http.get(
      "https://api.openweathermap.org/data/2.5/weather?id=4366164&APPID=acf7948df39543b2ca5f597606c094aa"
    );
    return dc;
  }
  getChicago() {
    let chicago = this._http.get(
      "https://api.openweathermap.org/data/2.5/weather?id=4887398&APPID=acf7948df39543b2ca5f597606c094aa"
    );
    return chicago;
  }
}
