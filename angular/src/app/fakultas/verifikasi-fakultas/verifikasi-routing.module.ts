import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { VerifikasiComponent } from './verifikasi.component';

const routes: Routes = [
  {
    path: '',
    component: VerifikasiComponent,
    data: {
        title: 'Verifikasi prestasi'
    },
  }  
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class VerifikasiRoutingModule { }
