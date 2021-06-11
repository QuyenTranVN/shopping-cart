import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
@Component({
  selector: 'app-admin-create-user',
  templateUrl: './admin-create-user.component.html',
  styleUrls: ['./admin-create-user.component.scss'],
})
export class AdminCreateUserComponent implements OnInit {
  registerForm: FormGroup;
  messageError: string = '';
  constructor(private builder: FormBuilder) {}

  ngOnInit(): void {
    this.buildForm();
  }
  buildForm() {
    this.registerForm = this.builder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
      username: ['', Validators.required],
    });
  }
  register() {
    console.log(this.registerForm.value);
  }
}
