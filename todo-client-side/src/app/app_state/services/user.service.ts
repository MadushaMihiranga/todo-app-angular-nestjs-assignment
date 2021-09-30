import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {catchError, map} from "rxjs/operators";
import {of} from "rxjs";
import {User} from "../entity/user";

@Injectable({
  providedIn: 'root'
})
export class UserService {
  ROOT_URL = 'http://localhost:1000';
  constructor(private http: HttpClient) { }


  login(user: User) {
   /* console.log(user.username)
    console.log(user.password)*/
    return this.http.post(this.ROOT_URL+'/users/login',user)/*.pipe(
      map((response: any) => response),
      catchError(err => {
        console.log(err);
        return of([]);
      })
    )*/
    /*const headers = new HttpHeaders({'Content-Type' : 'application/json'});
    const options = {headers};
    return this.http.post(this.loginUrl,  {user}, options).pipe(
      map((response: Response) => response),
      catchError(err => {
        console.log(err);
        return of([]);
      })
    );*/
  }
}
