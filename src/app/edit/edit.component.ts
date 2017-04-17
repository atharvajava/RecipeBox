import { Component, OnInit } from '@angular/core';
import { DataService } from '../shared/data.service';
import { Router} from '@angular/router'

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss']
})
export class EditComponent implements OnInit {

  constructor(private _dataService:DataService,private router:Router ) { }

  ngOnInit() {
  }

  insertRecipe(){
    var r=(<HTMLInputElement>document.getElementById("recipe")).value;
    var i=(<HTMLInputElement>document.getElementById("ingredients")).value;
    console.log(r);
    console.log(i);
    this._dataService.store(r,i);
    this.router.navigate(['/recipe-book']);
  }
}
