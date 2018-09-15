import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ApDetailPage } from './ap-detail';
import { LocalNotifications } from '@ionic-native/local-notifications';

@NgModule({
  declarations: [
    ApDetailPage,
  ],
  imports: [
    IonicPageModule.forChild(ApDetailPage),
  ],
  providers:[
    LocalNotifications
  ]
})
export class ApDetailPageModule {}
