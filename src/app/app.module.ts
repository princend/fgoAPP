import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';


import { HomePage } from '../pages/home/home';
import { ApPage } from "../pages/ap/ap";
import { ApDetailPage } from "../pages/ap-detail/ap-detail";
import { FireCalPage} from "../pages/fire-cal/fire-cal";
import { FireCalDetailPage    } from "../pages/fire-cal-detail/fire-cal-detail";

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { LocalNotifications } from '@ionic-native/local-notifications';
import { HTTP } from '@ionic-native/http';
import { HttpClient } from '@angular/common/http';
import { HttpClientModule } from '@angular/common/http';
import { HttpModule } from '@angular/http';
@NgModule({
  declarations: [
    MyApp,
    ApPage,
    ApDetailPage,
    HomePage,
    FireCalPage,
    FireCalDetailPage
    
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpClientModule,
    HttpModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    ApPage,
    ApDetailPage,
    HomePage,
    FireCalPage,
    FireCalDetailPage

  ],
  providers: [
    LocalNotifications,
    StatusBar,
    HTTP,
    SplashScreen,
    HttpClient,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
