import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { UserProvider } from '../../providers/user/user';

import{ HomePage } from '../home/home'

@Component({
  selector: 'page-todo',
  templateUrl: 'todo.html',
})
export class TodoPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public userProvider: UserProvider) {
  }

  add() {
    this.userProvider.addItem()
    this.navCtrl.setRoot(HomePage);
  }

  ionViewDidLoad() {
  }

}
