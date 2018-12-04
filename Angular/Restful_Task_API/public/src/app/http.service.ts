import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: "root"
})
export class HttpService {
  constructor(private _http: HttpClient) {}

  addTask(newtask) {
    return this._http.post("/tasks", newtask);
  }

  editTask(task) {
    console.log(task);
    return this._http.put("/tasks/" + task.editId, task);
  }

  getTasks() {
    return this._http.get("/tasks");
  }

  getOneTask(id: string) {
    return this._http.get("/tasks/" + id);
  }
}
