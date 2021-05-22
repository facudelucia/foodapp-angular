

import { Result } from './interfaces/food.interface';
import { AppState } from 'src/app/app.reducer';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'foodapp';
  isOpen: boolean = false
  miFormulario: FormGroup = this.fb.group({
    busqueda: ['', Validators.required]
  })
  chartItems: Result[] = []
  get total(): number {
    var total = 0
    for (let i = 0; i < this.chartItems.length; i++) {
      total += this.chartItems[i].price!
    }
    return Number(total.toFixed(2))
  }
  constructor(private fb: FormBuilder, private router: Router, private store: Store<AppState>) { }

  ngOnInit() {
    this.store.select('payment')
      .subscribe(result => {
        if (result.isOpen) {
          this.isOpen = true
        } else {
          this.isOpen = false
        }
      })
    this.store.select('chart')
      .subscribe(items => this.chartItems = items)
  }


  buscar() {
    this.router.navigate(['/busqueda', this.miFormulario.get('busqueda')?.value])
  }
  
}
