import { Injectable } from '@angular/core';

@Injectable()
export class DataService {

  constructor() { }
  items:any;
  recipeBook:any[]=[];
  recipe:any;
  ingeredients:any;

store(rec,ingr) {
    ingr = ingr.split(",");
    this.items = { 'recipe': rec, 'ingredients': ingr};
    this.recipeBook.push(this.items);
    localStorage.setItem("items", JSON.stringify(this.recipeBook));
}

genRecipe(){
    const gen=JSON.parse(localStorage.getItem("items"));
    console.log("Hello"+gen[0].ingredients);
    return gen;
}
delete(){
  var del=this.genRecipe();
  localStorage.removeItem(del[0]);
}
}
