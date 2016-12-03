import { Injectable } from '@angular/core';
import { AngularFire } from 'angularfire2';
import { Storage } from '@ionic/storage';

@Injectable()
export class AuthProvider {
  constructor(public af:AngularFire, public local:Storage) {}
  
  signin(credentails) {   
    return this.af.auth.login(credentails);
  }
  
  createAccount(credentails) {
    return this.af.auth.createUser(credentails);
  };
  
  logout() {
     this.af.auth.logout();
  }
}

