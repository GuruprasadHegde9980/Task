import { Component, OnInit , Input} from '@angular/core';
import { Grocery } from '../grocery';
import { GroceryService } from '../grocery.service';
import { GroceryListComponent } from '../grocery-list/grocery-list.component';

@Component({
  selector: 'app-grocery-detail',
  templateUrl: './grocery-detail.component.html',
  styleUrls: ['./grocery-detail.component.css']
})
export class GroceryDetailComponent implements OnInit {

  @Input() grocery : Grocery;

  constructor( private groceryservice : GroceryService , private grocerylist : GroceryListComponent  ) { }

  ngOnInit() {
  }

}
