import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ClothingService } from 'src/app/services/clothing.service';
import { ProductDetailDialogComponent } from './product-detail-dialog/product-detail-dialog.component';
import { MatDialog } from '@angular/material/dialog';
@Component({
  selector: 'app-product-item-list',
  templateUrl: './product-item-list.component.html',
  styleUrls: ['./product-item-list.component.scss'],
})
export class ProductItemListComponent implements OnInit {
  ProductItemList: any[];
  idItem: number;
  constructor(
    private clothingService: ClothingService,
    private activatedRoute: ActivatedRoute,
    public dialog: MatDialog
  ) {}

  ngOnInit(): void {
    this.loadClothing();
    // this.idItem = this.activatedRoute.snapshot.params.id;
  }
  loadClothing() {
    this.clothingService.getProductItemList().subscribe((clothing) => {
      this.ProductItemList = clothing;
      // console.log(clothing);

      if (this.ProductItemList) {
        for (let i = 0; i < this.ProductItemList.length; i++) {
          this.ProductItemList[i]['isHover'] = false;
        }
      }
      // console.log(this.ProductItemList);
    });
  }
  openDialog() {
    this.dialog.open(ProductDetailDialogComponent);
  }
}
