import { Component } from '@angular/core';
import { getAuth, signOut } from "firebase/auth";
import { Router } from '@angular/router';
import { LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  oAuth = getAuth();

  user = this.oAuth.currentUser;

  showCard = false;
  cardNumber = '1234 5678 9012 3541';
  expiryDate = '12/25';

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

  generateCard() {

    console.log('Generate Card Clicked');

    // Set the card details (you can make this dynamic)
    this.cardNumber = '1234 5678 9012 3456';
    this.expiryDate = '12/25';

    this.showCard = true;

    console.log('Card Details:', {
      cardNumber: this.cardNumber,
      expiryDate: this.expiryDate,
      showCard: this.showCard,
    });

  }

}
