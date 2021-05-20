import { Component, OnInit, Input } from '@angular/core';
import { Shop } from 'src/app/models/shop';
import { ProductService } from 'src/app/services/product.service';
@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.scss'],
})
export class ProductItemComponent implements OnInit {
  productList: Shop[] = [];

  constructor(private productService: ProductService) {}

  ngOnInit(): void {
    this.loadProducts();
  }
  loadProducts() {
    this.productService.getProducts().subscribe((products) => {
      this.productList = products;
      // console.log(products)
    });
  }
}
