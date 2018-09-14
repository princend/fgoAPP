import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { FireCalDetailPage } from './fire-cal-detail';

@NgModule({
  declarations: [
    FireCalDetailPage,
  ],
  imports: [
    IonicPageModule.forChild(FireCalDetailPage),
  ],
})
export class FireCalDetailPageModule {}
