import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { VerifikasiComponent } from './verifikasi.component';
import { VerifikasiDetailComponent } from './verifikasi-detail/verifikasi-detail.component';


const routes: Routes = [
  {
    path: '',
    component: VerifikasiComponent,
    data:{
      title: 'Verifikasi Prestasi'
    },
  },
  {
    path:'verifikasidetail/:id',
    component: VerifikasiDetailComponent,
    data:{
      title: 'Verifikasi Detail'
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class VerifikasiRoutingModule { }
