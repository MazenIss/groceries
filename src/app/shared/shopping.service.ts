import { EventEmitter, Injectable } from '@angular/core';
import { Ingredient } from './ingredient.model';

@Injectable({
  providedIn: 'root'
})
export class ShoppingService {
  ingredientsChanged =new EventEmitter<Ingredient[]>();
 private ingredients: Ingredient[] = [
    new Ingredient('Apples', 5),
    new Ingredient('Tomatoes', 10),
  ];

  constructor() { }
  getIngredients(){
    return this.ingredients.slice();
  }
  addIngredient(i:Ingredient){
    this.ingredients.push(i); 
    this.ingredientsChanged.emit(this.ingredients.slice());
  }
  addIngredients(i:Ingredient[]){
    this.ingredients.push(...i);
    this.ingredientsChanged.emit(this.ingredients.slice());
  }
}
