import { Component, OnInit } from '@angular/core';
import { Recipe } from './recipe.model';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css']
})
export class RecipesComponent implements OnInit {
recipes:Recipe[]=[ new Recipe('test tesst recipe','this is a testtest recipe','https://www.forkinthekitchen.com/wp-content/uploads/2021/04/210324.whipped.ricotta.update-5845-5.jpg')];
selected!:Recipe;  
constructor() { }

  ngOnInit(): void {
  }
  onReciped(r:Recipe){
   this.selected=r;
  }

}
