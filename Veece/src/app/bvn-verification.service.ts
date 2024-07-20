import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BvnVerificationService {
  private baseUrl = 'your api verify me base url';
  private apiKey = 'your api key'; 


  constructor( private http: HttpClient) { }

  verifyBvn(bvn: string): Observable<any> {
    const headers = new HttpHeaders ({
      'Authorization' : `Bearer ${this.apiKey}`,
      'Content-Type' : 'application/json'
    });

    return this.http.post(`${this.baseUrl}/bvn/verify`, {bvn}, {headers});
  }
}
