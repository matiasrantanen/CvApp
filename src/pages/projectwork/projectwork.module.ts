import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ProjectworkPage } from './projectwork';
//Matias Rantanen 1601551
@NgModule({
  declarations: [
    ProjectworkPage,
  ],
  imports: [
    IonicPageModule.forChild(ProjectworkPage),
  ],
})
export class ProjectworkPageModule {}
