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
delete(id){
  var json=JSON.parse(localStorage["items"]);
  console.log("called")
  for(var i=0;i<json.length;i++){
    if(json[i].recipe==id){
      console.log("called")
      json.splice(i,1);
    }
  }
  localStorage["items"]=JSON.stringify(json);
}
edit(id){
  var json=JSON.parse(localStorage["items"]);
  console.log("called")
  for(var i=0;i<json.length;i++){
    if(json[i].recipe==id){
      console.log("called")
      json.splice(i,1);
    }
  }
  localStorage["items"]=JSON.stringify(json);
}
}
