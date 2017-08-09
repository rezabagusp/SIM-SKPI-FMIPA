import { NgModule } from '@angular/core';
import { ChartsModule } from 'ng2-charts/ng2-charts';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';

import { DashboardAdminComponent } from './dashboard.component';
import { DashboardAdminRoutingModule } from './dashboard-routing.module';

@NgModule({
  imports: [
    DashboardAdminRoutingModule,
    ChartsModule,
    BsDropdownModule
  ],
  declarations: [ DashboardAdminComponent ]
})
export class DashboardAdminModule { }
