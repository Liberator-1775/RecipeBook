import { NgModule } from '@angular/core';
import {MainPageComponent} from "./main-page.component";
import {MainPageRoutingModule} from "./main-page-routing.module";
import {CommonModule} from "@angular/common";

@NgModule({
  declarations: [ MainPageComponent ],
  imports: [
    CommonModule,
    MainPageRoutingModule,
  ],
  providers: [],
  bootstrap: [MainPageComponent]
})
export class MainPageModule { }
