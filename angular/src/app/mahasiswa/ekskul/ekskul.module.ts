import { NgModule } from '@angular/core';

import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EkskulRoutingModule } from './ekskul.routing';

import { DataTablesModule } from 'angular-datatables';
import { SelectModule } from 'ng2-select-compat';
import { Ng2AutoCompleteModule } from 'ng2-auto-complete';
import { ModalModule } from 'ngx-bootstrap/modal';
import { EkskulComponent } from './ekskul.component';
//datepicker
import { DatePickerModule } from 'angular-io-datepicker';
import { OverlayModule } from 'a4-overlay';


@NgModule({
    imports: [CommonModule, 
        FormsModule, ReactiveFormsModule, EkskulRoutingModule, DataTablesModule, SelectModule, Ng2AutoCompleteModule, OverlayModule, DatePickerModule,
        ModalModule],
    declarations: [EkskulComponent]
})

export class EkskulModule {}