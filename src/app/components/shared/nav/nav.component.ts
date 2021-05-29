import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DataShareService } from 'src/app/services/dataShare.service';
import { UserComponent } from '../../user/user.component';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss'],
})
export class NavComponent implements OnInit {
  loginSuccess: boolean = false;
  constructor(
    public dialog: MatDialog,
    private dataShareService: DataShareService
  ) {}

  ngOnInit(): void {
    this.checkLogin();
    this.dataShareService.authen.subscribe((res) => {
      this.loginSuccess = res;
    });
  }

  checkLogin() {
    if (localStorage.getItem('inforUser')) {
      // this.loginSuccess = true;
      this.dataShareService.isAuthen(true);
    } else {
      this.dataShareService.isAuthen(false);
    }
  }
  openDialog() {
    this.dialog
      .open(UserComponent)
      .afterClosed()
      .subscribe((data: any) => {
        this.checkLogin();
      });
  }
}
