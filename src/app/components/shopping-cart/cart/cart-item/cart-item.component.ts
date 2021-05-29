import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cart-item',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.scss'],
})
export class CartItemComponent implements OnInit {
  name: string;
  position: number;
  weight: number;
  symbol: string;
  ELEMENT_DATA: any[] = [];
  constructor() {}

  ngOnInit(): void {}
  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
  dataSource = this.ELEMENT_DATA;
}
