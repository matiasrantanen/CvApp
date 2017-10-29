import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { LoginPage } from '../login/login';
import { RegisterPage } from '../register/register';


 //Matias Rantanen 1601551

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})
export class HomePage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  //Adding functions to the buttons

 doLogin(){
   this.navCtrl.push(LoginPage);
 }

 register(){
  this.navCtrl.push(RegisterPage);
 }

}
