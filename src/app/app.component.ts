import {Component} from '@angular/core';
import {Platform, NavController} from 'ionic-angular';
import {StatusBar, Splashscreen} from 'ionic-native';

import {TabsPage} from '../pages/tabs/tabs';
import {LoginPage} from "../pages/login/login";
import * as firebase from 'firebase';


@Component({
    template: '<ion-nav [root]="rootPage"></ion-nav>'
})
export class MyApp {
    public rootPage: any = LoginPage;

    constructor(platform: Platform) {

        var config = {
            apiKey: "AIzaSyDR32WRKbRiW1VtCh7_RTPl2l4nYIq6DWI",
            authDomain: "fireblogger-a4a9f.firebaseapp.com",
            databaseURL: "https://fireblogger-a4a9f.firebaseio.com",
            storageBucket: "fireblogger-a4a9f.appspot.com",
            messagingSenderId: "21584678691"
        };

        firebase.initializeApp(config);


        platform.ready().then(() => {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            StatusBar.styleDefault();
            Splashscreen.hide();
        });
    }

    ngOnInit() {
        firebase.auth().onAuthStateChanged((user) => {
            console.log(user);
            if (user) {
                this.rootPage = TabsPage;
            } else {
                this.rootPage = LoginPage;
            }
        });
    }


}
