import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { apiUrl } from '../config/api';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(private http: HttpClient) {}
  login(body: any) {
    return this.http.post(`${apiUrl}/login`, body);
  }
  signUp(body: any) {
    return this.http.post(`${apiUrl}/register`, body);
  }

  // Get Token to logout
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

  logout() {
    return this.http.get(`${apiUrl}/logout`, { headers: this.getToken() });
  }
  // finish logout

  getProfile() {
    return this.http.get(`${apiUrl}/profile`, { headers: this.getToken() });
  }

  updateProfile(body: any) {
    return this.http.patch(`${apiUrl}/profile`, body, {
      headers: this.getToken(),
    });
  }
  updatePass(body: any) {
    return this.http.patch(`${apiUrl}/profile/changepass`, body, {
      headers: this.getToken(),
    });
  }
  updateAddress(body: any) {
    return this.http.patch(`${apiUrl}/profile/changeaddress`, body, {
      headers: this.getToken(),
    });
  }
}
