import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { TodoPage } from '../pages/todo/todo';
import { LoginPage } from '../pages/login/login';
import { RegistrationPage } from '../pages/registration/registration';
 
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { UserProvider } from '../providers/user/user';
import { HttpClientModule } from '@angular/common/http';
import { MyErrorHandler } from '../providers/user/MyErrorHandler';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    TodoPage,
    LoginPage,
    RegistrationPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpClientModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    TodoPage,
    LoginPage,
    RegistrationPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: MyErrorHandler},
    UserProvider
  ]
})
export class AppModule {}
