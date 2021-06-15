import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DataShareService } from 'src/app/services/dataShare.service';
@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss'],
})
export class CartComponent implements OnInit {
  isEditable = false;
  checkout: any;

  constructor(private dataShare: DataShareService) {}

  ngOnInit(): void {
    this.getAddress();
  }

  getAddress() {
    this.dataShare.checkout.subscribe((data) => {
      this.checkout = Object.keys(data).length !== 0;
    });
  }
}
