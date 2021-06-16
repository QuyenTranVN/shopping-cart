import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DataShareService } from 'src/app/services/dataShare.service';
import { UserComponent } from '../../user/user.component';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss'],
})
export class NavComponent implements OnInit {
  sumData: number = 0;
  loginSuccess: boolean = false;
  dataSource: any = [];
  constructor(
    public dialog: MatDialog,
    private dataShareService: DataShareService
  ) {}

  ngOnInit(): void {
    this.checkLogin();
    this.dataShareService.authen.subscribe((res) => {
      this.loginSuccess = res;
    });
    this.getCartItem();
    this.sum();
  }

  checkLogin() {
    if (localStorage.getItem('inforUser')) {
      // this.loginSuccess = true;
      this.dataShareService.isAuthen(true);
    } else {
      this.dataShareService.isAuthen(false);
    }
  }
  openDialog() {
    this.dialog
      .open(UserComponent)
      .afterClosed()
      .subscribe((data: any) => {
        this.checkLogin();
      });
  }
  getCartItem() {
    this.dataShareService.addCart.subscribe((data: any) => {
      this.dataSource = JSON.parse(localStorage.getItem('listCat'))
        ? JSON.parse(localStorage.getItem('listCat'))
        : [];
      if (Object.keys(data).length !== 0) {
        this.dataSource.push({
          productId: data.id,
          product: data.productImages[0].image,
          productName: data.name,
          price: data.price,
          quantity: data.quantity,
          idParent: data.categories[0].id,
          idChild: data.id,
          quantities: data.quantities,
        });
        console.log(this.dataSource);
        this.dataSource = this.handlingList();
        localStorage.setItem('listCat', JSON.stringify(this.dataSource));
        this.dataShareService.addToCart({});
      } else {
        this.sumData = 0;
      }
      this.sum();
    });
  }

  sum() {
    this.sumData = 0;
    for (let i = 0; i < this.dataSource.length; i++) {
      this.sumData += this.dataSource[i].quantity;
    }
  }

  handlingList() {
    let res = Object.values(
      this.dataSource.reduce((r: any, o: any) => {
        r[o.productId]
          ? (r[o.productId].quantity += o.quantity)
          : (r[o.productId] = { ...o });
        return r;
      }, {})
    );
    return res;
  }
}
