import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { ClothingService } from 'src/app/services/clothing.service';

@Component({
  selector: 'app-product-detail-dialog',
  templateUrl: './product-detail-dialog.component.html',
  styleUrls: ['./product-detail-dialog.component.scss'],
})
export class ProductDetailDialogComponent implements OnInit {
  ProductItemList: any[];
  settingForm: FormGroup;

  slides = [
    {
      img: 'https://flatsome3.uxthemes.com/wp-content/uploads/2013/06/T_7_front.jpg',
    },
    {
      img: 'https://flatsome3.uxthemes.com/wp-content/uploads/2013/06/T_7_back.jpg',
    },
  ];
  slideConfig = {
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  constructor(
    private clothingService: ClothingService,
    private form: FormBuilder
  ) {}

  ngOnInit(): void {
    // this.loadClothing();
    this.settingForm = this.form.group({
      capacity: [1],
    });
  }
  loadClothing() {
    this.clothingService.getProductItemList().subscribe((clothing) => {
      this.ProductItemList = clothing;
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
}
