import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable()
export class DataShareService {
  private authenSubject = new BehaviorSubject(false);
  authen = this.authenSubject.asObservable();

  private authenAdminSubject = new BehaviorSubject(false);
  authenAdmin = this.authenAdminSubject.asObservable();

  private addCartSubject = new BehaviorSubject({});
  addCart = this.addCartSubject.asObservable();

  private cartItemSubject = new BehaviorSubject({});
  cartItem = this.cartItemSubject.asObservable();

  private checkOutSubject = new BehaviorSubject({});
  checkout = this.checkOutSubject.asObservable();

  private menuSubject = new BehaviorSubject(true);
  menu = this.menuSubject.asObservable();

  private breadcrumSubject = new BehaviorSubject({});
  bread = this.breadcrumSubject.asObservable();

  constructor() {}
  isAuthen(isAuthen: boolean) {
    this.authenSubject.next(isAuthen);
  }

  isAuthenAdmin(isAuthenAdmin: boolean) {
    this.authenAdminSubject.next(isAuthenAdmin);
  }

  addToCart(item: object) {
    this.addCartSubject.next(item);
    // this.addCartSubject.next(this.addCartSubject.getValue().concat([item]));
  }
  addCartItem(item: object) {
    this.cartItemSubject.next(item);
  }
  addCheckOut(item: object) {
    this.checkOutSubject.next(item);
  }
  checkMenu(isMenu: boolean) {
    this.menuSubject.next(isMenu);
  }
  breadcrumList(item: any) {
    this.breadcrumSubject.next(item);
  }
}
