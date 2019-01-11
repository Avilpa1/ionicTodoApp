import { Component, ViewChild } from '@angular/core';
import { Nav, Platform, ionicBootstrap } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
import { TodoPage } from '../pages/todo/todo';
import { LoginPage } from '../pages/login/login';
import { RegistrationPage } from '../pages/registration/registration';

import { UserProvider } from '../providers/user/user';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = HomePage;

  pages: Array<{title: string, component: any}>;

  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen, public userProvider: UserProvider) {
    this.initializeApp();

    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'Home', component: HomePage },
      { title: 'Todo List', component: TodoPage },
      { title: 'Login', component: LoginPage },
      { title: 'Sign Up', component: RegistrationPage }
    ];

  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  openPage(page) {
    this.nav.setRoot(page.component);
  }

  ionicBootstrap(MyApp, [UserProvider]);
}
