import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('First Recipe test', 'Test insert recipe', 'https://pixnio.com/free-images/food-and-drink/barbecue-grilling-food/chicken-grilling-725x544.jpg')
  ];
  constructor() { }

  ngOnInit() {
  }

}
