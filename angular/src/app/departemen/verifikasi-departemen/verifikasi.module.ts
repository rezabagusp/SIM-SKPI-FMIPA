import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VerifikasiRoutingModule } from './verifikasi-routing.module';
import { DataTablesModule } from 'angular-datatables';
import { SelectModule } from 'ng2-select-compat';
import { Ng2AutoCompleteModule } from 'ng2-auto-complete';
import { ModalModule } from 'ngx-bootstrap/modal';

import { VerifikasiComponent } from './verifikasi.component';
import { VerifikasiDetailComponent } from './verifikasi-detail/verifikasi-detail.component';

import { LOCALE_ID } from '@angular/core';

@NgModule({
    imports: [CommonModule, VerifikasiRoutingModule, DataTablesModule, SelectModule, Ng2AutoCompleteModule, ModalModule ],
    providers:[{ provide: LOCALE_ID, useValue: "id" }],
    declarations: [VerifikasiComponent, VerifikasiDetailComponent],

})
export class VerifikasiModule { }