import {Component} from '@angular/core';
import {NavController, LocalStorage, Storage} from 'ionic-angular';
import {AuthProvider} from '../../providers/auth-provider/auth-provider';
import {UserProvider} from '../../providers/user-provider/user-provider';

@Component({
    templateUrl: 'build/pages/account/account.html'
})
export class AccountPage {
    rootNav;
    user = {};
    local = new Storage(LocalStorage);
    constructor(public nav: NavController, public auth: AuthProvider, public userProvider: UserProvider) {
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
        this.local.remove('userInfo');
        this.auth.logout();
    }
}