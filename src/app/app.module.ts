import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { HttpModule } from '@angular/http';
import { AngularFireDatabaseModule } from 'angularfire2/database';

import { MyApp } from './app.component';
import { LoginPage } from '../pages/login/login';
import { HomePage } from '../pages/home/home';
import { RegisterPage } from '../pages/register/register';
import { MenuPage } from '../pages/menu/menu';
import { AngularFireModule } from 'angularfire2';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { FirebaseProvider } from '../providers/firebase/firebase';


//Matias Rantanen 1601551


const firebaseAuth = {

  apiKey: "AIzaSyDU-4d252PU_wE_HzjzO6U7vuZe6wXiDFQ",
  authDomain: "cvapp-7bce3.firebaseapp.com",
  databaseURL: "https://cvapp-7bce3.firebaseio.com",
  projectId: "cvapp-7bce3",
  storageBucket: "",
  messagingSenderId: "402572760169"
};

@NgModule({
  declarations: [
    MyApp,
    LoginPage,
    HomePage,
    RegisterPage,
    MenuPage
    
   
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(firebaseAuth),
    AngularFireAuthModule,
    HttpModule,
    AngularFireDatabaseModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    LoginPage,
    HomePage,
    RegisterPage,
    MenuPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    FirebaseProvider,
  ]
})
export class AppModule {}
