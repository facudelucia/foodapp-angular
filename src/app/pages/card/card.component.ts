import { AppState } from 'src/app/app.reducer';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styles: [
  ]
})
export class CardComponent implements OnInit, OnDestroy {
  productSubscription!: Subscription
  item!: any
  constructor(private store: Store<AppState>, private router: Router, private location: Location) { }

  ngOnInit(): void {
    this.productSubscription = this.store.select('product')
      .subscribe(item => {
        if (!item.title) {
          this.router.navigate(['/'])
        } else {
          this.item = item
        }
      })
  }
  ngOnDestroy(): void {
    this.productSubscription.unsubscribe()
  }
  volver(){
    this.location.back()
  }
}
