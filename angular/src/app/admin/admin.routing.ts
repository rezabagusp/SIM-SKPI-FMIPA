import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FullLayoutComponent } from '../layouts/full-layout.component';

import { UserComponent } from './user/user.component';
import { JenisKegiatanComponent } from './jenis-kegiatan/jenis-kegiatan.component';
import { SkorComponent } from './skor/skor.component';

import { AuthGuard } from '../_guards/auth.guard';

const routes: Routes = [
  //ADMIN
  {
    path: 'admin',
    component: FullLayoutComponent,
    canActivate: [],
    children: [
      { path: '', 
        redirectTo: 'dashboard', 
        pathMatch: 'full' 
      },
      {
        path: 'dashboard',
        loadChildren: './dashboard-admin/dashboard.module#DashboardAdminModule'
      },
      {
        path: 'user',
        component: UserComponent,
        data: {
          title:'User'
        }
      },
      {
        path: 'jeniskegiatan',
        component: JenisKegiatanComponent,
        data: {
          title: 'Jenis Kegiatan'
        }
      },
      {
        path: 'skor',
        component: SkorComponent,
        data: {
          title: 'Skor'
        }
      },             
                 
    ]
  },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})

export class AdminRoutingModule{}