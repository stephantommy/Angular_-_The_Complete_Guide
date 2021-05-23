import { EventEmitter } from "@angular/core";
import { Injectable } from "@angular/core";
import { Ingredient } from "../shared/ingredient.model";

@Injectable({
  providedIn: "root",
})
export class ShoppingListService {
  private ingredients: Ingredient[] = [
    new Ingredient("Apples", 5),
    new Ingredient("Tomatoes", 10),
  ];

  newIngredients = new EventEmitter<Ingredient[]>();

  constructor() {}

  getIngredients() {
    return this.ingredients.slice();
  }

  addIngredient(ingredient: Ingredient) {
    this.ingredients.push(ingredient);
    this.newIngredients.emit(this.ingredients.slice());
  }

  addIngredients(ingredients: Ingredient[]) {
    this.ingredients.push(...ingredients);
    this.newIngredients.emit(this.ingredients.slice());
  }
}
