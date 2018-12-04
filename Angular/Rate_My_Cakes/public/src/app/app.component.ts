import { Component, OnInit } from "@angular/core";
import { HttpService } from "./http.service";
import { Type } from "@angular/compiler";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent implements OnInit {
  newCake: any;
  rateCake: any;
  selectedCake: any;
  selectedCakeRating: any;
  cakes: any;
  title = "Rate My Cakes";

  constructor(private _httpService: HttpService) {}
  ngOnInit() {
    this.getAllCakes();
    this.newCake = { baker: "", imageURL: "" };
    this.rateCake = { editID: "", comment: "", rating: "" };
  }

  onSubmit() {
    let newCakeObservable = this._httpService.addCake(this.newCake);
    newCakeObservable.subscribe(data => console.log("Got our new cake!", data));
    this.newCake = { title: "", description: "" };
    let updatedCakeList = this._httpService.getCakes();
    updatedCakeList.subscribe(data => {
      console.log("Updated the cake list!", data);
      this.cakes = data["data"];
    });
  }

  onSubmitRate(cake) {
    console.log("rating...", this.rateCake, cake);
    this.rateCake.editID = cake._id;
    let rateCakeObservable = this._httpService.rateCake(this.rateCake);
    rateCakeObservable.subscribe(data => {
      console.log("Successfully rated cake!", data);
    });
    let cakeListObservable = this._httpService.getCakes();
    cakeListObservable.subscribe(data => {
      console.log("Got our cakes!", data);
      this.cakes = data["data"];
    });
    this.rateCake = { editID: "", comment: "", rating: "" };
  }

  getAllCakes() {
    let cakeListObservable = this._httpService.getCakes();
    cakeListObservable.subscribe(data => {
      console.log("Got our cakes!", data);
      this.cakes = data["data"];
    });
  }

  cakeToShow(cake) {
    this.selectedCake = cake;
    let sum = 0;
    cake.reviews.forEach(element => {
      sum += parseInt(element.rating);
    });
    console.log(sum, cake.reviews.length);
    this.selectedCakeRating = sum / cake.reviews.length;
    console.log(this.selectedCakeRating);
  }
}
