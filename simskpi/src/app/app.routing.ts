import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

//Layouts
import { FullLayoutComponent } from './layouts/full-layout.component';
<<<<<<< HEAD:angular/src/app/app.routing.ts


export const routes: Routes = [
  {
    path: '',
    redirectTo: 'auth',
    pathMatch: 'full',
=======
import { EkstrakurikulerComponent } from './ekstrakurikuler/ekstrakurikuler.component';
import { SkpiComponent } from './skpi/skpi.component';
import { LoginComponent } from './login/login.component';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'dashboard',
    pathMatch: 'full'
>>>>>>> 69f6805568475729dd0dda642c21e8a13149bba8:simskpi/src/app/app.routing.ts
  },
  {
    path:'admin',
    redirectTo:'admin/dashboard'
  },
  {
<<<<<<< HEAD:angular/src/app/app.routing.ts
    path:'mahasiswa',
    redirectTo:'mahasiswa/dashboard'
  },  
  {
    path:'departemen',
    redirectTo:'departemen/dashboard'
  },
  {
    path:'fakultas',
    redirectTo:'fakultas/dashboard'
  },  
=======
    path: '',
    component: FullLayoutComponent,
    data: {
      title: 'Home'
    },
    children: [
      {
        path: 'dashboard',
        loadChildren: './dashboard/dashboard.module#DashboardModule'
      },
      {
        path: 'ekstrakurikuler',
        component: EkstrakurikulerComponent
      },
      {
        path: 'skpi',
        component: SkpiComponent
      }
    ]
  }
>>>>>>> 69f6805568475729dd0dda642c21e8a13149bba8:simskpi/src/app/app.routing.ts
];

@NgModule({
  imports: [ RouterModule.forRoot(routes, {useHash: true}) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
