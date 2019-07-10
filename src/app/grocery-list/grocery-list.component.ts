import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs';
import {Grocery} from '../grocery';
import {GroceryService} from '../grocery.service';


@Component({
  selector: 'app-grocery-list',
  templateUrl: './grocery-list.component.html',
  styleUrls: ['./grocery-list.component.css']
})
export class GroceryListComponent implements OnInit {

  grocery : Observable<Grocery[]>

  config: any;

  collection = { count: 60, data: [] };


  constructor(private groceryservice : GroceryService) {

    this.config = {
      itemsPerPage: 5,
      currentPage: 1,
      totalItems: this.collection.count
    };
  }

  ngOnInit() {
    this.reloadData();
  }
  reloadData(){
    this.grocery=this.groceryservice.getGroceryList();
  }

  deleteGrocery(id:number){
    this.groceryservice.deleteGrocery(id)
    .subscribe(
      data=>{
        console.log(data);
        this.reloadData();
      },
      error => console.log(error));
  }

  pageChanged(event){
    this.config.currentPage = event;
  }

}
