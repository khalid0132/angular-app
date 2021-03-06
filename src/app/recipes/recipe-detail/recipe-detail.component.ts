import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';

import { Recipe } from '../recipe.model';
import { RecipeService } from '../recipe.service';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {
// @Input() recipe : Recipe;
 recipe : Recipe;
 id: number;

  constructor(private recipeService: RecipeService, 
              private route: ActivatedRoute,
              private router: Router) { }

  ngOnInit(): void {
    // const id: this.route.snapshot.params['id'];
    this.route.params
      .subscribe(
        (params: Params) => {
          this.id = parseInt(params ['id']);
          // this.id = +params ['id'];
          this.recipe = this.recipeService.getRecipe(this.id)
        }
      );

      
    }
    
    onAddToShoppingList(){
      console.log('Added Item')
      this.recipeService.addIngredientToShoppingList(this.recipe.ingredients)
    }
    
    onEditRecipe(){
      //For edit
      this.router.navigate(['edit'], {relativeTo: this.route} )
      
      // complex to navigate the route but output shows same as above
      // this.router.navigate(['../', this.id, 'edit'], {relativeTo: this.route} )
  }

  //For delete button
  onDeleteRecipe(){
    this.recipeService.deleteRecipe(this.id); 
    this.router.navigate(['./recipes']);   
  }

}
