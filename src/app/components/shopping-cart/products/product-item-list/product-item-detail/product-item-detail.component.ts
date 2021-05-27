import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { baseUrl } from '../../../../../config/api';

import { ClothingService } from 'src/app/services/clothing.service';
import { ActivatedRoute } from '@angular/router';

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
  constructor(
    private activatedRoute: ActivatedRoute,

    private clothingService: ClothingService,
    private form: FormBuilder,
    private productDetail: ClothingService
  ) {
    this.idDetail = this.activatedRoute.snapshot.params.idDetail;
  }

  ngOnInit(): void {
    // this.loadClothing();
    this.settingForm = this.form.group({
      capacity: [1],
    });
    this.getProductDetail();
  }
  // loadClothing() {
  //   this.clothingService.getProductItemList().subscribe((clothing) => {
  //     this.ProductItemList = clothing;
  //   });
  // }
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
    this.productDetail.getProductDetail(this.idDetail).subscribe((res: any) => {
      this.ProductDetailList = res['data'];
    });
  }
}
