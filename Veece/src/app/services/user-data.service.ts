// ✅ 1. Shared Service: user-data.service.ts

import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class UserDataService {
  private userInfo: any = {};

  setUserInfo(data: any) {
    this.userInfo = data;
  }

  getUserInfo() {
    return this.userInfo;
  }

  clearUserInfo() {
    this.userInfo = {};
  }
}