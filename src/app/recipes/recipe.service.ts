import { EventEmitter, Injectable } from "@angular/core";
import { Subject } from 'rxjs';

import { Ingredient } from "../shared/ingredient.model";
import { ShoppingListService } from "../shopping-list/shopping-list.service";
import { Recipe } from "./recipe.model";

@Injectable()
export class RecipeService{
    recipesChanged = new Subject<Recipe[]>();
    // recipeSelected = new EventEmitter<Recipe>();
    recipeSelected = new Subject<Recipe>();
    // ingredientsChanged = new EventEmitter<Ingredient[]>();
   
    // private recipes: Recipe[] = [
    //     new Recipe (
    //         'Big Mac', 
    //         'All time hit McDonald best', 
    //         'https://blogg.alltforforaldrar.se/emmalous/files/2015/06/wpid-fakta-om-big-mac.jpg',
    //         [
    //             new Ingredient('Meat', 1),
    //             new Ingredient('French Fries', 20)
    //         ]),
    //     new Recipe (
    //         'Pizza', 
    //         'Pizza hat best pizza', 
    //         'https://i.ytimg.com/vi/6HP4VFogE70/hqdefault.jpg',
    //         [
    //             new Ingredient('Buns', 2),
    //             new Ingredient('Mean', 1)
    //         ])
    //   ];

    private recipes: Recipe[] = [];

      constructor(private slService: ShoppingListService) {}
      
      setRecipes(recipes: Recipe[]){
          this.recipes = recipes;
          this.recipesChanged.next(this.recipes.slice());
      }

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

      addRecipe(recipe: Recipe) {
        this.recipes.push(recipe);
        this.recipesChanged.next(this.recipes.slice());
      }

      updateRecipe(index: number, newRecipe: Recipe){
        this.recipes[index] = newRecipe;
        this.recipesChanged.next(this.recipes.slice());
      }

      // delete recipe
      deleteRecipe(index: number) {
          this.recipes.splice(index, 1);
          this.recipesChanged.next(this.recipes.slice());
      }
}