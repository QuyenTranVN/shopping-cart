import { Component, OnInit } from '@angular/core';
import { AdminService } from '../../services/admin.service';
import { Router } from '@angular/router';
import { DataShareService } from 'src/app/services/dataShare.service';

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.scss'],
})
export class AdminLoginComponent implements OnInit {
  model: any = {};
  messageError: string = '';
  loginSuccess: boolean = false;
  constructor(
    private dataShareService: DataShareService,
    private adminService: AdminService,
    private router: Router
  ) {
    this.checkLogin();
    this.dataShareService.authenAdmin.subscribe((res) => {
      if (res) {
        this.router.navigate(['admin', 'sidebar', 'admin-dashboard']);
      }
    });
  }

  ngOnInit(): void {}
  adminLogin() {
    this.adminService.adminLogin(this.model).subscribe(
      (data) => {
        console.log(data);
        localStorage.setItem('inforAdmin', JSON.stringify(data));
        this.router.navigate(['admin', 'sidebar', 'admin-dashboard']);
      },

      (error) => {
        // const arrayItem = Object.getOwnPropertyNames(error.error);
        // console.log(arrayItem);

        this.messageError = 'Your password or your email is invalid';
      }
    );
  }
  checkLogin() {
    if (localStorage.getItem('inforAdmin')) {
      this.dataShareService.isAuthenAdmin(true);
    } else {
      this.dataShareService.isAuthenAdmin(false);
    }
  }
}
