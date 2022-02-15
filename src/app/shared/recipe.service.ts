import { EventEmitter, Injectable } from '@angular/core';
import { Recipe } from '../recipes/recipe.model';
import { Ingredient } from './ingredient.model';
import { ShoppingService } from './shopping.service';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {
  recipeSelected = new EventEmitter<Recipe>();
  private recipes: Recipe[] = [
    new Recipe('A Test Recipe',
     'This is simply a test',
      'https://upload.wikimedia.org/wikipedia/commons/1/15/Recipe_logo.jpeg',
      [
        new Ingredient('meat',1),
        new Ingredient('french fries',20)
      ]),
    new Recipe('Another Test Recipe',
     'This is simply a test',
      'https://upload.wikimedia.org/wikipedia/commons/1/15/Recipe_logo.jpeg',
      [
        new Ingredient('bread',2),
        new Ingredient('meat',1)
      ])
  ];

  constructor(private shoppingService:ShoppingService) { }
  getRecipe(){
    return this.recipes.slice();
  }
  addItoRecipe(ingredients:Ingredient[]){
     this.shoppingService.addIngredients(ingredients);
     
  }
  
}

