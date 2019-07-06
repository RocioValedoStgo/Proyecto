import { Component, OnInit } from '@angular/core';
import { EstudianteServiceService } from'../service/estudiante-service.service';
import { Router } from '@angular/router';
import { AuthService } from '../service/auth.service';
import { AngularFireAuth } from '@angular/fire/auth';
import { auth } from 'firebase/app';
@Component({
  selector: 'app-iniciosesion',
  templateUrl: './iniciosesion.component.html',
  styleUrls: ['./iniciosesion.component.css']
})
export class IniciosesionComponent implements OnInit {
  public email:string;
  public password:string;

  constructor(
    private estudianteService: EstudianteServiceService,
    public afAuth:AngularFireAuth,
    public router:Router,
    private authService: AuthService,
    ) { }

  ngOnInit() {
    /* this.estudianteService.getEstudiantes().subscribe(estudiante =>{
      console.log(estudiante);
    }); */
    
  }
  /* onLogin(){
    this.authService.loginEmail(this.email, this.password)
    .then((res) => {
      
      this.router.navigate(['buscarDepa']);
    }).catch(err => console.log('err', err.message));
  } */

  onLogin(){
    console.log('entrando');
    this.authService.loginEmail(this.email, this.password)
    .then((res) =>{
      this.router.navigate(['/buscar-depa']);
    }).catch((err)=>{
      console.log(err);
      this.router.navigate(['/inicioSesion']);
    });
  }

  onLogOut(){
    this.authService.logout();
  }
}
