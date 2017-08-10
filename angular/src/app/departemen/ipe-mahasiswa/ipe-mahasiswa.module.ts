import { IpeMahasiswaComponent } from './ipe-mahasiswa.component';
import { NgModule } from '@angular/core';
import { ChartsModule } from 'ng2-charts/ng2-charts';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { IpeMahasiswaRoutingModule } from './ipe-mahasiswa-routing.module';

import { CommonModule } from '@angular/common';

import { DataTablesModule } from 'angular-datatables';
import { SelectModule } from 'ng2-select-compat';
import { Ng2AutoCompleteModule } from 'ng2-auto-complete';
import { ModalModule } from 'ngx-bootstrap/modal';  
import { DetailIpeMahasiswaComponent } from './detail-ipe-mahasiswa/detail-ipe-mahasiswa.component';


@NgModule({
  imports: [
    CommonModule,
    IpeMahasiswaRoutingModule,
    ChartsModule,
    BsDropdownModule,
    DataTablesModule, SelectModule
  ],
  declarations: [ IpeMahasiswaComponent, DetailIpeMahasiswaComponent]
})
export class IpeMahasiswaModule { }
