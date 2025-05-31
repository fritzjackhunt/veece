import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';


import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { provideHttpClient } from '@angular/common/http';

import { BvnModalComponent } from '../app/components/modals/bvn-modal/bvn-modal.component'; //
import { SelfieModalComponent } from '../app/components/modals/selfie-modal/selfie-modal.component'; //
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    BvnModalComponent,
    SelfieModalComponent
  ],
  imports: [
    BrowserModule, 
    FormsModule,
    IonicModule.forRoot(), 
    AppRoutingModule],
  schemas : [CUSTOM_ELEMENTS_SCHEMA],
  providers: [{ 
    provide: RouteReuseStrategy, 
    useClass: IonicRouteStrategy }, 
    provideHttpClient()
  ],
  bootstrap: [
    AppComponent
  ],
})
export class AppModule {}
