import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { MenuController } from 'ionic-angular';

import { HttpClient } from '@angular/common/http';
import { httpOptions, url } from "./data";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  public httpOptions = httpOptions
  public url = url
  public imgArray: Array<string> = [];
  public photo = 'http://img.f.hatena.ne.jp/images/fotolife/t/torikagokan/20151113/20151113012234.jpg';


  constructor(public navCtrl: NavController, public menuCtrl: MenuController, private httpClient: HttpClient) {
    this.httpClient.get(this.url, this.httpOptions).subscribe(data => {
      this.getImgs(data);
    })
  }



  ionViewDidEnter() {
  }

  //取得圖片資料
  getImgs(param) {
    param.data.forEach(element => {
      this.imgArray.push(element.link);
    });
  }

  //抽卡
  changeImg() {
    let ra = this.getRandom(this.imgArray.length)
    this.photo = this.imgArray[ra]
  }

  //取亂數
  getRandom(x) {
    return Math.floor(Math.random() * x);
  };
}


