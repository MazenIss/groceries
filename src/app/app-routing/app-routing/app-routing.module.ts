import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeaderComponent } from 'src/app/header/header.component';
import { RecipeDetailComponent } from 'src/app/recipes/recipe-detail/recipe-detail.component';
import { RecipeEditComponent } from 'src/app/recipes/recipe-edit/recipe-edit.component';
import { RecipeStartComponent } from 'src/app/recipes/recipe-start/recipe-start.component';
import { RecipesComponent } from 'src/app/recipes/recipes.component';
import { ShoppingListComponent } from 'src/app/shopping-list/shopping-list.component';

const appRoutes:Routes =[
  {path:'recipes',component : RecipesComponent,children:[
    {path:'new',component: RecipeEditComponent},
    {path:':id/edit',component: RecipeEditComponent},
    {path:':id',component:RecipeDetailComponent},
    {path:'',component:RecipeStartComponent},
  ]},
  {path:'shopping-list',component:ShoppingListComponent},
  {path:'',redirectTo:'/recipes',pathMatch:'full'},
]

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(appRoutes),
  ],
  exports : [RouterModule]
})
export class AppRoutingModule { }
