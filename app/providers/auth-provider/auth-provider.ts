import {Injectable, Inject} from '@angular/core';
import {FirebaseAuth, FirebaseRef, AngularFire} from 'angularfire2';
import {LocalStorage, Storage} from 'ionic-angular';

@Injectable()
export class AuthProvider {
  local = new Storage(LocalStorage);
  constructor(public af:AngularFire) {}
  getAuth() {
    return firebase.auth();
  };
  
  signin(credentails) {   
    return this.af.auth.login(credentails);
  }
  
  createAccount(credentails) {
    return this.af.auth.createUser(credentails);
  };
  
  logout() {
     var auth = firebase.auth();
     auth.signOut();
  }
}

