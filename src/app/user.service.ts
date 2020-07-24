import { Injectable } from '@angular/core';
//esto es para injectar la url del get user
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(protected http: HttpClient) { }
  //creamos una funcion get
  getUser(){
    return this.http.get('https://randomuser.me/api/?results=300');
  }
}
