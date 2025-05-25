import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { VerifyBvnPageRoutingModule } from './verify-bvn-routing.module';

import { VerifyBvnPage } from './verify-bvn.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    VerifyBvnPageRoutingModule
  ],
  declarations: [VerifyBvnPage]
})
export class VerifyBvnPageModule {}
