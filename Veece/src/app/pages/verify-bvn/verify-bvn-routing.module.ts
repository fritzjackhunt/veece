import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { VerifyBvnPage } from './verify-bvn.page';

const routes: Routes = [
  {
    path: '',
    component: VerifyBvnPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VerifyBvnPageRoutingModule {}
