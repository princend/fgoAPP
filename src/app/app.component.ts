import { Component } from '@angular/core';
import { Platform, MenuController } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';


import { HomePage } from '../pages/home/home';
import { FireCalPage } from "../pages/fire-cal/fire-cal";
import { ApPage } from '../pages/ap/ap';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage: any = HomePage;
  fireCalPage = FireCalPage;
  apPage = ApPage

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen, public menuCrtl: MenuController) {
    platform.ready().then(() => {
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }
  openPage(page) {
    this.rootPage = page
    this.menuCrtl.close();
  }
}
