import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { UserComponent } from './user.component';

import { DataTablesModule } from 'angular-datatables';
import { SelectModule } from 'ng2-select-compat';
import { Ng2AutoCompleteModule } from 'ng2-auto-complete';
import { ModalModule } from 'ngx-bootstrap/modal';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  imports: [
    CommonModule,
    UserRoutingModule,
    DataTablesModule,
    SelectModule,
    ModalModule,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [UserComponent]
})
export class UserModule { }
