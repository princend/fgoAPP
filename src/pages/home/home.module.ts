import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { HomePage } from './home';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import { HTTP } from '@ionic-native/http';
@NgModule({
  declarations: [
    HomePage,
  ],
  imports: [
    IonicPageModule.forChild(HomePage),
    HTTP,
    HttpModule,
    HttpClientModule
  ],
  providers:[
    HTTP
  ]
})
export class HomePageModule {}
