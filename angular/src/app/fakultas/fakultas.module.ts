import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FakultasRoutingModule } from './fakultas-routing.module';
import { DashboardModule } from './dashboard-fakultas/dashboard.module'
import { VerifikasiModule } from './verifikasi-fakultas/verifikasi.module'
@NgModule({
  imports: [
    CommonModule,
    FakultasRoutingModule,
    DashboardModule,
    VerifikasiModule
  ],
  declarations: []
})
export class FakultasModule { }
