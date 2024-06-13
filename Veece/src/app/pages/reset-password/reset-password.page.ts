import { Component, OnInit } from '@angular/core';
import { getAuth, sendPasswordResetEmail } from "firebase/auth";
import { Router } from '@angular/router';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.page.html',
  styleUrls: ['./reset-password.page.scss'],
})
export class ResetPasswordPage implements OnInit {

  oAuth = getAuth();

  data = {} as any

  constructor(public route:Router) { }

  ngOnInit() {
  }

  resetPassword() {
    sendPasswordResetEmail(this.oAuth, this.data.email)
  .then(() => {
    // Password reset email sent!
    alert('Password reset email sent');
    // ..
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
