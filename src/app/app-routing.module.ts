import { NgModule } from '@angular/core';

import { CreateGroceryComponent } from './create-grocery/create-grocery.component';
import { GroceryDetailComponent } from './grocery-detail/grocery-detail.component';
import { GroceryListComponent } from './grocery-list/grocery-list.component';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  // { path: '', redirectTo: 'grocery', pathMatch: 'full' },
  { path: 'grocerylist', component: GroceryListComponent },
  { path: 'groceryadd', component: CreateGroceryComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
