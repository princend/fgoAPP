import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ApDetailPage } from "../ap-detail/ap-detail";
/**
 * Generated class for the ApPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-ap',
  templateUrl: 'ap.html',
})
export class ApPage {
public masterLv;
public ap;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }
  apCal(){
    this.navCtrl.push(ApDetailPage,{masterLv:this.masterLv,ap:this.ap})
  }

}
