import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
// Layouts
import { FullLayoutComponent } from './layouts/full-layout.component';



export const routes: Routes = [
  {
    path: '',
    redirectTo: 'auth',
    pathMatch: 'full',
  },
  {
    path:'admin',
    redirectTo:'admin/dashboard'
  },
  {
    path:'mahasiswa',
    redirectTo:'mahasiswa/dashboard'
  },  
  {
    path:'departemen',
    redirectTo:'departemen/dashboard'
  }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes, {useHash: true}) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
