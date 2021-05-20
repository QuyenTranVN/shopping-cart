import { Injectable } from '@angular/core';
import { Shop } from '../models/shop';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { productUrl } from 'src/app/config/api';
import { baseUrl } from 'src/app/config/api';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  // products: Product[] = [
  //   new Product(
  //     'clothing',
  //     12,
  //     '../../../assets/img/category/clothing/clothing.jpeg'
  //   ),
  //   new Product('women', 18, '../../../assets/img/category/woman/woman.jpeg'),
  //   new Product(
  //     'booking',
  //     6,
  //     '../../../assets/img/category/booking/booking.jpeg'
  //   ),
  //   new Product('men', 9, '../../../assets/img/category/men/man.jpeg'),
  //   new Product('bag', 6, '../../../assets/img/category/bag/bag.jpeg'),
  //   new Product('music', 6, '../../../assets/img/category/music/music.jpeg'),
  //   new Product('poster', 5, '../../../assets/img/category/poster/poster.jpeg'),
  //   new Product('shoes', 7, '../../../assets/img/category/shoes/shoes.jpeg'),
  // ];

  constructor(private http: HttpClient) {}
  // todo: Populate products from an API and return Observable

  getProducts(): Observable<Shop[]> {
    return this.http.get<Shop[]>(productUrl);
  }

  // getItemList(id: number): Observable<Shop[]> {
  //   return this.http.get<Shop[]>(`${productUrl}/${id}`);
  // }
}
