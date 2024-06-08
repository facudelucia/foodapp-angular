import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-avatar',
  templateUrl: './avatar.component.html',
  styles: [
  ]
})
export class AvatarComponent implements OnInit {
  @Input() name!: string
  @Input() icon!: string
  constructor(private router: Router) { }
  ngOnInit(): void {
  }
  buscar() {
    this.router.navigate(['/busqueda', this.name])
  }
}
