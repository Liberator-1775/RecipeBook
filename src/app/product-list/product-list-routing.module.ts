import {NgModule } from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {ProductListComponent} from "./product-list.component";


const  routers: Routes = [
  {
    path: '',
    component: ProductListComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routers)],
  exports:[RouterModule]
})

export class ProductListRoutingModule {

}
