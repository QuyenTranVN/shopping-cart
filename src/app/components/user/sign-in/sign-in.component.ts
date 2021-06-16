import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { DataShareService } from 'src/app/services/dataShare.service';
import { UserService } from 'src/app/services/user.service';
import { UserComponent } from '../user.component';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss'],
})
export class SignInComponent implements OnInit {
  model: any = {};
  messageError: string = '';
  constructor(
    public dialogRef: MatDialogRef<UserComponent>,
    private userService: UserService
  ) {}

  ngOnInit(): void {}
  login() {
    this.userService.login(this.model).subscribe(
      (data) => {
        localStorage.setItem('inforUser', JSON.stringify(data));
        this.messageError = '';
        this.dialogRef.close('success');
      },
      (error) => {
        this.messageError = 'Your password or username is invalid';
      }
    );
  }
}
