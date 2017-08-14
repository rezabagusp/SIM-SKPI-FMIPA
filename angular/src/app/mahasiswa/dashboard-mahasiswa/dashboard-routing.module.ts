import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardMahasiswaComponent } from './dashboard.component';

const routes: Routes = [
  {
    path: '',
    component: DashboardMahasiswaComponent,
    data: {
      title: 'Dashboard'
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardMahasiswaRoutingModule {}
