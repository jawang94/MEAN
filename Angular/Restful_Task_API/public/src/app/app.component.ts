import { Component, OnInit } from "@angular/core";
import { HttpService } from "./http.service";
import { Type } from "@angular/compiler";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent implements OnInit {
  newTask: any;
  editTask: any;
  editId: any;
  tasks;
  taskStatus: boolean = false;
  showTask;
  idArr = [];

  constructor(private _httpService: HttpService) {}
  ngOnInit() {
    this.newTask = { title: "", description: "" };
    this.editTask = { title: "", description: "" };
  }

  onSubmit() {
    let observable = this._httpService.addTask(this.newTask);
    observable.subscribe(data => console.log("Got our new task!", data));
    this.newTask = { editId: "", title: "", description: "" };
  }

  onSubmitEdit() {
    console.log("submitting...", this.editTask);
    let observable = this._httpService.editTask(this.editTask);
    observable.subscribe(data => console.log("Edited task!", data));
    this.editTask = { editId: "", title: "", description: "" };
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
      let id: string;
      this.idArr.forEach(element => {
        if (element[1] === num) {
          id = element[0];
        }
      });
      this.getOneTaskFromService(id);
    });
  }

  getOneTaskFromService(taskID: string) {
    let observable = this._httpService.getOneTask(taskID);
    observable.subscribe(data => {
      console.log("Got one task!", data);
      this.showTask = data["data"];
    });
  }
}
