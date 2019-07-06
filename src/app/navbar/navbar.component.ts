import { Component, OnInit } from '@angular/core';
import { AuthService} from '../service/auth.service';
import { AngularFireAuth } from '@angular/fire/auth';
import * as $ from 'jquery';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  public isLogin:boolean = false;

  constructor(
    private authService: AuthService,
    private afsAuth:AngularFireAuth,
  ) { }
  onClickLogout() {
    this.afsAuth.auth.signOut();
  }
  ngOnInit() {
    // console.log(this.isLogin);
    this.getCurrentUser();
    (function() {
  
      var nav = $('nav'),
        menu = $('nav h1'),
        main = $('main'),
        open = false,
        open = false,
  	    hover = false;
      
      menu.on('click', function() {
        open = !open ? true : false;
        nav.toggleClass('menu-active');
        main.toggleClass('menu-active');
        nav.removeClass('menu-hover');
        main.removeClass('menu-hover');
        console.log(open);
        
      });
      menu.hover( 
        function() {
          if (!open) {
            nav.addClass('menu-hover');
            main.addClass('menu-hover');
          }
        }, function() {
          nav.removeClass('menu-hover');
          main.removeClass('menu-hover');
        }
      );
      
      })();
  }
  getCurrentUser(){
    console.log('Logeado?: ',this.isLogin);
    this.authService.isAuth().subscribe( auth => {
      if (auth) {
        this.isLogin = true;
      } else {
        this.isLogin = false;
      }
    });
  }

}
