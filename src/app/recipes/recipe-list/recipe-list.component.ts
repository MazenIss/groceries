import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes:Recipe[]=[ new Recipe('test recipe','this is a test recipe','https://www.forkinthekitchen.com/wp-content/uploads/2021/04/210324.whipped.ricotta.update-5845-5.jpg'),
  new Recipe('test test recipe','this is a test recipe','https://www.forkinthekitchen.com/wp-content/uploads/2021/04/210324.whipped.ricotta.update-5845-5.jpg')];
@Output() reciped=new EventEmitter<Recipe>();
  constructor() { }

  ngOnInit(): void {
  }
  onRecipe(r:Recipe){
    this.reciped.emit(r);

  }

}
