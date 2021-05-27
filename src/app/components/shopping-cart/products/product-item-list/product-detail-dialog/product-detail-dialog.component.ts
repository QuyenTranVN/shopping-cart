import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';
import { baseUrl } from 'src/app/config/api';

import { ClothingService } from 'src/app/services/clothing.service';

@Component({
  selector: 'app-product-detail-dialog',
  templateUrl: './product-detail-dialog.component.html',
  styleUrls: ['./product-detail-dialog.component.scss'],
})
export class ProductDetailDialogComponent implements OnInit {
  ProductDetailList: any;

  settingForm: FormGroup;
  baseUrl = baseUrl;

  slideConfig = {
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  idDetail: number;
  constructor(
    // private clothingService: ClothingService,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private form: FormBuilder,
    private activatedRoute: ActivatedRoute,
    private productDetail: ClothingService
  ) {
    this.idDetail = this.activatedRoute.snapshot.params.idDetail;
  }

  ngOnInit(): void {
    this.getProductDetail();
    this.settingForm = this.form.group({
      capacity: [1],
    });
  }

  increment() {
    if (this.settingForm.value['capacity'] < 10) {
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
    this.productDetail.getProductDetail(this.data.id).subscribe((res: any) => {
      this.ProductDetailList = res['data'];
    });
  }
}
