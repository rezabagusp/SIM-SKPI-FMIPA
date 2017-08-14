import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DepartemenRoutingModule } from './departemen-routing.module';
import { DashboardModule } from './dashboard-departemen/dashboard.module';
import { VerifikasiModule } from './verifikasi-departemen/verifikasi.module';
import { IpeMahasiswaModule } from './ipe-mahasiswa/ipe-mahasiswa.module';

import { DataTablesModule } from 'angular-datatables';
import { SelectModule } from 'ng2-select-compat';
import { Ng2AutoCompleteModule } from 'ng2-auto-complete';
import { ModalModule } from 'ngx-bootstrap/modal';


@NgModule({
  imports: [
    CommonModule,
    DepartemenRoutingModule,
    DashboardModule,
    IpeMahasiswaModule,
    VerifikasiModule,
    DataTablesModule
  ],
  declarations: []
})
export class DepartemenModule { }
