import {NgModule } from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {RecipeThreeComponent} from "./recipe-three.component";


const  routers: Routes = [
  {
    path: '',
    component: RecipeThreeComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routers)],
  exports:[RouterModule]
})

export class RecipeThreeRoutingModule {

}
