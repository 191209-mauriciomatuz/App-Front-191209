import { Component, OnInit } from '@angular/core';
import { LoginService } from '../login.service'
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
//esto lo creo para que atrape todo lo que tiene mi url
//pero no entiendo por que vacio
  loginVector: any[] = []
  

  constructor(protected loginService: LoginService) { }
  //esta funcion ejecuta todo los recursos que este componente
  //me imagino que el import o la clase preguntar
  ngOnInit(): void {
    this.loginService.getLogin()
    //es para que retorne la url la cual esta en user.service
    //data es el succes 
    .subscribe(
      (data) =>{
        console.log(data)
        this.loginVector = data['results']
      },
      (error) =>{
        console.error(error)
      }
    )
    
    
  }

}
