import { NgModule } from '@angular/core';
import {ProductListComponent} from "./product-list.component";
import {ProductListRoutingModule} from "./product-list-routing.module";
import {CommonModule} from "@angular/common";

@NgModule({
  declarations: [ ProductListComponent ],
  imports: [
    CommonModule,
    ProductListRoutingModule,
  ],
  providers: [],
  bootstrap: [ProductListComponent]
})
export class ProductListModule { }
