import { Food } from './../interfaces/food.interface';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FoodServiceService {

  constructor(private http: HttpClient) { }

  getFoods(comida: string): Observable<Food> {
    return this.http.get<Food>(`https://api.spoonacular.com/recipes/complexSearch?query=${comida}&number=10&apiKey=9f69484d27c84db2a810687c5400dfe3`)
  }
}
