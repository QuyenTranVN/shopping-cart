import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductDetailDialogComponent } from './product-detail-dialog/product-detail-dialog.component';
import { MatDialog } from '@angular/material/dialog';
import { baseUrl } from '../../../../config/api';
import { ProductService } from 'src/app/services/product.service';
import { DataShareService } from 'src/app/services/dataShare.service';

@Component({
  selector: 'app-product-item-list',
  templateUrl: './product-item-list.component.html',
  styleUrls: ['./product-item-list.component.scss'],
})
export class ProductItemListComponent implements OnInit {
  ProductItemList: any[];
  idItem: number;
  baseUrl = baseUrl;
  constructor(
    private activatedRoute: ActivatedRoute,
    public dialog: MatDialog,
    private router: Router,
    private productService: ProductService,
    private dataShare: DataShareService
  ) {
    this.idItem = this.activatedRoute.snapshot.params.id;
    this.router.routeReuseStrategy.shouldReuseRoute = () => false;
    this.dataShare.checkMenu(true);
  }

  ngOnInit(): void {
    // this.loadClothing();
    this.getItemList();
    this.breadcrumList();
  }
  // loadClothing() {
  //   this.clothingService.getProductItemList().subscribe((clothing) => {
  //     this.ProductItemList = clothing;
  //     // console.log(clothing);

  //     if (this.ProductItemList) {
  //       for (let i = 0; i < this.ProductItemList.length; i++) {
  //         this.ProductItemList[i]['isHover'] = false;
  //       }
  //     }
  //     // console.log(this.ProductItemList);
  //   });
  // }
  openDialog(idList: number) {
    this.dialog.open(ProductDetailDialogComponent, {
      data: {
        id: idList,
      },
    });
  }

  getItemList() {
    this.productService.getItemList(this.idItem).subscribe((data: any) => {
      // console.log(data);
      this.ProductItemList = data['data'];
      if (this.ProductItemList) {
        for (let i = 0; i < this.ProductItemList.length; i++) {
          this.ProductItemList[i]['isHover'] = false;
        }
      }
    });
  }
  breadcrumList() {
    const breadScrum = {
      breadCrum1: {
        // name: this.ProductItemList.name,
        // url: this.ProductItemList.id,
      },
      breadScrum2: {},
    };
    this.dataShare.breadcrumList(breadScrum);
  }
}
