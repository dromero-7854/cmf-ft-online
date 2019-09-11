import { Component, OnInit } from '@angular/core';
// dependencies
import { Validators, FormBuilder, FormControl, FormGroupDirective, NgForm } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material';
// models
import { Credentials } from '../../models/core.model';
// service
import { AuthService } from '../../auth/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  matcher = new NoErrorStateMatcher();
  hide = true;
  submitted = false;
  loading = false;
  error = false;

  loginForm = this.fb.group({
    username: ['', Validators.required],
    password: ['', Validators.required],
  });

  get username() { return this.loginForm.get('username'); }
  get password() { return this.loginForm.get('password'); }

  constructor(
    private fb: FormBuilder,
    private authService: AuthService
  ) { }

  ngOnInit() { }

  onSubmit(): void {
    this.loading = true;
    this.submitted = true;
    if (this.loginForm.invalid) {
      this.loading = false;
      return;
    }
    let credentials: Credentials = new Credentials(this.loginForm.get('username').value, this.loginForm.get('password').value);
    this.authService.login(credentials).then(
      () => { },
      () => {
        this.error = true;
        this.loading = false;
      }
    );
  }

}

export class NoErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    return false;
  }
}