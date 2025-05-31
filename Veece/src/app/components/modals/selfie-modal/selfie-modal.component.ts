import { Component } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { Camera, CameraResultType, CameraSource } from '@capacitor/camera';

@Component({
  selector: 'app-selfie-modal',
  template: `
    <ion-header>
      <ion-toolbar>
        <ion-title>Take a Selfie</ion-title>
        <ion-buttons slot="end">
          <ion-button (click)="dismiss()">Close</ion-button>
        </ion-buttons>
      </ion-toolbar>
    </ion-header>

    <ion-content class="ion-padding">
      <ion-button expand="block" (click)="takeSelfie()">Take Selfie</ion-button>
    </ion-content>
  `
})
export class SelfieModalComponent {
  constructor(private modalCtrl: ModalController) {}

  dismiss() {
    this.modalCtrl.dismiss();
  }

  async takeSelfie() {
    const image = await Camera.getPhoto({
      quality: 90,
      allowEditing: false,
      resultType: CameraResultType.Base64,
      source: CameraSource.Prompt
    });

    if (image && image.base64String) {
      console.log("Selfie Image :", image.base64String)
      this.modalCtrl.dismiss({selfieBase64 : image.base64String});
    }
  }
}
