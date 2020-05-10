import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';
import {UserDetail} from './user';


export class User{
  constructor(
    public status:string,
     ) {}
}
export class JwtResponse{
  constructor(
    public jwttoken:string,
     ) {}
}
@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {


  constructor(
    private httpClient:HttpClient
  ) { 
     }
     authenticate(jsonT : UserDetail) {
      return this.httpClient.post<any>('http://localhost:5002/authenticate',jsonT)
      .pipe(
       map(
         userData => {
          sessionStorage.setItem('username',jsonT.userName);
          let tokenStr= 'Bearer '+userData.token;
          sessionStorage.setItem('token', tokenStr);
          return userData;
         }
       )
      );
    }
  isUserLoggedIn() {
    let user = sessionStorage.getItem('username')
    //console.log(!(user === null))
    return !(user === null)
  }
  logOut() {
    sessionStorage.removeItem('username')
  }
}