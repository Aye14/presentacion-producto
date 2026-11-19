import { Component } from '@angular/core';

export interface Producto {
  nombre: string;
  precio: number;
  disponible: boolean;
}

@Component({
  selector: 'app-root',
  imports: [],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  nombreTienda: string = 'Tienda Central';
  encargado: string = 'Saravia Magne Ayelen Brenda';
  numeroSucursal: number = 1;
  tiendaAbierta: boolean = true;
  categorias: string[] = ['Celulares', 'Cuadernos', 'Mochilas'];

  producto: Producto = {
    nombre: 'Cuaderno Universitario A4',
    precio: 25,
    disponible: true
  };
}