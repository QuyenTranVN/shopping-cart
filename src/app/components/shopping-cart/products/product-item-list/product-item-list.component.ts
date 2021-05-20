import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Clothing } from 'src/app/models/clothing';
import { ClothingService } from 'src/app/services/clothing.service';
@Component({
  selector: 'app-product-item-list',
  templateUrl: './product-item-list.component.html',
  styleUrls: ['./product-item-list.component.scss'],
})
export class ProductItemListComponent implements OnInit {
  changePic: boolean;
  ProductItemList: Clothing[] = [];
  idItem: number;

  constructor(
    private clothingService: ClothingService,
    private activatedRoute: ActivatedRoute
  ) {
    this.changePic = false;
  }

  ngOnInit(): void {
    this.loadClothing();
    // this.idItem = this.activatedRoute.snapshot.params.id;
  }
  loadClothing() {
    this.clothingService.getProductItemList().subscribe((clothing) => {
      this.ProductItemList = clothing;
      console.log(clothing);
    });
  }
}
