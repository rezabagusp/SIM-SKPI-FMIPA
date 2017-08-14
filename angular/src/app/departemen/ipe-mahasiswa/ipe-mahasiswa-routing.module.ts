
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IpeMahasiswaComponent } from './ipe-mahasiswa.component';
import { DetailIpeMahasiswaComponent } from './detail-ipe-mahasiswa/detail-ipe-mahasiswa.component';

const routes: Routes = [
  {
    path: '',
    component: IpeMahasiswaComponent,
    data: {
      title: 'IPE Mahasiswa'
    }
  },
  {
    path: 'detailipe/:id/:nama/:nim',
    component: DetailIpeMahasiswaComponent,
    data: {
      title: 'Detail IPE Mahasiswa'
    }
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class IpeMahasiswaRoutingModule {}
