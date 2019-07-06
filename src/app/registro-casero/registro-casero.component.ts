import { Component, OnInit } from '@angular/core';
import { CaseroService} from '../service/casero.service';
import { NgForm } from '@angular/forms/src/directives/ng_form';
import {CaseroInterfaceDB}  from '../models/caseroDB';
import {AuthService } from '../service/auth.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-registro-casero',
  templateUrl: './registro-casero.component.html',
  styleUrls: ['./registro-casero.component.css']
})
export class RegistroCaseroComponent implements OnInit {
  casero : CaseroInterfaceDB ={
    nombre:"",
    apellidopaterno:"",
    apellidomaterno:"",
    fechanacimiento:"",
    telefono:"",
    email:"",
    password:""
  }
  constructor(
    private caseroService: CaseroService, 
    public authService: AuthService,
    public router:Router,
    ) { 
    
    
    this.caseroService.getCaseros().subscribe(casero =>{
      // console.log(casero);
    });
  }

  ngOnInit() {
  }
  onGuardarCasero(myFrom: NgForm){
    // const fechaActual = Date.now();
    this.caseroService.addCaseros(this.casero);
    this.guardarUsuario(this.casero.email, this.casero.password);
  }
  guardarUsuario(email, password){
    this.authService.registerUser(email, password)
    .then((res) =>{
      this.router.navigate(['/caserologin']);
      console.log('usuario guardado',res);
    }).catch((err)=>{
      console.log(err);
    });
  }
}
