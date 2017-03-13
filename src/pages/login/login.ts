import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { TabsPage } from '../tabs/tabs';
import { Validators, FormGroup, FormControl } from '@angular/forms';
import { validateEmail } from '../../validators/email';
import { AuthProvider } from '../../providers/auth-provider/auth-provider';
import { UserProvider } from '../../providers/user-provider/user-provider';
import { UtilProvider } from '../../providers/utils';

@Component({
	templateUrl: 'login.html'
})
export class LoginPage {
	loginForm:any;
    constructor(public nav:NavController,
      public auth: AuthProvider, 
      public userProvider: UserProvider,
      public util: UtilProvider,
      public storage:Storage) {
    }

    ngOnInit() {
        this.loginForm = new FormGroup({
            email: new FormControl("",[Validators.required, validateEmail]),
            password: new FormControl("",Validators.required)
        });
    }
    
	signin() {
      this.auth.signin(this.loginForm.value)
      .then((data) => {
          this.storage.set('uid', data.uid);
          this.nav.push(TabsPage);
      }, (error) => {
          let alert = this.util.doAlert("Error",error.message,"Ok");
          alert.present();
      });
    };
    
    createAccount() {
        let credentials = this.loginForm.value;
        this.auth.createAccount(credentials)
        .then((data) => {
           this.storage.set('uid', data.uid);
           this.userProvider.createUser(credentials, data.uid);
        }, (error) => {
            let alert = this.util.doAlert("Error",error.message,"Ok");
            alert.present();
        });
    };
}