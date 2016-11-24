import {NgModule, ErrorHandler} from '@angular/core';
import {IonicApp, IonicModule, IonicErrorHandler, NavController} from 'ionic-angular';
import {MyApp} from './app.component';
import {AboutPage} from '../pages/about/about';
import {ContactPage} from '../pages/contact/contact';
import {HomePage} from '../pages/home/home';
import {TabsPage} from '../pages/tabs/tabs';
import {PostsPage} from "../pages/posts/posts";
import {LoginPage} from "../pages/login/login";
import {RegisterPage} from "../pages/register/register";
import {ResetPasswordPage} from "../pages/reset-password/reset-password";
import {UserService} from "../providers/user-service";
import {UsersDetailPage} from "../pages/users-detail/users-detail";
import {PostAddPage} from "../pages/post-add/post-add";
import {PostsService} from "../providers/posts-service";

@NgModule({
    declarations: [
        MyApp,
        AboutPage,
        ContactPage,
        HomePage,
        TabsPage,
        PostsPage,
        LoginPage,
        RegisterPage,
        ResetPasswordPage,
        UsersDetailPage,
        PostAddPage
    ],
    imports: [
        IonicModule.forRoot(MyApp)
    ],
    bootstrap: [IonicApp],
    entryComponents: [
        MyApp,
        AboutPage,
        ContactPage,
        HomePage,
        TabsPage,
        PostsPage,
        LoginPage,
        RegisterPage,
        ResetPasswordPage,
        UsersDetailPage,
        PostAddPage
    ],
    providers: [UserService, PostsService, {provide: ErrorHandler, useClass: IonicErrorHandler}]
})
export class AppModule {
}
