import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { LanchePage } from './lanche';

@NgModule({
  declarations: [
    LanchePage,
  ],
  imports: [
    IonicPageModule.forChild(LanchePage),
  ],
})
export class LanchePageModule {}
