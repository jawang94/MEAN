import { Component, OnInit } from "@angular/core";
import { HttpService } from "./http.service";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  title = "Favorite Authors!";
  authors: any;

  constructor(private _httpService: HttpService) {}

  ngOnInit() {
    this.getAllAuthors();
  }

  getAllAuthors() {
    let authorListObserable = this._httpService.getAuthors();
    authorListObserable.subscribe(data => {
      console.log("Got all the authors!", data);
      this.authors = data["data"];
    });
  }

  deleteAuthor(author) {
    console.log("**** this route is working ****");
    console.log(author._id);
    return this._httpService.deleteOneAuthor(author._id);
  }

  imabutton() {
    console.log("stop that...");
  }
}
