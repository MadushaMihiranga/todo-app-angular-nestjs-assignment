import {Component, OnDestroy, OnInit} from '@angular/core';
import {FormControl, Validators, FormGroup} from '@angular/forms';
import {Router} from "@angular/router"
import {Store} from "@ngrx/store";
import * as fromRoot from '../../app/app_state';
import {takeUntil} from "rxjs/operators";
import {Subject} from "rxjs";
import { User } from "../app_state/entity/user";
import * as userActions from '../../app/app_state/actions';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit, OnDestroy {

  passwordHidden = true;
  credentialsValid: boolean = true;
  destroy$: Subject<boolean> = new Subject<boolean>();
  model: User = new User();

  todoLoginForm = new FormGroup({
    username: new FormControl(null, [Validators.required, Validators.email]),
    password: new FormControl(null, [Validators.required, Validators.minLength(8)]),
  })

  constructor(private router: Router,private readonly store: Store) {
    this.store.select(fromRoot.userLogin).pipe(
      takeUntil(this.destroy$)
    ).subscribe(data => {
      console.log('data::::', data);
      if (data.isLoadingSuccess && data.result.status) {
        this.router.navigate(['/todo/landingpage']);
      }
    });
  }

  ngOnInit(): void {}

  onSubmit() {
    this.store.dispatch(
      userActions.login(
        {user: {
            username: this.todoLoginForm.value.username,
            password: this.todoLoginForm.value.password}
        }
      )
    );
/*    if (this.todoLoginForm.valid){
      this.credentialsValid = true;
      localStorage.setItem("username", this.todoLoginForm.value.username);
      this.router.navigate(['/todo/landingpage']);
    }else {
      this.credentialsValid = false;
    }*/
  }

  ngOnDestroy(){
    this.destroy$.next(true);
    this.destroy$.unsubscribe();
  }
}
