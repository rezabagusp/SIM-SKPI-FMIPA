import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { Auth } from './auth.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { SsoComponent } from './sso/sso.component';


const routes: Routes = [
  {
    path: 'auth',
    component: Auth,
  },
  {
    path:'auth/forgotpassword',
    component: ForgotPasswordComponent,
  },
  {
    path:'auth/sso/:token',
    component: SsoComponent,
  }  
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})

export class AuthRoutingModule{}