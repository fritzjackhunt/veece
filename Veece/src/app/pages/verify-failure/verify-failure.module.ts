import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { VerifyFailurePageRoutingModule } from './verify-failure-routing.module';

import { VerifyFailurePage } from './verify-failure.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    VerifyFailurePageRoutingModule
  ],
  declarations: [VerifyFailurePage]
})
export class VerifyFailurePageModule {}
