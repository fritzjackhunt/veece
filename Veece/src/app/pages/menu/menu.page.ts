import { Component, OnInit } from '@angular/core';
import { getAuth, signOut } from "firebase/auth";

import { Router } from '@angular/router';
import { LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.page.html',
  styleUrls: ['./menu.page.scss'],
})
export class MenuPage {

  oAuth = getAuth();

  user = this.oAuth.currentUser;

  constructor(public router: Router, public loadingCtrl : LoadingController,) {

  }

  async logout(){
    const loading = await this.loadingCtrl.create();
    signOut(this.oAuth).then(() => {
      // Sign-out successful.
      loading.dismiss();
      this.router.navigate(['/login'])
    }).catch((error) => {
      // An error happened.
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(errorMessage);
      console.log(errorCode);
    });
  }

}
