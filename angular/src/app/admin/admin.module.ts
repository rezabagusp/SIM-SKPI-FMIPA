import { NgModule }      from '@angular/core';
import { CommonModule }  from '@angular/common';
// admin
import { DashboardAdminModule } from './dashboard-admin/dashboard.module'
import { TranskripModule } from './transkrip/transkrip.module'

import { AdminRoutingModule } from './admin.routing';

@NgModule({
  imports: [CommonModule, AdminRoutingModule, DashboardAdminModule, TranskripModule],
  declarations: []
})
export class AdminModule {

}