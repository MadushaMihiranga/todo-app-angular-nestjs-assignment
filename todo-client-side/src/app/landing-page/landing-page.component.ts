import { Component, OnInit } from '@angular/core';
import {MatDialog} from "@angular/material/dialog";
import {TodoFormDialogComponent} from "./todo-form-dialog/todo-form-dialog.component";
import {Router} from "@angular/router";
import {Store} from "@ngrx/store";
import * as todoAction from '../../app/app_state/actions';
import {Category} from "../app_state/entity/category";
import {Observable} from "rxjs";
import {map, tap} from "rxjs/operators";

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css']
})
export class LandingPageComponent implements OnInit {

  //categorys$: Observable<Category[]> = this.store.select(state => state.categoryList);

  constructor(private router: Router,private store: Store<{ categoryList: Category[] }>) { }

  ngOnInit(): void {
    this.store.dispatch({ type: '[Category] Get Category' })
    this.store.dispatch({ type: '[Status] Get Status' })
  }

  redirectIfNotLoggedIn(){
    if (!localStorage.getItem('username')){
      this.router.navigate(['/todo/login']);
    }
  }


}
