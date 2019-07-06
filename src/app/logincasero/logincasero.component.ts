import { Component, OnInit } from '@angular/core';
import { AuthService } from '../service/auth.service';
import {Router} from '@angular/router';
@Component({
  selector: 'app-logincasero',
  templateUrl: './logincasero.component.html',
  styleUrls: ['./logincasero.component.css']
})
export class LogincaseroComponent implements OnInit {
  public email:string;
  public password:string;


  constructor(
    public authService:AuthService,
    public router :Router,
  ) { }

  ngOnInit() {
  }
  /* onSubmitLogin(){
    console.log('entrando');
  } */
  onSubmitLogin(){
    console.log('entrando');
    this.authService.loginEmail(this.email, this.password)
    .then((res) =>{
      this.router.navigate(['/buscar-depa']);
    }).catch((err)=>{
      console.log(err);
      this.router.navigate(['/caserologin']);
    });
  }
}
