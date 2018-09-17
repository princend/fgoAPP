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
  constructor(public navCtrl: NavController, public menuCtrl: MenuController, private httpClient: HttpClient) {
    this.httpClient.get(this.url, this.httpOptions).subscribe(data => {
      this.getImgs(data);
    })
  }



//取得圖片資料
  getImgs(param) {
    param.data.forEach(element => {
      this.imgArray.push(element.link);
    }); 
  }

}


