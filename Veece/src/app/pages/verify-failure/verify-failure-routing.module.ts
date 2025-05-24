import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { VerifyFailurePage } from './verify-failure.page';

const routes: Routes = [
  {
    path: '',
    component: VerifyFailurePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VerifyFailurePageRoutingModule {}
