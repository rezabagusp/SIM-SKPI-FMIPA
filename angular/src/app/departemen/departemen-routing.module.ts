import { VerifikasiDetailComponent } from './verifikasi-departemen/verifikasi-detail/verifikasi-detail.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FullLayoutComponent } from '../layouts/full-layout.component';
import { IpeMahasiswaComponent } from './ipe-mahasiswa/ipe-mahasiswa.component';


const routes: Routes = [
  //departemen
  {
    path: 'departemen',
    component: FullLayoutComponent,
    canActivate: [],
    data: {
      title:'departemen'
    },
    children: [
      { path: '', 
        redirectTo: 'dashboard', 
        pathMatch: 'full' 
      },
      {
        path: 'dashboard',
        data: {
          title:'departemen'
        },
        loadChildren: './dashboard-departemen/dashboard.module#DashboardModule'
      },
      {
        path: 'verifikasiprestasi',
        loadChildren: './verifikasi-departemen/verifikasi.module#VerifikasiModule'
      },
      {
        path: 'ipemahasiswa',
        loadChildren: './ipe-mahasiswa/ipe-mahasiswa.module#IpeMahasiswaModule'
      },
    ]
  },  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DepartemenRoutingModule { }
