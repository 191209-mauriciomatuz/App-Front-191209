import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
//aca integramos los nuevo urls que se generan en module
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { UserComponent } from './user/user.component';


//en esta constante es el que ejecuta la aplicacion, el que
//se enviara para poder verlo en el buscador, eso entendi
const routes: Routes = [
  {
    path: 'Login',
    component: LoginComponent
  },
  {
    path: 'Usuario',
    component: UserComponent
   
  },
  {
    path: 'Dashboard',
    component: DashboardComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
