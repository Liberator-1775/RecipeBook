import { NgModule } from '@angular/core';
import {RecipeThreeComponent} from "./recipe-three.component";
import {RecipeThreeRoutingModule} from "./recipe-three-routing.module";
import {CommonModule} from "@angular/common";

@NgModule({
  declarations: [ RecipeThreeComponent ],
  imports: [
    CommonModule,
    RecipeThreeRoutingModule,
  ],
  providers: [],
  bootstrap: [RecipeThreeComponent]
})
export class RecipeThreeModule { }
