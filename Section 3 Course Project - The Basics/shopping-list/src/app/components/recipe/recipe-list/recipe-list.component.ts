import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css'],
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe(
      'Pizza',
      'Italian Pizza',
      'https://b.zmtcdn.com/data/pictures/chains/2/18941862/35725cef00f2958d28fc2f6df305520e.jpg?fit=around|300:273&crop=300:273;*,*'
    ),
    new Recipe(
      'Pizza',
      'Italian Pizza',
      'https://b.zmtcdn.com/data/pictures/chains/2/18941862/35725cef00f2958d28fc2f6df305520e.jpg?fit=around|300:273&crop=300:273;*,*'
    ),
  ];

  constructor() {}

  ngOnInit(): void {}
}
