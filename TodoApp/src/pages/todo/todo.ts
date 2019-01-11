import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { UserProvider } from '../../providers/user/user';

@Component({
  selector: 'page-todo',
  templateUrl: 'todo.html',
})
export class TodoPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public userProvider: UserProvider) {
  }

  ionViewDidLoad() {
  }

}
