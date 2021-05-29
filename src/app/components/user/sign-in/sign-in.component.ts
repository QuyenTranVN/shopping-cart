import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { LoginService } from 'src/app/services/login.service';
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
    private loginService: LoginService,
    public dialogRef: MatDialogRef<UserComponent>
  ) {}

  ngOnInit(): void {}
  login() {
    console.log(this.model);
    this.loginService.login(this.model).subscribe(
      (data) => {
        localStorage.setItem('inforUser', JSON.stringify(data));
        this.messageError = '';
        this.dialogRef.close('success');
      },
      (error) => {
        this.messageError = error.error.message;
        // console.log(error.error.message);
      }
    );
  }
}
