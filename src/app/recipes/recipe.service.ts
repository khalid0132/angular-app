import { EventEmitter, Injectable } from "@angular/core";
import { Ingredient } from "../shared/ingredient.model";
import { ShoppingListService } from "../shopping-list/shopping-list.service";
import { Recipe } from "./recipe.model";

@Injectable()
export class RecipeService{
    recipeSelected = new EventEmitter<Recipe>();
    // ingredientsChanged = new EventEmitter<Ingredient[]>();
    private recipes: Recipe[] = [
        new Recipe (
            'Big Mac', 
            'All time hit McDonald best', 
            'https://blogg.alltforforaldrar.se/emmalous/files/2015/06/wpid-fakta-om-big-mac.jpg',
            [
                new Ingredient('Meat', 1),
                new Ingredient('French Fries', 20)
            ]),
        new Recipe (
            'Pizza', 
            'Pizza hat best pizza', 
            'https://i.ytimg.com/vi/6HP4VFogE70/hqdefault.jpg',
            [
                new Ingredient('Buns', 2),
                new Ingredient('Mean', 1)
            ])
      ];

      constructor(private slService: ShoppingListService) {}
      
      getRecipes(){
          return this.recipes.slice();
      }
      getRecipe(index: number){
          return this.recipes[index]
        //   return this.recipes.slice()[index]
      }

      addIngredientToShoppingList(ingredients: Ingredient[]){
          this.slService.addIngredients(ingredients);
      }
}