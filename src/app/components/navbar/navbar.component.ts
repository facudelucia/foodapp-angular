

import { AppState } from 'src/app/app.reducer';
import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { chartOpen, chartClosed } from '../../payment/payment.actions'
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styles: [
  ]
})
export class NavbarComponent implements OnInit {
  items!: any
  isOpen: boolean = false
  constructor(private store: Store<AppState>) { }

  ngOnInit(): void {
    this.store.select('chart')
      .subscribe(items => {
        this.items = items
      })
  }
  toggleCarrito() {
    if (this.isOpen) {
      this.isOpen = false
      this.store.dispatch(chartClosed())
    } else {
      this.isOpen = true
      this.store.dispatch(chartOpen())
    }
  }
}
