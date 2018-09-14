import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AP } from "./data";
/**
 * Generated class for the ApDetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-ap-detail',
  templateUrl: 'ap-detail.html',
})
export class ApDetailPage {
  public apList = new AP();
  public fullTime = ""
  public lv;
  public ap;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.lv = this.navParams.data.masterLv;
    this.ap = this.navParams.data.ap;
    let date = new Date()
    this.apList.masterApList.forEach(e => {
      if (e.level == this.lv) {
        date.setMinutes(date.getMinutes() + (e.ap - this.ap) * 5)
        this.fullTime = date.toLocaleDateString() + date.toLocaleTimeString();
        this.fullTime = this.fullTime.substring(0, this.fullTime.length - 3)
      }
    })
  }


  sendNotification(){
    console.log('tt');
    
  }
}
