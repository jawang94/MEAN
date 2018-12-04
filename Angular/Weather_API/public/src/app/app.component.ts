import { Component, OnInit } from "@angular/core";
import { HttpService } from "./http.service";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent implements OnInit {
  title = "Dojo Weather Forecast";
  seattle: any;
  sanjose: any;
  burbank: any;
  dallas: any;
  dc: any;
  chicago: any;

  constructor(private _httpService: HttpService) {}

  ngOnInit() {}
}
