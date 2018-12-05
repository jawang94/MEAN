import { Component, OnInit } from "@angular/core";
import { HttpService } from "../http.service";
import { ActivatedRoute, Params, Router } from "@angular/router";

@Component({
  selector: "app-edit",
  templateUrl: "./edit.component.html",
  styleUrls: ["./edit.component.css"]
})
export class EditComponent implements OnInit {
  selectedAuthor: any;
  authorEdit: any;
  paramID: any;

  constructor(
    private _route: ActivatedRoute,
    private _router: Router,
    private _httpService: HttpService
  ) {}

  ngOnInit() {
    this._route.params.subscribe((params: Params) => {
      this.paramID = params["id"];
      console.log(this.paramID);
    });
    this.getSelectedAuthor(this.paramID);
    this.authorEdit = { editID: this.paramID, name: "" };
  }

  getSelectedAuthor(id) {
    let observable = this._httpService.getOneAuthor(id);
    observable.subscribe(data => {
      this.selectedAuthor = data["data"][0];
    });
  }

  onSubmitEdit() {
    console.log("edit author is ", this.authorEdit);
    let editedAuthor = this._httpService.editAuthor(this.authorEdit);
    editedAuthor.subscribe(data => console.log("Got our edited author!", data));
    this.authorEdit.name = { editID: "", name: "" };
  }
}
