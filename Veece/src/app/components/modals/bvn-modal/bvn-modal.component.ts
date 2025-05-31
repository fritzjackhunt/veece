import { Component, CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { NgModel } from '@angular/forms';
import { ModalController } from '@ionic/angular';


@Component({
  selector: 'app-bvn-modal',
  template: `
    <ion-header>
      <ion-toolbar>
        <ion-title>Enter BVN</ion-title>
        <ion-buttons slot="end">
          <ion-button (click)="dismiss()">Close</ion-button>
        </ion-buttons>
      </ion-toolbar>
    </ion-header>

    <ion-content class="ion-padding">
      <ion-item>
        <ion-label position="floating">BVN</ion-label>
        <ion-input 
          type="text" 
          [(ngModel)]="bvn"
          inputmode="numeric"
          maxlength="11"
        ></ion-input>
      </ion-item>

      <ion-button expand="block" (click)="submit()">Submit</ion-button>
    </ion-content>
  `
})
export class BvnModalComponent {
  bvn: string = '';

  constructor(private modalCtrl: ModalController) {}

  dismiss() {
    this.modalCtrl.dismiss();
  }

  submit() {
    if (this.bvn.length === 11) {
      this.modalCtrl.dismiss({bvn : this.bvn});
      console.log("BVN length", this.bvn)
    } else {
      alert('Please enter a valid 11-digit BVN');
    }
  }
}
