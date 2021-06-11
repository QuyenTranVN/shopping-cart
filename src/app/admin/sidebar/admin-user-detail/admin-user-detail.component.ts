import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { baseUrl } from 'src/app/config/api';
import { AdminService } from 'src/app/services/admin.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-admin-user-detail',
  templateUrl: './admin-user-detail.component.html',
  styleUrls: ['./admin-user-detail.component.scss'],
})
export class AdminUserDetailComponent implements OnInit {
  idItem: number;
  // id: number;
  // avatar: string;
  // username: string;
  // email: string;
  // userItem: any;
  dataSource: any;
  baseUrl: string;
  model: any = {};
  messageError: string = '';
  constructor(
    private adminService: AdminService,
    private activatedRoute: ActivatedRoute,
    private _location: Location
  ) {
    this.idItem = this.activatedRoute.snapshot.params.id;
  }

  ngOnInit(): void {
    if (this.idItem) {
      this.updateAdminUser();
    }
  }
  updateAdminUser() {
    this.adminService.adminShowUser(this.idItem).subscribe((data: any) => {
      this.dataSource = data.data;
      this.model = {
        // avatar: data.data.avatar,
        lastname: data.data.lastname,
        firstname: data.data.firstname,
        phone: data.data.phone,
        username: data.data.username,
        email: data.data.email,
        address: data.data.address,
      };
      console.log(this.model);
      this.baseUrl = baseUrl;
    });
  }
  createAccount() {
    this.adminService.adminCreateUser(this.model).subscribe((data: any) => {
      console.log(data);
    });
  }
  cancle() {
    this._location.back();
  }
}
