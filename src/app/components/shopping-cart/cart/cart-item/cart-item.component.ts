import { Component, OnInit } from '@angular/core';
import { DataShareService } from 'src/app/services/dataShare.service';

@Component({
  selector: 'app-cart-item',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.scss'],
})
export class CartItemComponent implements OnInit {
  product: string;
  price: number;
  quantity: number;
  subtotal: number = 0;
  ELEMENT_DATA: any[] = [];
  constructor(private dataShare: DataShareService) {}
  displayedColumns: string[] = ['product', 'price', 'quantity', 'subtotal'];
  dataSource = this.ELEMENT_DATA;

  ngOnInit(): void {
    this.ELEMENT_DATA.forEach((item) => {
      item.subtotal = item.quantity * item.price;
    });
    this.getCartItem();
  }
  getCartItem() {
    this.dataShare.addCart.subscribe((data) => {
      // console.log(data);
    });
  }
}
