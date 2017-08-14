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
<<<<<<< HEAD
=======
    // children: [
    //   {
    //     path:'verifikasidetail/:id',
    //     component: VerifikasiDetailComponent      
    //   },      
    // ]    
>>>>>>> eda2ddadc7bbe6e20480eaab53f1795a8032df30
  },
  {
    path:'verifikasidetail/:id',
    component: VerifikasiDetailComponent,
    data:{
<<<<<<< HEAD
      title: 'Verifikasi Detail'
=======
      title: 'Verifikasi detail'
>>>>>>> eda2ddadc7bbe6e20480eaab53f1795a8032df30
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class VerifikasiRoutingModule { }
