import { NgModule }      from '@angular/core';
import { CommonModule }  from '@angular/common';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DashboardAdminModule } from './dashboard-admin/dashboard.module'
import { ModalModule } from 'ngx-bootstrap/modal';
import { DataTablesModule } from 'angular-datatables';
import { AdminRoutingModule } from './admin.routing';

import { UserComponent } from './user/user.component';
import { JenisKegiatanComponent } from './jenis-kegiatan/jenis-kegiatan.component';
import { SkorComponent } from './skor/skor.component';
import { MutuComponent } from './mutu/mutu.component';


@NgModule({
  imports: [CommonModule, FormsModule, ReactiveFormsModule,  AdminRoutingModule, DashboardAdminModule, ModalModule, DataTablesModule],
  declarations: [UserComponent, JenisKegiatanComponent, SkorComponent, MutuComponent ]
})
export class AdminModule {

}