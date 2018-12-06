import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { HomeComponent } from "./home/home.component";
import { ListComponent } from "./list/list.component";
import { NewComponent } from "./new/new.component";
import { EditComponent } from "./edit/edit.component";

const routes: Routes = [
  { path: "home", component: HomeComponent },
  {
    path: "products",
    component: ListComponent,
    children: [{ path: "edit/:id", component: EditComponent }]
  },
  {
    path: "products/new",
    component: NewComponent
  },
  { path: "", pathMatch: "full", redirectTo: "/" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
