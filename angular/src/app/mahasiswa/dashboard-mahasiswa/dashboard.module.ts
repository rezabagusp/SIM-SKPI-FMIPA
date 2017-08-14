import { NgModule } from '@angular/core';
import { ChartsModule } from 'ng2-charts/ng2-charts';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';

import { DashboardMahasiswaComponent } from './dashboard.component';
import { DashboardMahasiswaRoutingModule } from './dashboard-routing.module';

@NgModule({
  imports: [
    DashboardMahasiswaRoutingModule,
    ChartsModule,
    BsDropdownModule
  ],
  declarations: [ DashboardMahasiswaComponent ]
})
export class DashboardMahasiswaModule { }
