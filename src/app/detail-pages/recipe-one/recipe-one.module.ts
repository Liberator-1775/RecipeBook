import { NgModule } from '@angular/core';
import {RecipeOneComponent} from "./recipe-one.component";
import {RecipeOneRoutingModule} from "./recipe-one-routing.module";
import {CommonModule} from "@angular/common";

@NgModule({
  declarations: [ RecipeOneComponent ],
  imports: [
    CommonModule,
    RecipeOneRoutingModule,
  ],
  providers: [],
  bootstrap: [RecipeOneComponent]
})
export class RecipeOneModule { }
