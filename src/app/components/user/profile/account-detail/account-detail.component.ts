import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-account-detail',
  templateUrl: './account-detail.component.html',
  styleUrls: ['./account-detail.component.scss'],
})
export class AccountDetailComponent implements OnInit {
  changes: any = {};
  constructor() {}

  ngOnInit(): void {}
  saveChange() {
    console.log(this.changes);
  }
}
