
import { NgModule }      from '@angular/core';
import { CommonModule }  from '@angular/common';

// mahasiswa lazy module
import { DashboardMahasiswaModule } from './dashboard-mahasiswa/dashboard.module';
import { EkskulModule } from './ekskul/ekskul.module'

import { MahasiswaRoutingModule } from './mahasiswa.routing';

@NgModule({
  imports: [CommonModule, MahasiswaRoutingModule, DashboardMahasiswaModule, EkskulModule ],
  declarations: []
})
export class MahasiswaModule {
}