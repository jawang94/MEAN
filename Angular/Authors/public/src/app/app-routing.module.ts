import { NewComponent } from "./new/new.component";
import { EditComponent } from "./edit/edit.component";

import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

const routes: Routes = [
  { path: "new", component: NewComponent },
  { path: "edit/:id", component: EditComponent },
  { path: "", pathMatch: "full", redirectTo: "/" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
