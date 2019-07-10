import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { CreateGroceryComponent } from './create-grocery/create-grocery.component';
import { GroceryDetailComponent } from './grocery-detail/grocery-detail.component';

import { GroceryListComponent } from './grocery-list/grocery-list.component';
import { HttpClientModule } from '@angular/common/http';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { Routes, RouterModule } from '@angular/router';
import {CustomMaterialModule} from './material.module';
import {NgxPaginationModule} from 'ngx-pagination';



const appRoutes: Routes = [
  { path: '', redirectTo: 'grocerylist', pathMatch: 'full' },

];


@NgModule({
  declarations: [
    AppComponent,
    CreateGroceryComponent,
    GroceryDetailComponent,
    GroceryListComponent,


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    NoopAnimationsModule,
    RouterModule.forRoot(
      appRoutes,
      { useHash: true }
    ),
    CustomMaterialModule,
    NgxPaginationModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
