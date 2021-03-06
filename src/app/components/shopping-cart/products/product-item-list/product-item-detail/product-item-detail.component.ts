import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { baseUrl } from '../../../../../config/api';

import { ClothingService } from 'src/app/services/clothing.service';
import { ActivatedRoute } from '@angular/router';
import { DataShareService } from 'src/app/services/dataShare.service';

@Component({
  selector: 'app-product-item-detail',
  templateUrl: './product-item-detail.component.html',
  styleUrls: ['./product-item-detail.component.scss'],
})
export class ProductItemDetailComponent implements OnInit {
  ProductDetailList: any;
  settingForm: FormGroup;
  baseUrl = baseUrl;

  slideConfig = {
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  idDetail: number;
  id: number;
  constructor(
    private activatedRoute: ActivatedRoute,
    private form: FormBuilder,
    private productDetail: ClothingService,
    private dataShare: DataShareService
  ) {
    this.idDetail = this.activatedRoute.snapshot.params.idDetail;
    this.id = this.activatedRoute.snapshot.params.id;
    this.dataShare.checkMenu(false);
  }
  ngOnInit(): void {
    // this.loadClothing();
    this.settingForm = this.form.group({
      capacity: [1],
    });
    this.getProductDetail();
  }
  increment() {
    if (
      this.settingForm.value['capacity'] < this.ProductDetailList.quantities
    ) {
      this.settingForm.setValue({
        capacity: this.settingForm.get('capacity').value + 1,
      });
    }
  }
  decrement() {
    if (this.settingForm.value['capacity'] > 1) {
      this.settingForm.setValue({
        capacity: this.settingForm.get('capacity').value - 1,
      });
    }
  }
  onlyNumber(event: any): boolean {
    const charCode = event.which ? event.which : event.keyCode;
    if (charCode > 31 && (charCode < 48 || charCode > 57)) {
      console.log('charCode restricyed is ' + charCode);
      return false;
    }
    return true;
  }
  getProductDetail() {
    this.productDetail.getProductDetail(this.idDetail).subscribe((res: any) => {
      this.ProductDetailList = res['data'];
    });
  }
  addToCart(item: any) {
    item.quantity = this.settingForm.value.capacity;
    this.dataShare.addToCart(item);
  }
}
