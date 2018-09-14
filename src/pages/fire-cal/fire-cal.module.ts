import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { FireCalPage } from './fire-cal';

@NgModule({
  declarations: [
    FireCalPage,
  ],
  imports: [
    IonicPageModule.forChild(FireCalPage),
  ],
})
export class FireCalPageModule {}
