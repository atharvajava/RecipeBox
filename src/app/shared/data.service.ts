import { Injectable } from '@angular/core';

@Injectable()
export class DataService {

  constructor() { }
  items:any = [];
  itemsIng:any=[];
  recipe:any;
  ingeredients:any;

store(rec,ingr) {
    this.items.push(rec);
    this.itemsIng.push(ingr);
    localStorage.setItem("recipename", JSON.stringify(this.items));
    localStorage.setItem("ingredients", JSON.stringify(this.itemsIng));  
}
}
