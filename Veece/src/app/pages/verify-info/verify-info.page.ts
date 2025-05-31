import { Component, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { IonProgressBar } from '@ionic/angular/standalone';
import { UserDataService } from '../../services/user-data.service';

@Component({
  selector: 'app-verify-info',
  templateUrl: './verify-info.page.html',
  styleUrls: ['./verify-info.page.scss'],
})
export class VerifyInfoPage implements OnDestroy {

  public progress = 0;
  private intervalid: any;

  userInfo = {
    full_name: '',
    phone: '',
    email_address: '',
    full_address: ''
  };

  constructor(private router: Router, private userDataService: UserDataService) {
   this.startProgress();
  }

  startProgress () {
    this.intervalid = setInterval(() => {
      if (this.progress < 0.5) {
        this.progress += 0.01;
      } else {
        this.clearInterval();
      }
    }, 50);
  }

  clearInterval () {
    if (this.intervalid) {
      clearInterval(this.intervalid);
      this.intervalid = null;
    }
  }

  goToNextPage() {
    this.userDataService.setUserInfo(this.userInfo);
    this.router.navigate(['/verify-bvn']);
  }

  ngOnDestroy () {
    //Clean up interval when component is destroyed to prevent memory leaks
    this.clearInterval();
  }
}