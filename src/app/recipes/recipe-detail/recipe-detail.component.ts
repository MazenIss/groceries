import { Component, OnInit} from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { RecipeService } from 'src/app/shared/recipe.service';

import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {
   recipe: Recipe;
   id!:number;

  constructor(private recipeService:RecipeService,private route:ActivatedRoute,private router:Router) { }

  ngOnInit() {
    this.route.params.subscribe(
      (params:Params)=>{
          this.id=+params['id']; 
          this.recipe=this.recipeService.getRecipeById(this.id);
      }
    );
  }
  addToList(){
    this.recipeService.addItoRecipe(this.recipe.ingredients);

  }
  onEditRecipe(){
   this.router.navigate(['edit'],{relativeTo:this.route});
  }


}
