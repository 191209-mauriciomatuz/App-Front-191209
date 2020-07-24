import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(protected http: HttpClient) { }
  getLogin(){
    return this.http.get('https://randomuser.me/api/?results=10');
  }
}
