import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VerifikasiRoutingModule } from './verifikasi-routing.module';
import { VerifikasiComponent } from './verifikasi.component';

import { DataTablesModule } from 'angular-datatables';
import { SelectModule } from 'ng2-select-compat';
import { Ng2AutoCompleteModule } from 'ng2-auto-complete';
import { ModalModule } from 'ngx-bootstrap/modal';

@NgModule({
  imports: [
    CommonModule,
    VerifikasiRoutingModule,
    DataTablesModule,
    SelectModule,
    Ng2AutoCompleteModule,
    ModalModule
  ],
  declarations: [VerifikasiComponent]
})
export class VerifikasiModule { }
