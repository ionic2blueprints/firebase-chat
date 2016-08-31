import {NavController, Platform, ionicBootstrap} from 'ionic-angular';
import {StatusBar} from 'ionic-native';
import {Component, Inject} from '@angular/core';
import {LoginPage} from './pages/login/login';
import {TabsPage} from './pages/tabs/tabs';
import {AuthProvider} from './providers/auth-provider/auth-provider';
import {ChatsProvider} from './providers/chats-provider/chats-provider';
import {UserProvider} from './providers/user-provider/user-provider';
import {UtilProvider} from './providers/utils';
import {
    FIREBASE_PROVIDERS, 
    defaultFirebase, 
    firebaseAuthConfig, 
    FirebaseRef,
    AngularFire,
    AuthProviders, 
    AuthMethods
} from 'angularfire2';

@Component({
  template: '<ion-nav id="nav" [root]="rootPage" #content></ion-nav>'
})
class MyApp {
	message: string;
	rootPage: any;
     
	constructor(public authProvider:AuthProvider, public platform:Platform) {
        let auth = authProvider.getAuth();
        auth.onAuthStateChanged(user => {
          if(user) {
            this.rootPage = TabsPage;
          } else {
            this.rootPage = LoginPage;
          }
        });
	}
}

ionicBootstrap(MyApp, [FIREBASE_PROVIDERS,defaultFirebase({
    apiKey: "AIzaSyC2gX3jlrBugfnBPugX2p0U1XiSqXhrRgQ",
    authDomain: "chat-app-1e137.firebaseapp.com",
    databaseURL: "https://chat-app-1e137.firebaseio.com",
    storageBucket: "chat-app-1e137.appspot.com",
  }),
  firebaseAuthConfig({
    provider: AuthProviders.Password,
    method: AuthMethods.Password,
    remember: 'default',
    scope: ['email']
  }),
  AuthProvider, 
  ChatsProvider,
  UserProvider,
  UtilProvider] )