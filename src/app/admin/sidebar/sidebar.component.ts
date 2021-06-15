import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { DialogComponent } from 'src/app/components/shared/dialog/dialog.component';
import { AdminService } from 'src/app/services/admin.service';
import { DataShareService } from 'src/app/services/dataShare.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
})
export class SidebarComponent implements OnInit {
  constructor(
    public dialog: MatDialog,
    private router: Router,
    private _snackBar: MatSnackBar,
    private adminService: AdminService,
    private dataShareService: DataShareService
  ) {}

  ngOnInit(): void {}

  logout() {
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
          localStorage.removeItem('inforAdmin');
          this.router.navigate(['admin']);
          this.dataShareService.isAuthenAdmin(false);
          this._snackBar.open('Logout successfully', 'OK', {
            duration: 2000,
          });
          this.adminService.logout().subscribe((data) => {
            console.log('success');
          });
        }
      });
  }
}
