import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: "root"
})
export class HttpService {
  constructor(private _http: HttpClient) {
    this.getSeattle();
  }

  getSeattle() {
    let seattle = this._http.get(
      "https://api.openweathermap.org/data/2.5/forecast?id=5809844&APPID=acf7948df39543b2ca5f597606c094aa"
    );
    seattle.subscribe(data => console.log("Got Seattle!", data));
    return seattle;
  }
  getSanJose() {
    let sanjose = this._http.get(
      "https://api.openweathermap.org/data/2.5/forecast?id=3651588&APPID=acf7948df39543b2ca5f597606c094aa"
    );
    sanjose.subscribe(data => console.log("Got San Jose!", data));
    return sanjose;
  }
  getBurbank() {
    let burbank = this._http.get(
      "https://api.openweathermap.org/data/2.5/forecast?id=5331835&APPID=acf7948df39543b2ca5f597606c094aa"
    );
    burbank.subscribe(data => console.log("Got Burbank!", data));
    return burbank;
  }
  getDallas() {
    let dallas = this._http.get(
      "https://api.openweathermap.org/data/2.5/forecast?id=5722064&APPID=acf7948df39543b2ca5f597606c094aa"
    );
    dallas.subscribe(data => console.log("Got Dallas!", data));
    return dallas;
  }
  getDc() {
    let dc = this._http.get(
      "https://api.openweathermap.org/data/2.5/forecast?id=4366164&APPID=acf7948df39543b2ca5f597606c094aa"
    );
    dc.subscribe(data => console.log("Got DC!", data));
    return dc;
  }
  getChicago() {
    let chicago = this._http.get(
      "https://api.openweathermap.org/data/2.5/forecast?id=4887398&APPID=acf7948df39543b2ca5f597606c094aa"
    );
    chicago.subscribe(data => console.log("Got Chicago!", data));
    return chicago;
  }
}
