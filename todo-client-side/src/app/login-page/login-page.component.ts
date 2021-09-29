import { Component, OnInit } from '@angular/core';
import {FormControl, Validators, FormGroup} from '@angular/forms';
import {Router} from "@angular/router"

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {
  passwordHidden = true;
  credentialsValid: boolean = true;

  todoLoginForm = new FormGroup({
    username: new FormControl(null, [Validators.required, Validators.email]),
    password: new FormControl(null, [Validators.required, Validators.minLength(8)]),
  })

  constructor(private router: Router) { }

  ngOnInit(): void {}

  onSubmit() {
    if (this.todoLoginForm.valid){
      this.credentialsValid = true;
      localStorage.setItem("username", this.todoLoginForm.value.username);
      this.router.navigate(['/todo/landingpage']);
    }else {
      this.credentialsValid = false;
    }
  }

}
