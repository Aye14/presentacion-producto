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
  tiendaAbierta: boolean = false; // 1. Cambiado de true a false
  categorias: string[] = ['Celulares', 'Cuadernos', 'Mochilas', 'Accesorios']; // 3. Cuarta categoría agregada

  producto: Producto = {
    nombre: 'Mochila Escolar Impermeable', // 4. Nombre modificado
    precio: 120, // 4. Precio modificado
    disponible: false // 2. Cambiado de true a false
  };
}