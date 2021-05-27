import { Component, OnInit } from '@angular/core';
// import {
//   FormControl,
//   FormGroup,
//   FormBuilder,
//   Validators,
// } from '@angular/forms';
@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.scss'],
})
export class DialogComponent implements OnInit {
  // model: any = {};
  // registerForm: FormGroup;
  // constructor(private builder: FormBuilder) {}

  ngOnInit(): void {
    // this.buildForm();
  }
  // buildForm() {
  //   this.registerForm = this.builder.group({
  //     email: ['', [Validators.required, Validators.email]],
  //     password: ['', Validators.required],
  //   });
  // }

  // login() {
  //   console.log(this.model);
  // }
  // register() {
  //   console.log(this.registerForm.value);
  // }
}
