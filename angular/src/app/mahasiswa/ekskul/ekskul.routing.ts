import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { EkskulComponent } from './ekskul.component';

const routes: Routes = [
  {
    path: '',
    component: EkskulComponent,
    data: {
        title: 'Ekstrakurikuler'
    },
  }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})

export class EkskulRoutingModule{}