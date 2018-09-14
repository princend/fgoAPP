import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ApDetailPage } from './ap-detail';

@NgModule({
  declarations: [
    ApDetailPage,
  ],
  imports: [
    IonicPageModule.forChild(ApDetailPage),
  ],
})
export class ApDetailPageModule {}
