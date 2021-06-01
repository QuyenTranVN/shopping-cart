import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable()
export class DataShareService {
  private authenSubject = new BehaviorSubject(false);
  authen = this.authenSubject.asObservable();

  private addCartSubject = new BehaviorSubject<any[]>([]);
  addCart = this.addCartSubject.asObservable();

  constructor() {}

  isAuthen(isAuthen: boolean) {
    this.authenSubject.next(isAuthen);
  }
  addToCart(item: any) {
    // console.log(this.addCartSubject.getValue().concat([item]));
    // const checkId = this.addCartSubject.getValue().concat([item]).indexOf(item);
    // console.log('lllll', checkId);
    // if (checkId) {
    let test = this.containsObject(
      item,
      this.addCartSubject.getValue().concat([item])
    );
    console.log(test);
    this.addCartSubject.next(this.addCartSubject.getValue().concat([item]));
    // }
  }

  containsObject(obj: object, list: any) {
    return list.some((elem: any) => elem === obj);
  }
}
