import { Component, OnInit } from '@angular/core';
import { DataShareService } from 'src/app/services/dataShare.service';
import { PlaceOrderService } from 'src/app/services/placeOrder.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';

@Component({
  selector: 'app-place-order',
  templateUrl: './place-order.component.html',
  styleUrls: ['./place-order.component.scss'],
})
export class PlaceOrderComponent implements OnInit {
  isCheck: boolean = false;
  dataSource: any;
  cartItem: any[] = [];
  checkout: any;
  sum: number = 0;
  constructor(
    private dataShare: DataShareService,
    private placeOrder: PlaceOrderService,
    private _snackBar: MatSnackBar,
    private router: Router
  ) {
    this.getProduct();
    this.getAddress();
  }

  ngOnInit(): void {
    this.dataSource = {
      address: this.checkout.address,
      phone: this.checkout.phone,
      total: this.sum,
      items: this.cartItem,
    };
  }

  getProduct() {
    this.sum = 0;
    this.dataShare.cartItem.subscribe((data: any) => {
      this.cartItem = [];
      for (let i = 0; i < data.length; i++) {
        this.cartItem.push({
          product_id: data[i].productId,
          quantity: data[i].quantity,
          price: data[i].price,
          name: data[i].productName,
          subtotal: parseInt(data[i].price) * parseInt(data[i].quantity),
        });
        this.sum += parseInt(data[i].price) * parseInt(data[i].quantity);
      }
    });
  }
  getAddress() {
    this.dataShare.checkout.subscribe((data) => {
      this.checkout = data;
    });
  }
  getPlaceOrder() {
    this.placeOrder.getPlaceOrder(this.dataSource).subscribe(
      (data: any) => {
        if (data.success) {
          this._snackBar.open('Order successfully', 'OK', { duration: 2000 });
          localStorage.removeItem('listCat');
          this.router.navigate(['shop']);
        } else {
          this._snackBar.open('You need to login first', 'OK', {
            duration: 2000,
          });
        }
      },
      (err) => {
        this._snackBar.open('You need to login first', 'OK', {
          duration: 2000,
        });
      }
    );
  }
}
