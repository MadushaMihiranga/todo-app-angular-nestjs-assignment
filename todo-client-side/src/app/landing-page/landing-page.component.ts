import { Component, OnInit } from '@angular/core';
import {MatDialog} from "@angular/material/dialog";
import {TodoFormDialogComponent} from "./todo-form-dialog/todo-form-dialog.component";
import {Router} from "@angular/router";

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css']
})
export class LandingPageComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
    this.redirectIfNotLoggedIn();
  }

  redirectIfNotLoggedIn(){
    if (!localStorage.getItem('username')){
      this.router.navigate(['/todo/login']);
    }
  }


}
