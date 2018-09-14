import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FireCalDetailPage } from '../fire-cal-detail/fire-cal-detail';

/**
 * Generated class for the FireCalPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-fire-cal',
  templateUrl: 'fire-cal.html',
})
export class FireCalPage {
  level:any;
  lowerLv=1;
  upperLv=100;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.level={upper:100,lower:1}
  }


  getLevelRange(data){
    console.log(data);
    this.lowerLv=data.lower;
    this.upperLv=data.upper;
  }

  fireCal(){
    this.navCtrl.push(FireCalDetailPage,{upper:this.upperLv,lower: this.lowerLv})
    console.log('tttt');
    
  }



}
