import { Component, OnDestroy } from '@angular/core';
import { Camera, CameraResultType, CameraSource } from '@capacitor/camera';
import { Http } from '@capacitor-community/http';
import { Router } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { UserDataService } from '../../services/user-data.service';
import { BvnModalComponent } from '../../components/modals/bvn-modal/bvn-modal.component';
import { SelfieModalComponent } from '../../components/modals/selfie-modal/selfie-modal.component';

@Component({
  selector: 'app-verify-bvn',
  templateUrl: './verify-bvn.page.html',
  styleUrls: ['./verify-bvn.page.scss']
})
export class VerifyBvnPage implements OnDestroy {
  public progress = 0.5;
  private intervalid: any;

  bvn: string = '';
  selfieBase64: string = '';
  bvnCompleted: boolean = false;
  selfieCompleted: boolean = false;
  responseData: any;

  token = 'bearer your_token_here';

  constructor(
    private router: Router,
    private modalCtrl: ModalController,
    private userDataService: UserDataService
  ) {
    this.startProgress();
  }

  ngOnDestroy() {
    this.clearInterval();
  }

  startProgress() {
    this.intervalid = setInterval(() => {
      if (this.progress < 1) {
        this.progress += 0.01;
      } else {
        this.clearInterval();
      }
    }, 50);
  }

  clearInterval() {
    if (this.intervalid) {
      clearInterval(this.intervalid);
      this.intervalid = null;
    }
  }

  async openBvnModal() {
    const modal = await this.modalCtrl.create({
      component: BvnModalComponent,
      breakpoints: [0, 0.5],
      initialBreakpoint: 0.5,
      cssClass: 'custom-modal'
    });

    modal.onDidDismiss().then((result) => {
      if (result.data?.bvn && result.data.bvn.length === 11) {
        this.bvn = result.data.bvn;
        this.bvnCompleted = true;
      }
    });

    await modal.present();
  }

  async openSelfieModal() {
    const modal = await this.modalCtrl.create({
      component: SelfieModalComponent,
      breakpoints: [0, 0.5],
      initialBreakpoint: 0.5,
      cssClass: 'custom-modal'
    });

    modal.onDidDismiss().then((result) => {
      if (result.data?.selfieBase64) {
        this.selfieBase64 = result.data.selfieBase64;
        this.selfieCompleted = true;
      }
    });

    await modal.present();
  }

  canSubmit() {
    return this.bvnCompleted && this.selfieCompleted;
  }

  async submitForm() {
    const userInfo = this.userDataService.getUserInfo();

    const nameParts = userInfo.full_name.trim().split(' ');
    const first_name = nameParts[0] || '';
    const last_name = nameParts[nameParts.length - 1] || '';

    const payload = {
      first_name,
      last_name,
      phone: userInfo.phone,
      email_address: userInfo.email_address,
      address: {
        address: userInfo.full_address,
        city: 'Aba north',
        state: 'Abia',
        country: 'Nigeria',
        postal_code: '1000242',
        house_no: '13'
      },
      identity: {
        id_type: 'NIGERIAN_BVN_VERIFICATION',
        bvn: this.bvn,
        selfie_image: this.selfieBase64.split(',')[1]
      },
      meta_data: { any_key: 'any_value' }
    };

    const options = {
      url: 'https://issuecards.api.bridgecard.co/v1/issuing/cardholder/register_cardholder',
      headers: {
        'Content-Type': 'application/json',
        token: `Bearer ${this.token}`
      },
      data: payload,
      params: {}
    };

    try {
      const response = await Http.post(options);
      this.responseData = response;
      if (response.status === 201 || response.data?.success) {
        this.router.navigate(['/verify-success']);
      } else {
        this.router.navigate(['/verify-failure']);
      }
    } catch (error) {
      console.error('Error:', error);
      this.router.navigate(['/verify-failure']);
    }
  }
}
