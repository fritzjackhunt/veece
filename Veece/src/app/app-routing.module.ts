import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'login',
    loadChildren: () => import('./pages/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'signup',
    loadChildren: () => import('./pages/signup/signup.module').then( m => m.SignupPageModule)
  },
  {
    path: 'reset-password',
    loadChildren: () => import('./pages/reset-password/reset-password.module').then( m => m.ResetPasswordPageModule)
  },
  {
    path: 'landing',
    loadChildren: () => import('./pages/landing/landing.module').then( m => m.LandingPageModule)
  },
  {
    path: 'menu',
    loadChildren: () => import('./pages/menu/menu.module').then( m => m.MenuPageModule)
  },
  {
    path: 'profile',
    loadChildren: () => import('./pages/profile/profile.module').then( m => m.ProfilePageModule)
  },
  {
    path: 'delete-acc',
    loadChildren: () => import('./pages/delete-acc/delete-acc.module').then( m => m.DeleteAccPageModule)
  },
  {
    path: 'verify',
    loadChildren: () => import('./pages/verify/verify.module').then( m => m.VerifyPageModule)
  },
  {
    path: 'verify-success',
    loadChildren: () => import('./pages/verify-success/verify-success.module').then( m => m.VerifySuccessPageModule)
  },
  {
    path: 'verify-failure',
    loadChildren: () => import('./pages/verify-failure/verify-failure.module').then( m => m.VerifyFailurePageModule)
  },
  {
    path: 'verify-info',
    loadChildren: () => import('./pages/verify-info/verify-info.module').then( m => m.VerifyInfoPageModule)
  },
  {
    path: 'verify-bvn',
    loadChildren: () => import('./pages/verify-bvn/verify-bvn.module').then( m => m.VerifyBvnPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
