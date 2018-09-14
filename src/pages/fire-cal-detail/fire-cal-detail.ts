import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FireLevel } from "./data";
/**
 * Generated class for the FireCalDetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-fire-cal-detail',
  templateUrl: 'fire-cal-detail.html',
})
export class FireCalDetailPage {


  public firelevel=new FireLevel();
  
  public lowerLv:number;
  public upperLv:number;
  public totalExp:number=0;
  public forthSame;
  public forthDiff;
  public thirdSame;
  public thirdDiff;
  constructor(public navCtrl: NavController, public navParams: NavParams) {

    this.lowerLv=this.navParams.data.lower;
    this.upperLv=this.navParams.data.upper;

    for (let l = this.lowerLv; l < 100; l++) {
      this.totalExp+=this.firelevel.levelList[l-1].next
    }
   this.forthSame=Math.ceil(this.totalExp/32400)
this.forthDiff=Math.ceil(this.totalExp/27000)
this.thirdSame=Math.ceil(this.totalExp/10800)
this.thirdDiff=Math.ceil(this.totalExp/9000)
    
  }

  
}
