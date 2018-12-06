import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";
import { HttpService } from "./http.service";
import { FormsModule } from "@angular/forms";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { ProductsComponent } from "./products/products.component";
import { ReviewsComponent } from "./reviews/reviews.component";
import { HttpClient } from "selenium-webdriver/http";
import { ProductdetailComponent } from './productdetail/productdetail.component';
import { BrandComponent } from './brand/brand.component';
import { CategoryComponent } from './category/category.component';
import { ReviewdetailComponent } from './reviewdetail/reviewdetail.component';
import { AuthorComponent } from './author/author.component';
import { AllreviewsComponent } from './allreviews/allreviews.component';

@NgModule({
  declarations: [AppComponent, ProductsComponent, ReviewsComponent, ProductdetailComponent, BrandComponent, CategoryComponent, ReviewdetailComponent, AuthorComponent, AllreviewsComponent],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  providers: [HttpService],
  bootstrap: [AppComponent]
})
export class AppModule {}
