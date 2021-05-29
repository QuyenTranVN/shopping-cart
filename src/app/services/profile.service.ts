import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { apiUrl } from '../config/api';

@Injectable({
  providedIn: 'root',
})
export class ProfileService {
  profile = JSON.parse(localStorage.getItem('inforUser'));
  token: string;
  authHeader: any;
  // token = 'Beaber' + this.profile;
  constructor(private http: HttpClient) {
    if (this.profile) {
      this.token = `Bearer ${this.profile.access_token}`;
      this.authHeader = new HttpHeaders({
        Authorization: this.token,
      });
    }
  }

  logout() {
    return this.http.get(`${apiUrl}/logout`, { headers: this.authHeader });
  }
}
