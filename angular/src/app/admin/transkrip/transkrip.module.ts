import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TranskripRoutingModule } from './transkrip-routing.module';
import { TranskripComponent } from './transkrip.component';

@NgModule({
  imports: [
    CommonModule,
    TranskripRoutingModule
  ],
  declarations: [TranskripComponent]
})
export class TranskripModule { }
