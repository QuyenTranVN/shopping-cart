import { Component, OnInit } from '@angular/core';
import { DataShareService } from 'src/app/services/dataShare.service';
import { MatSnackBar } from '@angular/material/snack-bar';
@Component({
  selector: 'app-cart-item',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.scss'],
})
export class CartItemComponent implements OnInit {
  product: string;
  productName: string;
  price: number;
  quantity: number;
  subtotal: number;
  total: number = 0;
  ELEMENT_DATA: any[] = [];
  dataSource = this.ELEMENT_DATA;

  constructor(
    private dataShare: DataShareService,
    private _snackBar: MatSnackBar
  ) {
    // localStorage.removeItem('listCat');

    this.dataSource = this.ELEMENT_DATA = JSON.parse(
      localStorage.getItem('listCat')
    )
      ? JSON.parse(localStorage.getItem('listCat'))
      : [];
  }
  displayedColumns: string[] = ['product', 'price', 'quantity', 'subtotal'];

  ngOnInit(): void {
    // this.getCartItem();
    this.subTotal();
    this.calTotal();
  }
  // getCartItem() {
  //   this.dataShare.addCart.subscribe((data: any) => {
  //     if (Object.keys(data).length !== 0) {
  //       this.ELEMENT_DATA.push({
  //         productId: data.id,
  //         product: data.productImages[0].image,
  //         productName: data.name,
  //         price: data.price,
  //         quantity: data.quantity,
  //         idParent: data.categories[0].id,
  //         idChild: data.id,
  //         quantities: data.quantities,
  //       });
  //       this.ELEMENT_DATA = this.handlingList();
  //       this.dataSource = this.ELEMENT_DATA;
  //       localStorage.setItem('listCat', JSON.stringify(this.dataSource));
  //       this.dataShare.addToCart({});
  //     }
  //   });
  // }

  // handlingList() {
  //   let res = Object.values(
  //     this.ELEMENT_DATA.reduce((r, o) => {
  //       r[o.productId]
  //         ? (r[o.productId].quantity += o.quantity)
  //         : (r[o.productId] = { ...o });
  //       return r;
  //     }, {})
  //   );
  //   return res;
  // }

  subTotal() {
    this.subtotal = 0;
    if (this.dataSource.length > 0) {
      this.dataSource.forEach((item) => {
        item.subtotal = item.quantity * item.price;
      });
    }
  }
  decrement(element: any, i: any) {
    if (this.dataSource[i].quantity > 1) {
      this.dataSource[i].quantity--;
    }
  }
  increment(element: any, i: any) {
    if (this.dataSource[i].quantity < this.dataSource[i].quantities) {
      this.dataSource[i].quantity++;
    }
  }
  onlyNumber(event: any): boolean {
    const charCode = event.which ? event.which : event.keyCode;
    if (charCode > 31 && (charCode < 48 || charCode > 57)) {
      // console.log('charCode restricyed is ' + charCode);
      return false;
    }
    return true;
  }
  deleteItem(productId: any) {
    if (this.dataSource.length > 0) {
      this.dataSource = this.dataSource.filter((el) => {
        return el.productId != productId;
      });
    }
  }
  update() {
    this.subTotal();
    this.calTotal();
    localStorage.setItem('listCat', JSON.stringify(this.dataSource));
    this._snackBar.open('Updated successfully', 'OK', { duration: 2000 });
    this.dataShare.addToCart({});
  }
  calTotal() {
    this.total = 0;
    for (let i = 0; i < this.dataSource.length; i++) {
      this.total += this.dataSource[i].subtotal;
    }
  }
  placeOrder() {
    this.dataShare.addCartItem(this.dataSource);
  }
}
