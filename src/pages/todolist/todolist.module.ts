import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TodolistPage } from './todolist';

//Niko Mäkelä 1601538, Matias Rantanen 1601551

@NgModule({
  declarations: [
    TodolistPage,
  ],
  imports: [
    IonicPageModule.forChild(TodolistPage),
  ],
})
export class TodolistPageModule {}
