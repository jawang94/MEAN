import { Component, OnInit } from "@angular/core";
import { HttpService } from "./http.service";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent implements OnInit {
  title = "MEAN";
  tasks;
  thirdTask;

  constructor(private _httpService: HttpService) {}
  ngOnInit() {
    this.getTasksFromService();
    this.getOneTaskFromService();
  }

  getTasksFromService() {
    let observable = this._httpService.getTasks();
    observable.subscribe(data => {
      console.log("Got our tasks!", data);
      this.tasks = data["data"];
    });
  }

  getOneTaskFromService() {
    let observable = this._httpService.getOneTask("5c04708c3669f4376acbc332");
    observable.subscribe(data => {
      console.log("Got one task!", data);
      this.thirdTask = data["data"];
    });
  }
}
