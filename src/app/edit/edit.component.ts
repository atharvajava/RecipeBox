import { Component, OnInit } from '@angular/core';
import { DataService } from '../shared/data.service';
import { Router} from '@angular/router';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss']
})
export class EditComponent implements OnInit {
  value:any=this._dataService.value||"";
  recipeName:string=this.value.recipe||"";
  ingredientsName:any=this.value.ingredients||"";
  temp:any=this.ingredientsName+'';

  constructor(private _dataService:DataService,private router:Router ) { }

  ngOnInit() {
    console.log(this.value);
    (<HTMLInputElement>document.getElementById("recipe")).value+=this.recipeName;
    (<HTMLInputElement>document.getElementById("ingredients")).value+=this.ingredientsName;
  }

  editRecipe(){
    this.temp=this.temp.split(",");
    console.log(this.temp);
    this.ingredientsName=(<HTMLInputElement>document.getElementById("ingredients")).value;
    this._dataService.edit(this.ingredientsName,this.temp);
  }
}
