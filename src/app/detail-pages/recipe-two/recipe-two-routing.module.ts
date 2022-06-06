import {NgModule } from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {RecipeTwoComponent} from "./recipe-two.component";


const  routers: Routes = [
  {
    path: '',
    component: RecipeTwoComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routers)],
  exports:[RouterModule]
})

export class RecipeTwoRoutingModule {

}
