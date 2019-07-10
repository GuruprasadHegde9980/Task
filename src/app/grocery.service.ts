import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, Observer } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class GroceryService {

  private baseUrl='http://localhost:3000';

  constructor(private http:HttpClient) { }

  getGrocery(id:number):Observable<object>{
    return this.http.get(`${this.baseUrl}/grocery/${id}`);
  }
  createGrocery(grocery:object):Observable<object>{
    return this.http.post(`${this.baseUrl}/grocery`,grocery);
  }
  updateGrocery(id:number, value:any):Observable<object>{
    return this.http.put(`${this.baseUrl}/grocery/${id}`,value);
  }
  deleteGrocery(id:number):Observable<any>{
    return this.http.delete(`${this.baseUrl}/grocery/${id}`,{responseType:`text`});
  }
getGroceryList():Observable<any>{
  return this.http.get(`${this.baseUrl}/grocery`);
}

}
