import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 Matias Rantanen 1601551
 */

@IonicPage()
@Component({
  selector: 'page-targetedcv',
  templateUrl: 'targetedcv.html',
})
export class TargetedcvPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TargetedcvPage');
  }

}
