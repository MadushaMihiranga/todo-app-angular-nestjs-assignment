import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import * as storage from '../../app_state/state/storage';
import {Store} from "@ngrx/store";
import {takeUntil} from "rxjs/operators";
import * as fromRoot from '../../app_state';
import {User} from "../../app_state/entity/user";
import {Subject} from "rxjs";
import {logout} from "../../app_state/actions";


@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css']
})
export class ToolbarComponent implements OnInit {

  user?: any;
  destroy$: Subject<boolean> = new Subject<boolean>();

  constructor(private router: Router,private readonly store: Store) {
    this.store.select(fromRoot.getLoggedInUser).pipe(
      takeUntil(this.destroy$)
    ).subscribe(data => this.user = data.user);
  }

  ngOnInit(): void {
    //console.log(localStorage.getItem('username'))
  }

  /*getUsername(){
    return storage.getItem('user').user.username
  }*/

  logout(){
    this.store.dispatch(logout(undefined))
    //storage.deleteItemByKey('user')
    this.router.navigate(['/todo/login']);
  }



}
