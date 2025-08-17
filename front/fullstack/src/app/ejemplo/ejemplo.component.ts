import { Component } from '@angular/core';

@Component({
  selector: 'app-ejemplo',
  imports: [],
  // templateUrl: './ejemplo.component.html',
  template: '<h1> Hola como estas, {{nombre}}',
  styleUrl: './ejemplo.component.css'
})
export class EjemploComponent {
nombre : string = 'Luciana'
}
