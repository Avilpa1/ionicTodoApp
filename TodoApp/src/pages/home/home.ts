import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { UserProvider } from '../../providers/user/user';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  items: any = {};
  itemArray: any = [];

  constructor(public navCtrl: NavController, public userProvider: UserProvider) {
    
  }

  // Get item from database to display on home page
  onGetItems() {
    this.items = this.userProvider.getItemResult;
    console.log(this.items);
    let item: any = Object.entries(this.items);
    console.log(item);

    for(let i = 0; i < item.length; i++) {
      this.itemArray.push(item[i]["1"]["item"]);
    }
  }
  ionViewDidLoad() {
  }
  
  
}
