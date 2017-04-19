import { Component, OnInit,EventEmitter,Input,Output } from '@angular/core';
import { DataService } from '../shared/data.service';
import { Router } from '@angular/router';

@Component({
  templateUrl: './recipe-book.component.html',
  styleUrls: ['./recipe-book.component.scss']
})



export class RecipeBookComponent implements OnInit {
  recipeBook:any=this._dataService.genRecipe();
  value:any="";


  constructor(private _dataService:DataService,private router:Router) {
   } 
  ngOnInit() {
  }

  delete(){
    this._dataService.delete(this.value);
    this.recipeBook=this._dataService.genRecipe();
  }
  button(btnValue){
    console.log(btnValue.recipe)
    this.value=btnValue.recipe
    this._dataService.storeRecValue(btnValue);
  }
  edit(){
    this.router.navigate(['/edit-recipe']);
  }
}
