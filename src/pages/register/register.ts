import {Component} from '@angular/core';
import {NavController, ViewController} from 'ionic-angular';
import {ResetPasswordPage} from "../reset-password/reset-password";

/*
 Generated class for the Register page.

 See http://ionicframework.com/docs/v2/components/#navigation for more info on
 Ionic pages and navigation.
 */
@Component({
    selector: 'page-register',
    templateUrl: 'register.html'
})
export class RegisterPage {

    constructor(public navCtrl: NavController, private viewCtrl:ViewController) {
    }

    ionViewDidLoad() {
        console.log('Hello RegisterPage Page');
    }

    close() {
        this.viewCtrl.dismiss();
    }

    redirectToResetPage(){
        this.navCtrl.push(ResetPasswordPage, {
            name:'partner',
            viewer:'guy'
        });
    }

}
