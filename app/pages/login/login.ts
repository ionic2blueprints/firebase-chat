import {Component} from '@angular/core';
import {NavController, Storage, LocalStorage} from 'ionic-angular';
import {TabsPage} from '../tabs/tabs';
import {FormBuilder, Validators} from '@angular/common';
import {validateEmail} from '../../validators/email';
import {AuthProvider} from '../../providers/auth-provider/auth-provider';
import {UserProvider} from '../../providers/user-provider/user-provider';
import {UtilProvider} from '../../providers/utils';
import {FirebaseAuth} from 'angularfire2';

@Component({
	templateUrl: 'build/pages/login/login.html'
})
export class LoginPage {
	loginForm:any;
    storage = new Storage(LocalStorage);
    constructor(public nav:NavController, 
      form:FormBuilder, 
      public auth: AuthProvider, 
      public userProvider: UserProvider,
      public util: UtilProvider) {
        
        this.loginForm = form.group({
            email: ["",Validators.compose([Validators.required, validateEmail])],
            password:["",Validators.required]
        });
    }
    
	signin() {
      this.auth.signin(this.loginForm.value)
      .then((data) => {
          this.storage.set('userInfo', JSON.stringify(data));
          this.nav.push(TabsPage);
      }, (error) => {
          let errorMessage = "Enter Correct Email and Password";
          let alert = this.util.doAlert("Error",errorMessage,"Ok");
          this.nav.present(alert);
      });
    };
    
    createAccount() {
        let credentails = this.loginForm.value;
        this.auth.createAccount(credentails)
        .then((data) => {
           this.storage.set('userInfo', JSON.stringify(data));
           this.userProvider.createUser(credentails);
        }, (error) => {
            let errorMessage = "Account Already Exists";
            let alert = this.util.doAlert("Error",errorMessage,"Ok");
            this.nav.present(alert);
        });
    };
}