
import { NgModule }      from '@angular/core';
import { CommonModule }  from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
// mahasiswa lazy module
import { DashboardMahasiswaModule } from './dashboard-mahasiswa/dashboard.module';
import { EkskulModule } from './ekskul/ekskul.module'

import { MahasiswaRoutingModule } from './mahasiswa.routing';
import { ProfilComponent } from './profil/profil.component';

@NgModule({
  imports: [CommonModule, MahasiswaRoutingModule, DashboardMahasiswaModule, EkskulModule, FormsModule, ReactiveFormsModule ],
  declarations: [ProfilComponent]
})
export class MahasiswaModule {
}