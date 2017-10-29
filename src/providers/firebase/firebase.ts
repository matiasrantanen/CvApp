import { Injectable } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
 
//Matias Rantanen 1601551
@Injectable()

//Handles data between firebase and app

export class FirebaseProvider {
 
  constructor(public afd: AngularFireDatabase) { }
 
  getTasks() {
    return this.afd.list('/tasks/');
  }
 
  addItem(name) {
    this.afd.list('/tasks/').push(name);
  }
 
  removeItem(id) {
    this.afd.list('/tasks/').remove(id);
  }
}