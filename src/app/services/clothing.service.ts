import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { clothingUrl } from '../config/api';
import { Clothing } from '../models/clothing';

@Injectable({
  providedIn: 'root',
})
export class ClothingService {
  constructor(private http: HttpClient) {}

  getProductItemList(): Observable<Clothing[]> {
    return this.http.get<Clothing[]>(clothingUrl);
  }
}
