import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroupDirective, NgForm, Validators, FormGroup} from '@angular/forms';
import {ErrorStateMatcher} from "@angular/material/core";
import { RouterModule, Routes } from '@angular/router';
import {Router} from "@angular/router"

export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {
  passwordHidden = true;
  username!: string;
  password!: string;
  credentialsValid: boolean = true;

  newLoginForm = new FormGroup({
    username: new FormControl(null, [Validators.required, Validators.email]),
    password: new FormControl(null, [Validators.required, Validators.minLength(8)]),
  })

  matcher = new MyErrorStateMatcher();
  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  redirect() {
    this.credentialsValid = true;
    this.router.navigate(['/todo/landingpage']);
  }

  invalidCredentials() {
    this.credentialsValid = false;
  }

  onSubmit() {
    //console.log(this.newLoginForm.status)
    if (this.newLoginForm.status === "VALID"){
      localStorage.setItem("username", this.username);
      this.redirect()
    }else {
      this.invalidCredentials()
    }

  }


}
