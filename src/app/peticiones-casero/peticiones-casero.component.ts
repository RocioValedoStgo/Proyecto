import { Component, OnInit } from '@angular/core';
import {Sort} from '@angular/material';
import { PeticionesInterfaceDB} from '../models/peticionesDB';
import { PeticionService} from '../service/peticion.service';


export interface Alumnos {
  nombre: string;
  apellidos: string;
  correo: string;
  telefono: number;
  edad: number;
}
@Component({
  selector: 'app-peticiones-casero',
  templateUrl: './peticiones-casero.component.html',
  styleUrls: ['./peticiones-casero.component.css']
})
export class PeticionesCaseroComponent implements OnInit {

  alumnos: Alumnos[] = [
    {nombre: 'Berenice', apellidos: "Andiola", correo: "asad", telefono: 10, edad: 1},
    {nombre: 'Alondra', apellidos: "Bolaños", correo: "basd", telefono: 20, edad: 4},
    {nombre: 'Dilan', apellidos: "Cruz", correo: "c", telefono: 30, edad: 2},
    {nombre: 'asdgpasd', apellidos: "Das", correo: "d", telefono: 67, edad: 6},
    {nombre: 'Ernesto', apellidos: "Easd", correo: "e", telefono: 49, edad: 8},
    {nombre: 'Prueba', apellidos: "prueba", correo: "email", telefono: 49123123, edad: 1231238},
    {nombre: 'Ernesto', apellidos: "Easd", correo: "e", telefono: 49, edad: 8},
    {nombre: 'Ernesto', apellidos: "Easd", correo: "e", telefono: 49, edad: 8},
    {nombre: 'Ernesto', apellidos: "Easd", correo: "e", telefono: 49, edad: 8}
  ];

  sortedAlumnos:Alumnos[];
  constructor(private peticiones: PeticionService) { 
    this.sortedAlumnos =this.alumnos.slice();
  }
  ordenarDatos(sort: Sort) {
    const data = this.alumnos.slice();
    if (!sort.active || sort.direction === '') {
      this.sortedAlumnos = data;
      return;
    }this.sortedAlumnos = data.sort((a, b) => {
      const isAsc = sort.direction === 'asc';
      switch (sort.active) {
        case 'nombre': return compare(a.nombre, b.nombre, isAsc);
        case 'apellidos': return compare(a.apellidos, b.apellidos, isAsc);
        case 'correo': return compare(a.correo, b.correo, isAsc);
        case 'telefono': return compare(a.telefono, b.telefono, isAsc);
        case 'edad': return compare(a.edad, b.edad, isAsc);
        default: return 0;
      }
    });
  }
  

  ngOnInit() {
    this.peticiones.getPeticiones().subscribe(peticiones =>{
      console.log(peticiones);
    });
  }

}
function compare(a: number | string, b: number | string, isAsc: boolean) {
  return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
}
