import { NgModule } from '@angular/core';
import {RecipeTwoComponent} from "./recipe-two.component";
import {RecipeTwoRoutingModule} from "./recipe-two-routing.module";
import {CommonModule} from "@angular/common";

@NgModule({
  declarations: [ RecipeTwoComponent ],
  imports: [
    CommonModule,
    RecipeTwoRoutingModule,
  ],
  providers: [],
  bootstrap: [RecipeTwoComponent]
})
export class RecipeTwoModule { }
