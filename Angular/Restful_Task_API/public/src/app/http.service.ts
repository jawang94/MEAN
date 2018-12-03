import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: "root"
})
export class HttpService {
  constructor(private _http: HttpClient) {
    this.getTasks();
    this.getOneTask("5c04708c3669f4376acbc332");
  }

  getTasks() {
    let tempObservable = this._http.get("/tasks");

    tempObservable.subscribe(data => console.log("Got our tasks!", data));
  }

  getOneTask(id: string) {
    let tempObservable = this._http.get("/tasks/" + id);

    tempObservable.subscribe(data => console.log("Got one task!", data));
  }
}
