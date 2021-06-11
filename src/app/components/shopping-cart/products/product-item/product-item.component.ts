import { Component, OnInit, Input } from '@angular/core';
import { Shop } from 'src/app/models/shop';
import { baseUrl } from '../../../../config/api';
import { ProductService } from 'src/app/services/product.service';
import { DataShareService } from 'src/app/services/dataShare.service';
@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.scss'],
})
export class ProductItemComponent implements OnInit {
  productList: Shop[] = [];
  baseUrl = baseUrl;

  constructor(
    private productService: ProductService,
    private dataShare: DataShareService
  ) {
    this.dataShare.checkMenu(true);
  }

  ngOnInit(): void {
    this.loadProducts();
  }
  loadProducts() {
    this.productService.getProducts().subscribe((products: any) => {
      this.productList = products['data'];
    });
  }
}
