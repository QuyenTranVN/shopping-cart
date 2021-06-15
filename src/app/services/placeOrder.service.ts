import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { apiUrl } from '../config/api';

@Injectable({
  providedIn: 'root',
})
export class PlaceOrderService {
  constructor(private http: HttpClient) {}

  // getProductItemList(): Observable<Clothing[]> {
  //   return this.http.get<Clothing[]>(clothingUrl);
  // }
  getToken() {
    let authHeader;
    const profile = JSON.parse(localStorage.getItem('inforUser'));
    if (profile) {
      const token = `Bearer ${profile.access_token}`;
      authHeader = new HttpHeaders({
        Authorization: token,
      });
    }
    return authHeader;
  }

  getPlaceOrder(body: any) {
    return this.http.post(`${apiUrl}/checkout`, body, {
      headers: this.getToken(),
    });
  }
}
