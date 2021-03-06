import { Component, OnInit } from '@angular/core';
import {
  FormControl,
  FormGroup,
  FormBuilder,
  Validators,
} from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { UserService } from 'src/app/services/user.service';
@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss'],
})
export class SignUpComponent implements OnInit {
  registerForm: FormGroup;
  messageError: string = '';
  constructor(
    private builder: FormBuilder,
    private userService: UserService,
    private _snackBar: MatSnackBar
  ) {}

  ngOnInit(): void {
    this.buildForm();
  }
  buildForm() {
    this.registerForm = this.builder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
    });
  }
  register() {
    this.userService.signUp(this.registerForm.value).subscribe(
      (data: any) => {
        this.messageError = '';
        this._snackBar.open(data.message, 'OK', {
          duration: 2000,
          panelClass: ['mat-toolbar', 'mat-primary'],
        });
        this.registerForm.reset();
      },
      (error) => {
        this.messageError = 'The email has already been taken.';
        console.log(this.messageError);
      }
    );
  }
}
