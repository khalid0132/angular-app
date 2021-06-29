import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { Recipe } from '../recipe.model'; 
import { RecipeService } from '../recipe.service';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  // @Output() recipeWasSelected = new EventEmitter<Recipe>();

  recipes: Recipe[];
  // recipes: Recipe[] = [
  //   new Recipe ('A Test Recipe', 'This is simply a test', 'https://i2.wp.com/www.downshiftology.com/wp-content/uploads/2018/12/Shakshuka-19.jpg'),
  //   new Recipe ('Another Test Recipe', 'This is simply a test', 'https://imagesvc.meredithcorp.io/v3/mm/image?q=85&c=sc&poi=face&w=2000&h=1000&url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F43%2F2020%2F07%2F22%2F8000900-2000.jpg')
  // ];
  constructor(private recipeService: RecipeService,
              private router: Router,
              private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.recipeService.recipesChanged
      .subscribe(
        (recipes: Recipe[]): void => {
          this.recipes = recipes;
        }
      );
    this.recipes = this.recipeService.getRecipes();
  }

  // onRecipeSelected(recipe: Recipe): void {
  //   console.log(recipe)
  //   this.recipeWasSelected.emit(recipe);
  // }

  onNewRecipe(){
    this.router.navigate(['new'], {relativeTo: this.route})
  }
}
