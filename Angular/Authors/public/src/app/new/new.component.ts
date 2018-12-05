import { Component, OnInit, Input } from "@angular/core";
import { HttpService } from "../http.service";
import { Router } from "@angular/router";

@Component({
  selector: "app-new",
  templateUrl: "./new.component.html",
  styleUrls: ["./new.component.css"]
})
export class NewComponent implements OnInit {
  newAuthor: any;

  constructor(private _httpService: HttpService, private _router: Router) {}

  ngOnInit() {
    this.newAuthor = { name: "" };
  }

  onSubmit() {
    let newAuthor = this._httpService.addAuthor(this.newAuthor);
    newAuthor.subscribe(data => console.log("Got our new cake!", data));
    this.newAuthor = { name: "" };
  }

  goHome() {
    this._router.navigate(["/"]);
  }
}
