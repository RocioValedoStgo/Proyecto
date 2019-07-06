import { Component, OnInit } from '@angular/core';

import { EstudianteServiceService } from '../service/estudiante-service.service';
import { EstudianteInterfaceDB } from '../models/interfaceDB';
import { NgForm } from '@angular/forms/src/directives/ng_form';
import {AuthService } from '../service/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registro-alumno',
  templateUrl: './registro-alumno.component.html',
  styleUrls: ['./registro-alumno.component.css']
})
export class RegistroAlumnoComponent implements OnInit {
  estudiante : EstudianteInterfaceDB ={
    nombre:"",
    apellidopaterno:"",
    apellidomaterno:"",
    fechanacimiento:"",
    telefono:"",
    email:"",
    password:""
  }
  constructor(
    private estudianteService: EstudianteServiceService,
    public authService: AuthService,
    public router:Router,
    ) {
    this.estudianteService.getEstudiantes().subscribe(estudiante =>{
      console.log(estudiante);//obtiene todos los estudiantes de la base de datos
    });
   }

  ngOnInit() {
    
  }
  onGuardarEstudiante(myFrom: NgForm){
    // const fechaActual = Date.now();
    // console.log('guardando datos');
    this.estudianteService.addEstudiante(this.estudiante);
    this.guardarUsuario(this.estudiante.email, this.estudiante.password); //metodo para guardar los usuarios con autenticacion
  }
  guardarUsuario(email, password){
    this.authService.registerUser(email, password)
    .then((res) =>{
      this.router.navigate(['/inicioSesion']);
      console.log('usuario guardado',res);
    }).catch((err)=>{
      console.log(err);
    });
  }
  

}
