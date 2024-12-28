import { Component } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Browser } from '@capacitor/browser'

@Component({
  selector: 'app-home',
  templateUrl: './verify.page.html',
  styleUrls: ['./verify.page.scss'],
  standalone: false,
})
export class VerifyPage {
  private API_KEY = '7f9f5f82-ede8-4b5e-a1ad-7b25dc38113a';
  private VERIFF_URL = 'https://stationapi.veriff.com/v1/sessions/';
  private body = {
    verification: {
      callback: 'https://wwww.veriff.com',
      person: {
        firstName: 'James',
        lastName: 'Bond',
        idNumber: '100000001',
      },
      document: {
        number: 'AB1000001',
        type: 'PASSPORT',
        country: 'SA',
      },
      vendorData: '1518343',
      lang: 'en',
    },
  };

  constructor(private httpClient: HttpClient) {}

  async openVeriffSession() {
    try {
      const session = await this.createVeriffSession();
      const sessionURL = session.verification.url;

      console.log('Opening session URL:', sessionURL);

      // Open the session URL in the browser
      await Browser.open({ url: sessionURL });
    } catch (error) {
      console.error('Error opening Veriff session:', error);
    }
  }

  createVeriffSession(): Promise<any> {
    return new Promise((resolve, reject) => {
      const body = JSON.stringify(this.body);
      const options = {
        headers: new HttpHeaders({
          'X-AUTH-CLIENT': this.API_KEY,
          'Content-Type': 'application/json',
        }),
      };

      this.httpClient.post(this.VERIFF_URL, body, options).subscribe(
        (response: any) => {
          console.log('Session created:', response);
          resolve(response);
        },
        (error) => {
          console.error('Error creating session:', error);
          reject(error);
        }
      );
    });
  }
}