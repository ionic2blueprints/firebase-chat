import {Component} from '@angular/core';
import {NavController} from 'ionic-angular';
import {ChatsPage} from '../chats/chats'; 
import {AccountPage} from '../account/account';
import {UsersPage} from '../users/users';

@Component({
	templateUrl: 'build/pages/tabs/tabs.html'
})
export class TabsPage {
	chats = ChatsPage;
	users = UsersPage;
    profile = AccountPage;
}