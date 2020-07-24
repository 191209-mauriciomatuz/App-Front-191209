import { Injectable } from '@angular/core';
//para leer el http
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class DashboardService {

  constructor(protected http: HttpClient) { }
  getDashboard(){
    return this.http.get('https://randomuser.me/api/?results=100');
  }
}
