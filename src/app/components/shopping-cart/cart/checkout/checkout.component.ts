import { Component, OnInit } from '@angular/core';
import { DataShareService } from 'src/app/services/dataShare.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss'],
})
export class CheckoutComponent implements OnInit {
  infor: any = {};
  constructor(
    private userService: UserService,
    private dataShare: DataShareService
  ) {}

  ngOnInit(): void {
    this.getAccDetails();
  }
  getAccDetails() {
    this.userService.getProfile().subscribe((data: any) => {
      // console.log(data);
      if (data) {
        this.infor = data.data;
      }
    });
  }
  saveAddress() {
    this.dataShare.addCheckOut(this.infor);
  }
}
