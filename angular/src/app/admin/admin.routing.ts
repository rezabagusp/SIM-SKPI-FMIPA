import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FullLayoutComponent } from '../layouts/full-layout.component';

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
        path: 'transkripkegiatan',
        loadChildren: './transkrip/transkrip.module#TranskripModule'
      },
      {
        path: 'user',
        loadChildren: './user/user.module#UserModule'
      },      
                 
    ]
  },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})

export class AdminRoutingModule{}