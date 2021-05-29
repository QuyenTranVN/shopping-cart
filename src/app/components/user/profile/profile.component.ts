import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { DataShareService } from 'src/app/services/dataShare.service';
import { ProfileService } from 'src/app/services/profile.service';
import { DialogComponent } from '../../shared/dialog/dialog.component';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
})
export class ProfileComponent implements OnInit {
  constructor(
    public dialog: MatDialog,
    private profileService: ProfileService,
    private router: Router,
    private dataShareService: DataShareService
  ) {}

  ngOnInit(): void {}
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
        // localStorage.clear();
        console.log(res);
        if (res === 'success') {
          this.profileService.logout().subscribe((data) => {
            console.log(data);
            localStorage.clear();
            this.router.navigate(['shop']);
            this.dataShareService.isAuthen(false);
          });
        }
      });
  }
}