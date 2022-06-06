import {NgModule } from "@angular/core";
import {RouterModule, Routes} from "@angular/router";


const  routers: Routes = [
  {
    path: '',
    children: [
      {
        path: 'main-page',
        loadChildren: () => import('./main-page/main-page.module').then(m => m.MainPageModule)
      },
      {
        path: 'recipe-one',
        loadChildren: () => import('./detail-pages/recipe-one/recipe-one.module').then(m => m.RecipeOneModule)
      },
      {
        path: 'recipe-two',
        loadChildren: () => import('./detail-pages/recipe-two/recipe-two.module').then(m => m.RecipeTwoModule)
      },
      {
        path: 'recipe-three',
        loadChildren: () => import('./detail-pages/recipe-three/recipe-three.module').then(m => m.RecipeThreeModule)
      },
      {
        path: 'product-list',
        loadChildren: () => import('./product-list/product-list.module').then(m => m.ProductListModule)
      },
      {path: '', redirectTo: 'main-page', pathMatch: 'full'},
      {path: '**', redirectTo: 'main-page'},
      ]
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routers)],
  exports:[RouterModule]
})

export class AppRoutingModule {

}
