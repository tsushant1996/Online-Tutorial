import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase';
import { Router } from '@angular/router/';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  constructor(private auth: AuthService, private router: Router) { }


  login() {

   this.auth.login();
   this.auth.user$.subscribe(user => this.router.navigate(['/']));
    

  

  }

}
