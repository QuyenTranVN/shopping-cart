import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-address',
  templateUrl: './address.component.html',
  styleUrls: ['./address.component.scss'],
})
export class AddressComponent implements OnInit {
  address: any = {};
  constructor() {}

  ngOnInit(): void {}
  saveAddress() {
    console.log(this.address);
  }
}