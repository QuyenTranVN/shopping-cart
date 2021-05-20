import { Component, OnInit } from '@angular/core';
import { Shop } from 'src/app/models/shop';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
})
export class ProductsComponent implements OnInit {
  productList: Shop[] = [];

  constructor(private productService: ProductService) {}

  ngOnInit(): void {
    // this.loadProducts();
  }
  loadProducts() {
    this.productService.getProducts().subscribe((products) => {
      this.productList = products;
      console.log(products)
    });
  }
}
