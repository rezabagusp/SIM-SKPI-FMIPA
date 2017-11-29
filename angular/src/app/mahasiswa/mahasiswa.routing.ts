import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FullLayoutComponent } from '../layouts/full-layout.component';

import { ProfilComponent } from './profil/profil.component';
import { AuthGuard } from './../_guards/auth.guard';

const routes: Routes = [
  //mahasiswa
  {
    path: 'mahasiswa',
    component: FullLayoutComponent,
    canActivate: [],
    children: [
      { path: '', 
        redirectTo: 'dashboard', 
        pathMatch: 'full' 
      },
      {
        path: 'dashboard',
        loadChildren: './dashboard-mahasiswa/dashboard.module#DashboardMahasiswaModule'
      },
      {
        path: 'ekskul/:kondisi',
        loadChildren: './ekskul/ekskul.module#EkskulModule'
      },  
      {
        path: 'profil',
        component: ProfilComponent,
        data: {
          title: 'Profil'
        }
      },          
    ]
  },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})

export class MahasiswaRoutingModule{}