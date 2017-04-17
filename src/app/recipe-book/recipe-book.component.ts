import { Component, OnInit } from '@angular/core';
import { DataService } from '../shared/data.service';

@Component({
  selector: 'app-recipe-book',
  templateUrl: './recipe-book.component.html',
  styleUrls: ['./recipe-book.component.scss']
})
export class RecipeBookComponent implements OnInit {
  recipeBook:any=this._dataService.genRecipe();


  constructor(private _dataService:DataService) { } 
  ngOnInit() {
    console.log(this.recipeBook.recipe);
  }

  delete(){
    this._dataService.delete();
  }
}
