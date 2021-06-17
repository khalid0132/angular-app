import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';

import { Ingredient } from '../shared/ingredient.model'
import { ShoppingListService } from './shopping-list.service';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit, OnDestroy {
  ingredients: Ingredient[];
  private subscription: Subscription;
  //  = [
  //   new Ingredient ('Apple', 5),
  //   new Ingredient ('Tomato', 15),
  //   new Ingredient ('Potato', 35)
  // ];
  constructor(private slService: ShoppingListService ) { }

  ngOnInit(): void {
   this.ingredients = this.slService.getIngredients();
   this.subscription = this.slService.ingredientsChanged
    .subscribe(
      (ingredients: Ingredient[]): void => {
        this.ingredients = ingredients;
      }
    );
  }

  onEditItem(index: number): void {
    this.slService.startedEditing.next(index);

  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }


  // onIngredientAdded(ingredient: Ingredient): void {
  //   this.ingredients.push(ingredient);
  // }

}
