import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { EditChoicePage } from './edit-choice';

@NgModule({
  declarations: [
    EditChoicePage,
  ],
  imports: [
    IonicPageModule.forChild(EditChoicePage),
  ],
})
export class EditChoicePageModule {}
