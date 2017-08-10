import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
//import { FullLayoutComponent } from '../layouts/full-layout.component';


const routes: Routes = [
  // //fakultas
  // {
  //   path: 'fakultas',
  //   component: FullLayoutComponent,
  //   canActivate: [],
  //   children: [
  //     { path: '', 
  //       redirectTo: 'dashboard', 
  //       pathMatch: 'full' 
  //     },
  //     {
  //       path: 'dashboard',
  //       loadChildren: './dashboard-fakultas/dashboard.module#DashboardModule'
  //     },
  //     {
  //       path: 'verifikasiprestasi',
  //       loadChildren: './verifikasi-fakultas/verifikasi.module#VerifikasiModule'
  //     },      
  //   ]
  // },    
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FakultasRoutingModule { }
