import { EventEmitter } from "@angular/core";
import { Ingredient } from "../shared/ingredient.model";

export class ShoppingListService {
    ingredientsChanged = new EventEmitter<Ingredient[]>();
    private ingredients: Ingredient[] = [
        new Ingredient ('Apple', 5),
        new Ingredient ('Tomato', 15),
        new Ingredient ('Potato', 35),
      ];
      
      getIngredient(){
        return this.ingredients.slice();
      }
      addIngredient(ingredient: Ingredient): void{
        this.ingredients.push(ingredient);
        this.ingredientsChanged.emit(this.ingredients.slice());
      }

      addIngredients(ingredients: Ingredient[]){
        // for (let ingredient of ingredients) {
        //   this.addIngredient(ingredient)
        // }
        this.ingredients.push(...ingredients);
        this.ingredientsChanged.emit(this.ingredients.slice())
      }
}