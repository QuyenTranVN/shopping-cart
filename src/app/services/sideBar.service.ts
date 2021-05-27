import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { apiUrl } from 'src/app/config/api';
import { sideBar } from '../models/sideBar';
@Injectable({
  providedIn: 'root',
})
export class sideBarService {
  constructor(private http: HttpClient) {}
  // getProducts(): Product[] {
  // todo: Populate products from an API and return Observable

  getsideBar(): Observable<sideBar[]> {
    return this.http.get<sideBar[]>(`${apiUrl}?with=subCategory`);
  }
}
// }
