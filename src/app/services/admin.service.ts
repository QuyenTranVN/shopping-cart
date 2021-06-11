import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { apiAdmin, apiUrl } from '../config/api';
@Injectable({
  providedIn: 'root',
})
export class AdminService {
  constructor(private http: HttpClient) {}
  adminLogin(body: any) {
    return this.http.post(`${apiAdmin}/admin/login`, body);
  }
  adminUser(paginator: string) {
    return this.http.get(`${apiAdmin}/user${paginator}`, {
      headers: this.getToken(),
    });
  }

  adminShowUser(id: number) {
    return this.http.get(`${apiAdmin}/user/${id}`, {
      headers: this.getToken(),
    });
  }
  adminUpdateUser(body: any, id: number) {
    return this.http.patch(`${apiAdmin}/user/${id}`, body, {
      headers: this.getToken(),
    });
  }

  adminDeleteUser(id: number) {
    return this.http.delete(`${apiAdmin}/user/${id}`, {
      headers: this.getToken(),
    });
  }

  adminCreateUser(body: any) {
    return this.http.post(`${apiAdmin}/user`, body, {
      headers: this.getToken(),
    });
  }

  logout() {
    return this.http.get(`${apiAdmin}/admin/logout`, {
      headers: this.getToken(),
    });
  }

  staticBill() {
    return this.http.get(`${apiAdmin}/statistic`, {
      headers: this.getToken(),
    });
  }

  getToken() {
    let authHeader;
    const profile = JSON.parse(localStorage.getItem('inforAdmin'));
    if (profile) {
      const token = `bearer ${profile.access_token}`;
      authHeader = new HttpHeaders({
        Authorization: token,
      });
    }
    return authHeader;
  }
}
