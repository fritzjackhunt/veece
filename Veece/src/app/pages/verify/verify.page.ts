import { Component, OnInit } from '@angular/core';
import { BvnVerificationService } from '.../bvn-verification.service';

@Component({
  selector: 'app-verify',
  templateUrl: './verify.page.html',
  styleUrls: ['./verify.page.scss'],
})
export class VerifyPage {

  bvn : string;
  verificationResult : any;

  constructor( private bvnService: BvnVerificationService) { }

  verifyBvn () {
    this.bvnService.verifyBvn(this.bvn).subscribe(
      (response: { data: any; }) => {
        this.verificationResult = response.data;
      },
      (error: any) => {
        console.error('Error verifying BVN:', error);
      }
    );
  }

}
