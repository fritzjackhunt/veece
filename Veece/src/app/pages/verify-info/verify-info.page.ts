import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserDataService } from '../../services/user-data.service';

@Component({
  selector: 'app-verify-info',
  templateUrl: './verify-info.page.html',
  styleUrls: ['./verify-info.page.scss']
})
export class VerifyInfoPage {
  userInfo = {
    full_name: '',
    phone: '',
    email_address: '',
    full_address: ''
  };

  constructor(private router: Router, private userDataService: UserDataService) {}

  goToNextPage() {
    this.userDataService.setUserInfo(this.userInfo);
    this.router.navigate(['/verify-bvn']);
  }
}