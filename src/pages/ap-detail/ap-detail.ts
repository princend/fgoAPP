import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,ToastController  } from 'ionic-angular';
import { AP } from "./data";
import { LocalNotifications } from '@ionic-native/local-notifications';

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

  public sendDate
  constructor(public navCtrl: NavController, public navParams: NavParams,public localNotifications: LocalNotifications,public toastCtrl: ToastController) {
    this.lv = this.navParams.data.masterLv;
    this.ap = this.navParams.data.ap;
    let date = new Date()
    this.apList.masterApList.forEach(e => {
      if (e.level == this.lv) {
        date.setMinutes(date.getMinutes() + (e.ap - this.ap) * 5)
        this.sendDate=date;
        this.fullTime = date.toLocaleDateString() + date.toLocaleTimeString();
        this.fullTime = this.fullTime.substring(0, this.fullTime.length - 3)
      }
    })
  }


  sendNotification(){
   
    this.localNotifications.schedule({
      text: 'FGO體力完全恢復',
      trigger: {at: this.sendDate},
      led: 'FF0000'
   });

   this.presentToast()
  this.localNotifications.on("click").subscribe(); 
  


  }

  
  presentToast() {
    const toast = this.toastCtrl.create({
      message: `將於 ${this.fullTime} 跳出通知提醒`,
      cssClass:'toastCss',
      duration: 1000
    });
    toast.present();
  }


}
