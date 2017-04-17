import { Component, OnInit } from '@angular/core';
import { DataService } from '../shared/data.service';

@Component({
  selector: 'app-recipe-book',
  templateUrl: './recipe-book.component.html',
  styleUrls: ['./recipe-book.component.scss']
})
export class RecipeBookComponent implements OnInit {
  recipeBook:any=this._dataService.genRecipe();
  value:any;


  constructor(private _dataService:DataService) {
   } 
  ngOnInit() {
    console.log(this.recipeBook.recipe);
  }

  delete(){
    this._dataService.delete(this.value);
    this.recipeBook=this._dataService.genRecipe();
  }
  button(btnValue){
    console.log(btnValue.recipe)
    this.value=btnValue.recipe
  }
}
