import { Component, OnInit, Input } from '@angular/core';
import { Shop } from 'src/app/models/shop';
@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.scss'],
})
export class ProductItemComponent implements OnInit {
  @Input() productItem: Shop;
  constructor() {}

  ngOnInit(): void {}
}
