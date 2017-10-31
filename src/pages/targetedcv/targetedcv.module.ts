import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TargetedcvPage } from './targetedcv';
//Matias Rantanen 1601551
@NgModule({
  declarations: [
    TargetedcvPage,
  ],
  imports: [
    IonicPageModule.forChild(TargetedcvPage),
  ],
})
export class TargetedcvPageModule {}
