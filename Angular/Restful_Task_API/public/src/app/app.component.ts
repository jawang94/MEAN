import { Component, OnInit } from "@angular/core";
import { HttpService } from "./http.service";
import { Type } from "@angular/compiler";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent implements OnInit {
  title = "MEAN";
  tasks;
  taskStatus: boolean = false;
  showTask;
  idArr = [];

  constructor(private _httpService: HttpService) {}
  ngOnInit() {
    this.getTasksByInput();
  }

  getTasksFromService() {
    if (this.taskStatus === true) {
      this.tasks = [];
      this.taskStatus = false;
    } else {
      let observable = this._httpService.getTasks();
      observable.subscribe(data => {
        console.log("Got our tasks!", data);
        this.tasks = data["data"];
        this.taskStatus = true;
      });
    }
  }

  getTasksByInput(event: any) {
    let num = event - 48;
    let observable = this._httpService.getTasks();
    observable.subscribe(data => {
      let counter = 1;
      data["data"].forEach(element => {
        this.idArr.push([element._id, counter]);
        counter++;
      });
      console.log(this.idArr);
      let id: String;
      this.idArr.forEach(element => {
        if (element[1] === num) {
          id = element[0];
        }
      });
      this.getOneTaskFromService(id);
    });
  }

  getOneTaskFromService(taskID: String) {
    let observable = this._httpService.getOneTask(taskID);
    observable.subscribe(data => {
      console.log("Got one task!", data);
      this.showTask = data["data"];
    });
  }

  onButtonClickTasks(): void {
    console.log(`Click event is working`);
  }
  onButtonClickParam(num: Number): void {
    console.log(`Click event is working with num param: ${num}`);
    let observable = this._httpService.postToServer({ data: num });
    observable.subscribe(data => console.log("Got our data!", data));
  }
  onButtonClickParams(num: Number, str: String): void {
    console.log(
      `Click event is working with num param: ${num} and str param: ${str}`
    );
  }
  onButtonClickEvent(event: any): void {
    console.log(`Click event is working with event: ${event}`);
  }
}
