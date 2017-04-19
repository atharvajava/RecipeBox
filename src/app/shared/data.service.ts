import { Injectable } from '@angular/core';

@Injectable()
export class DataService {

  constructor() { }
  items:any;
  recipeBook:any[]=[];
  recipe:any;
  ingeredients:any;
  value:any;

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
delete(id) {
  var json=JSON.parse(localStorage["items"]);
  console.log("called")
  for(let i=0;i<json.length;i++){
    if(json[i].recipe==id){
      console.log("called")
      json.splice(i,1);
    }
  }
  localStorage["items"]=JSON.stringify(json);
}
edit(id,old){
  var json=JSON.parse(localStorage["items"]);
  console.log(json[0].ingredients);
  console.log(old);
  id=id.split(",");
  console.log(JSON.stringify(json[0].ingredients)===JSON.stringify(old));
  for(let i=0;i<json.length;i++){
    console.log(i);
    if(JSON.stringify(json[i].ingredients)===JSON.stringify(old)){
     // console.log("called"+json[i].ingredients);
      json[i].ingredients=id.slice(0);
    }
  }
  localStorage["items"]=JSON.stringify(json);
  //localStorage.setItem("items", JSON.stringify(this.recipeBook));
}

storeRecValue(val){
this.value=val;
}
}

