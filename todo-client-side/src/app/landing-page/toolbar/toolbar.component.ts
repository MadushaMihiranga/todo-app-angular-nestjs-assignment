import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css']
})
export class ToolbarComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
    //console.log(localStorage.getItem('username'))
  }

  getUsername(){
    return localStorage.getItem('username')
  }

  logout(){
    localStorage.removeItem('username');
    this.router.navigate(['/todo/login']);
  }



}
