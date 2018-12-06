import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { ProductsComponent } from "./products/products.component";
import { ReviewsComponent } from "./reviews/reviews.component";
import { ProductdetailComponent } from "./productdetail/productdetail.component";
import { BrandComponent } from "./brand/brand.component";
import { CategoryComponent } from "./category/category.component";
import { ReviewdetailComponent } from "./reviewdetail/reviewdetail.component";
import { AuthorComponent } from "./author/author.component";
import { AllreviewsComponent } from "./allreviews/allreviews.component";

const routes: Routes = [
  {
    path: "products",
    component: ProductsComponent,
    children: [
      { path: "details/:id", component: ProductdetailComponent },
      { path: "brand/:brand", component: BrandComponent },
      { path: "category/:cat", component: CategoryComponent }
    ]
  },
  {
    path: "reviews",
    component: ReviewsComponent,
    children: [
      { path: "details/:id", component: ReviewdetailComponent },
      { path: "author/:id", component: AuthorComponent },
      { path: "all/:id", component: AllreviewsComponent }
    ]
  },
  { path: "", pathMatch: "full", redirectTo: "/" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
