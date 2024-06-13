import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoadingController } from '@ionic/angular';

import { getAuth, createUserWithEmailAndPassword, updateProfile } from "firebase/auth";

@Component({
  selector: 'app-signup',
  templateUrl: './signup.page.html',
  styleUrls: ['./signup.page.scss'],
})
export class SignupPage implements OnInit {

  oAuth = getAuth();

  account = {} as any

  constructor(public loadingCtrl : LoadingController, public router : Router) { }

  ngOnInit() {
 
  }

  async signUp () {
    const loading = await this.loadingCtrl.create();
    await loading.present();
    createUserWithEmailAndPassword(this.oAuth, this.account.Email, this.account.Password)
    .then((userCredential) => {
      // Signed up 
      const user = userCredential.user;
      updateProfile (user, {
        displayName : this.account.Username,
      })
      this.router.navigate(['/login'])
      loading.dismiss();
      console.log(user);
      // ...
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(errorMessage);
      console.log(errorCode);
    // ..
    });
  }



  
}
