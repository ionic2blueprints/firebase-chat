import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { AuthProvider } from '../../providers/auth-provider/auth-provider';
import { UserProvider } from '../../providers/user-provider/user-provider';

@Component({
    templateUrl: 'account.html'
})
export class AccountPage {
    rootNav;
    user = {};
    constructor(public nav: NavController, 
                public auth: AuthProvider, 
                public userProvider: UserProvider,
                public local:Storage) {
        this.userProvider.getUser()
        .then(userObservable => {
            userObservable.subscribe(user => {
                this.user = user;
            });
        });
    }
    
    //save user info
    updatePicture() {
        this.userProvider.updatePicture();
    };

    logout() {
        this.local.remove('uid');
        this.auth.logout();
    }
}