import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { VerifyInfoPageRoutingModule } from './verify-info-routing.module';

import { VerifyInfoPage } from './verify-info.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    VerifyInfoPageRoutingModule
  ],
  declarations: [VerifyInfoPage]
})
export class VerifyInfoPageModule {}
