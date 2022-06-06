import {NgModule } from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {RecipeOneComponent} from "./recipe-one.component";


const  routers: Routes = [
  {
    path: '',
    component: RecipeOneComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routers)],
  exports:[RouterModule]
})

export class RecipeOneRoutingModule {

}
