import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import {Recipe} from '../../recipe.model';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent implements OnInit {
  @Output() recipeSelected = new EventEmitter<void>();
  @Input() recipes: Recipe[] = [
    new Recipe ('A Test Recipe', 'This is simply a test', 'https://i2.wp.com/www.downshiftology.com/wp-content/uploads/2018/12/Shakshuka-19.jpg')
  ];
  // @Input() recipe: Recipe[];
  constructor() { }
  
  ngOnInit(): void {
  }
  onSelected(){
    this.recipeSelected.emit();
  }

}
