import { Component, OnInit, Input } from "@angular/core";
import { HttpService } from "../http.service";
import { Type } from "@angular/compiler";

@Component({
  selector: "app-cake",
  templateUrl: "./cake.component.html",
  styleUrls: ["./cake.component.css"]
})
export class CakeComponent implements OnInit {
  @Input() cakeToShow: any;
  @Input() cakeToShowRating: any;
  constructor(private _httpService: HttpService) {}

  ngOnInit() {}
}
