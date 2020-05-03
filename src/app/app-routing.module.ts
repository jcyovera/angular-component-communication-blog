import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

export const routes: Routes = [
  {
    path: "",
    redirectTo: "subjects",
    pathMatch: "full"
  },
  {
    path: "subjects",
    loadChildren: () =>
      import("./subjects/subjects.module").then(m => m.SubjectsModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
