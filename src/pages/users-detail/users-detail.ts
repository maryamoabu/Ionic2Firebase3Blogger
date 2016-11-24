import {Component} from '@angular/core';
import {NavController} from 'ionic-angular';
import {LoginPage} from "../login/login";
import {UserService} from "../../providers/user-service";
import * as firebase from 'firebase';
/*
 Generated class for the UsersDetail page.

 See http://ionicframework.com/docs/v2/components/#navigation for more info on
 Ionic pages and navigation.
 */
@Component({
    selector: 'page-users-detail',
    templateUrl: 'users-detail.html'
})
export class UsersDetailPage {
    private userPhotoUrl: any;
    private userDislplayName: any;


    constructor(private navCtrl: NavController, private usersService: UserService) {

        var myUserId = firebase.auth().currentUser.uid; //current user id

        this.displayUser(myUserId);


    }

    displayUser(theUserId) {

        var that = this;

        this.usersService.viewUser(theUserId).then(snapshot => {

            //get user photo
            that.userPhotoUrl = snapshot.val().photo; //get user photo
            that.userDislplayName = snapshot.val().username;
        })
    }

    logUserOut() {
        //call user service
        this.usersService.logoutUser().then(() => {
            this.navCtrl.setRoot(LoginPage);
        });
    }
}
