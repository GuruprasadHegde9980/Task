import { Component, OnInit } from '@angular/core';
import { GroceryService} from '../grocery.service';
import { Grocery } from '../grocery';

@Component({
  selector: 'app-create-grocery',
  templateUrl: './create-grocery.component.html',
  styleUrls: ['./create-grocery.component.css']
})
export class CreateGroceryComponent implements OnInit {

  grocery : Grocery = new Grocery();
  submitted = false;

  constructor(private groceryservice : GroceryService) { }

  ngOnInit() {
  }
  newGrocery() : void {
   this.submitted=false;
    this.grocery= new Grocery();
  }

  save(){

    this.groceryservice.createGrocery(this.grocery)
    .subscribe(data=> console.log(data),error=> console.error());
    this.grocery= new Grocery();

  }
  onSubmit() {
    this.submitted = true;
    this.save();
  }

}
