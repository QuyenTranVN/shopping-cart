import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { baseUrl } from '../../../config/api';
import { DataShareService } from 'src/app/services/dataShare.service';
import { UserService } from 'src/app/services/user.service';
import { DialogComponent } from '../../shared/dialog/dialog.component';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
})
export class ProfileComponent implements OnInit {
  inforUser: any = {};
  baseUrl = baseUrl;
  constructor(
    public dialog: MatDialog,
    private router: Router,
    private dataShareService: DataShareService,
    private userService: UserService,
    private _snackBar: MatSnackBar
  ) {}

  ngOnInit(): void {
    this.inforUser = JSON.parse(localStorage.getItem('inforUser'));
    console.log(this.inforUser);
  }
  openLogout() {
    this.dialog
      .open(DialogComponent, {
        data: {
          message: 'Do you want to logout?',
          confirmButton: 'Yes',
          cancelButton: 'No',
        },
      })
      .afterClosed()
      .subscribe((res) => {
        if (res === 'success') {
          localStorage.clear();
          this.router.navigate(['shop']);
          this.dataShareService.isAuthen(false);
          this.dataShareService.addToCart({});
          this._snackBar.open('Logout successfully', 'OK', {
            duration: 2000,
          });
          this.userService.logout().subscribe((data) => {
            console.log('logout success');
          });
        }
      });
  }
}
