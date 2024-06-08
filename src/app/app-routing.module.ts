import { HomeComponent } from './pages/home/home.component';
import { CardComponent } from './pages/card/card.component';
import { BusquedaComponent } from './pages/busqueda/busqueda.component';

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: "",
    component: HomeComponent
  },
  {
    path: "busqueda/:termino",
    component: BusquedaComponent
  },
  {
    path: 'producto/:id',
    component: CardComponent
  },
  {
    path: "**",
    redirectTo: ""
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
