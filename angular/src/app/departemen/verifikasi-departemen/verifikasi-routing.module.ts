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
    // children: [
    //   {
    //     path:'verifikasidetail/:id',
    //     component: VerifikasiDetailComponent      
    //   },      
    // ]    
  },
  {
    path:'verifikasidetail/:id',
    component: VerifikasiDetailComponent,
    data:{
      title: 'Verifikasi detail'
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class VerifikasiRoutingModule { }
