import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-account-detail',
  templateUrl: './account-detail.component.html',
  styleUrls: ['./account-detail.component.scss'],
})
export class AccountDetailComponent implements OnInit {
  changes: any = {};
  constructor(private userService: UserService) {}

  ngOnInit(): void {
    this.getAccDetails();
  }

  getAccDetails() {
    this.userService.getProfile().subscribe((data: any) => {
      console.log(data);
      if (data) {
        this.changes = data.data;
      }
    });
  }
  saveProfile() {
    this.userService.updateProfile(this.changes).subscribe((data) => {});
  }
  savePass() {
    this.userService.updatePass(this.changes).subscribe((data) => {});
  }
}
