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

//Here you can add pages to the menu within the application
  rootPage="TabsPage";
  @ViewChild(Nav) nav: Nav;
  pages: PageInterface[] = [
    { title: 'Home', pageName: 'TabsPage', tabComponent: 'ServicePage', index: 0, icon: 'home'}, //home
    { title: 'CV', pageName: 'TabsPage', tabComponent: 'TargetedcvPage', index: 1, icon: 'list-box'}, //list-box
    { title: 'Project Work', pageName: 'ProjectworkPage', icon: 'school'}, //school
    { title: 'Extra Curriculum Activities', pageName: 'ExtraPage', icon: 'walk'}, //walk    
    { title: 'Contact Me', pageName: 'ContactPage', icon: 'contact'}, //contact
    { title: 'About', pageName: 'TabsPage', tabComponent: 'AboutPage', index: 6, icon: 'information'}, //information circle
  
    
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