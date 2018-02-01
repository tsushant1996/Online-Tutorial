import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase';
import { Observable } from 'rxjs/Observable';
import { GoogleAuthProvider } from '@firebase/auth-types';

@Injectable()
export class AuthService {

  user$: Observable<firebase.User>;
  constructor(private afAuth: AngularFireAuth) {
    this.user$ = afAuth.authState;
  }

  login() {
    //this.afAuth.auth.signInWithRedirect(new firebase.auth.GoogleAuthProvider());
     this.afAuth.auth.signInWithRedirect(new firebase.auth.GoogleAuthProvider());
  }

  logout() {
    this.afAuth.auth.signOut();
  }

}
