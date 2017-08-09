import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TranskripComponent } from './transkrip.component';

const routes: Routes = [
  {
    path: '',
    component: TranskripComponent,
    data: {
        title: 'Transkrip Kegiatan'
    },
  } 
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TranskripRoutingModule { }
