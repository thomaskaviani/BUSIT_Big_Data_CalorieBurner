import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ChooseTopPage } from './choose-top';

@NgModule({
  declarations: [
    ChooseTopPage,
  ],
  imports: [
    IonicPageModule.forChild(ChooseTopPage),
  ],
})
export class ChooseTopPageModule {}
