import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable()
export class DataShareService {
  private authenSubject = new BehaviorSubject(false);
  authen = this.authenSubject.asObservable();

  constructor() {}
  isAuthen(isAuthen: boolean) {
    this.authenSubject.next(isAuthen);
  }
}
