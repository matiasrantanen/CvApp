import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ServicePage } from './service';

//Matias Rantanen 1601551

@NgModule({
  declarations: [
    ServicePage,
  ],
  imports: [
    IonicPageModule.forChild(ServicePage),
  ],
})
export class ServicePageModule {}
