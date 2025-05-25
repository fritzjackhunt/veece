import { Component } from '@angular/core';
import { Camera, CameraResultType, CameraSource } from '@capacitor/camera';
import { Http } from '@capacitor-community/http';
import { Router } from '@angular/router';
import { UserDataService } from '../../services/user-data.service';

@Component({
  selector: 'app-verify-bvn',
  templateUrl: './verify-bvn.page.html',
  styleUrls: ['./verify-bvn.page.scss']
})
export class VerifyBvnPage {
  bvn: string = '';
  selfieBase64: string = '';
  responseData: any;
  token = 'at_live_f9a75a564143407c68e6dbb25926d0f750b5c5b8e66351b2ce8e4d54862c4d33961d7a71bec00666af3e9f0c4a53717f71f07e5985d93c476d0daf6aaa63d90779683f534071bbce9529af4497868b4df94ddeab7f62f3c325d81f3182aa5a1f1d95d433f452307edaa154e44936bb319827e6901ac0923a991c47aaf8f1331ef56e06e88fc5f1849b89033006f441d290abb30f60a3a934dfffaf605647f7ff29f5fb0979a8ab8fca06bcecf9b9686dd4e3f0551b4c38a0b9a380eb412db460598df7a1a96a7d7915158e566a0459a5c00f2cd7adf99a8d5b69687197db7672cc78aa6fa54d76e2592aee8fb4ea0da77f8e4e97f3fcb17b51574e4f95101473';

  constructor(private router: Router, private userDataService: UserDataService) {}

  async pickImage() {
    const image = await Camera.getPhoto({
      quality: 90,
      allowEditing: false,
      resultType: CameraResultType.Base64,
      source: CameraSource.Prompt
    });
    this.selfieBase64 = `data:image/jpeg;base64,${image.base64String}`;
  }

  async submitForm() {
    const userInfo = this.userDataService.getUserInfo();

    // Extract first and last names from full name
    const nameParts = userInfo.full_name.trim().split(' ');
    const first_name = nameParts[0] || '';
    const last_name = nameParts[nameParts.length - 1] || '';

    //Console log the Selfie image 
    console.log('Selfie image Base64 data:', this.selfieBase64.split(',')[1]);

    const payload = {
      first_name: first_name,
      last_name: last_name,
      phone: userInfo.phone,
      email_address: userInfo.email_address,
      address: {
        address: userInfo.full_address,
        city: 'Aba north',
        state: 'Abia',
        country: 'Nigeria',
        postal_code: '1000242',
        house_no: '13',
      },
      identity: {
        id_type: 'NIGERIAN_BVN_VERIFICATION',
        bvn: this.bvn,
        selfie_image: this.selfieBase64.split(',')[1],
      },
      meta_data: { any_key: 'any_value' }
    };

    const options = {
      url: 'https://issuecards.api.bridgecard.co/v1/issuing/cardholder/register_cardholder',
      headers: {
        'Content-Type': 'application/json',
        token: `Bearer ${this.token}`,
      },
      data: payload,
      params: {}
    };

    try {
      const response = await Http.post(options);
      console.log('Success:', JSON.stringify(response, null, 2));
      this.responseData = response;
      console.log('Response body:', JSON.stringify(response.data, null, 2));
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