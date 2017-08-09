import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FullLayoutComponent } from '../layouts/full-layout.component';


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
        path: 'ekskul',
        loadChildren: './ekskul/ekskul.module#EkskulModule'
      },    
    ]
  },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})

export class MahasiswaRoutingModule{}