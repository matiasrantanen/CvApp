import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';



 //Matias Rantanen 1601551

@IonicPage()
@Component({
  selector: 'page-tabs',
  templateUrl: 'tabs.html',
})

//Adding the tab navigation
export class TabsPage {
  tab1Root='ServicePage';
  tab2Root='TargetedcvPage';
  tab3Root='AboutPage';
  myIndex: number;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.myIndex = navParams.data.tabIndex || 0;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TabsPage');
  }

}
