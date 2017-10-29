import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, Nav } from 'ionic-angular';
import { AngularFireAuth } from 'angularfire2/auth';

 // Matias Rantanen 1601551
 
 export interface PageInterface {
   title: string;
   pageName: string;
   tabComponent?: any;
   index?: number;
   icon: string;
 }

@IonicPage()
@Component({
  selector: 'page-menu',
  templateUrl: 'menu.html',
})
export class MenuPage {
  email: string;

/** tabs */

  rootPage="TabsPage";

  @ViewChild(Nav) nav: Nav;
/**pages to menu */
  pages: PageInterface[] = [
    { title: 'Home', pageName: 'TabsPage', tabComponent: 'ServicePage', index: 0, icon: 'home'},
    { title: 'Todolist', pageName: 'TabsPage', tabComponent: 'TodolistPage', index: 1, icon: 'list'},
    { title: 'About', pageName: 'TabsPage', tabComponent: 'AboutPage', index: 2, icon: 'information'},
  
    
  ];

  constructor(private fire:AngularFireAuth, public navCtrl: NavController, public navParams: NavParams) {
  this.email = fire.auth.currentUser.email;
  }

openPage(page: PageInterface){
  let params ={};

  if(page.index){
    params = {tabIndex: page.index};
  }
  if(this.nav.getActiveChildNav() && page.index != undefined) {
    this.nav.getActiveChildNav().select(page.index);
  } else {
    this.nav.setRoot(page.pageName, params);
  }
  }


isActive(page: PageInterface){
  let childNav = this.nav.getActiveChildNav();

  if(childNav){
    if (childNav.getSelected() && childNav.getSelected().root == page.tabComponent) {
      return 'primary';
    }
    return;
  }
  if (this.nav.getActive() && this.nav.getActive().name === page.pageName) {
    return 'primary';
  }
 }
}