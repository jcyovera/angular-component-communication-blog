import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ExampleComponent } from "./example/example.component";
import { SubjectsRoutingModule } from "./subjects-routing.module";

@NgModule({
  imports: [CommonModule, SubjectsRoutingModule],
  declarations: [ExampleComponent]
})
export class SubjectsModule {}
