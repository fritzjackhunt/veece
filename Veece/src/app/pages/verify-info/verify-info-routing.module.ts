import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { VerifyInfoPage } from './verify-info.page';

const routes: Routes = [
  {
    path: '',
    component: VerifyInfoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VerifyInfoPageRoutingModule {}
