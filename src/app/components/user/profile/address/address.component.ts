import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-address',
  templateUrl: './address.component.html',
  styleUrls: ['./address.component.scss'],
})
export class AddressComponent implements OnInit {
  data: any = {};
  constructor(private userService: UserService) {}

  ngOnInit(): void {
    this.getAccDetails();
  }
  getAccDetails() {
    this.userService.getProfile().subscribe((data: any) => {
      // console.log(data);
      if (data) {
        this.data = data.data;
      }
    });
  }

  saveAddress() {
    // console.log(this.data);
    this.userService.updateAddress(this.data).subscribe((data) => {});
  }
}
