import { Food, Result } from './../interfaces/food.interface';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FoodServiceService {

  private chart: BehaviorSubject<Result[]> = new BehaviorSubject<Result[]>([]);
  private isOpen: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  private product: BehaviorSubject<Result> = new BehaviorSubject<Result>({});

  public chart$: Observable<Result[]> = this.chart.asObservable();
  public isOpen$: Observable<boolean> = this.isOpen.asObservable()
  public product$: Observable<Result> = this.product.asObservable()

  constructor(private http: HttpClient) { }

  public getFoods(comida: string): Observable<Food> {
    this.deleteAllitems()
    return this.http.get<Food>(`https://api.spoonacular.com/recipes/complexSearch?query=${comida}&number=10&apiKey=9f69484d27c84db2a810687c5400dfe3`)
  }
  public addItem(product: Result): void {
    this.chart.next([...this.chart.value, product])
  }

  public deleteAllitems(): void {
    this.chart.next([])
  }

  public chartOpen(): void {
    this.isOpen.next(true)
  }

  public chartClosed(): void {
    this.isOpen.next(false)
  }

  public setProduct(product: Result): void {
    this.product.next(product)
  }
}
