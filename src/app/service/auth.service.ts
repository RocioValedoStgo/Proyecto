import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import { map } from 'rxjs/operators';
import * as firebase from 'firebase/app';
import { reject } from 'q';
import 'rxjs-compat/add/operator/map';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    public afsAuth: AngularFireAuth
  ) { }


  registerUser(email: string, password:string ){
    return new Promise((resolve, reject) =>{
      this.afsAuth.auth.createUserWithEmailAndPassword(email, password)
      .then(userData => resolve(userData),
      err => reject(err));
    });
  }
  loginEmail(email: string, password:string ){
    return new Promise((resolve, reject) =>{
      this.afsAuth.auth.signInWithEmailAndPassword(email, password)
      .then(userData => resolve(userData),
      err => reject(err));
    });
  }

  isAuth(){
    return this.afsAuth.authState.map( auth=> auth);
  }

  logout(){
    return this.afsAuth.auth.signOut();
  }
}
