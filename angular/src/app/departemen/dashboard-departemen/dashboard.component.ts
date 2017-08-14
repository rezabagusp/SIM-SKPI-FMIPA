import { DataService } from './../../_services/data.service';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  templateUrl: 'dashboard.component.html',
  providers:[DataService]
})
export class DashboardComponent {

  constructor( private data:DataService) { 
    console.log("dashboard departemen")
    console.log(this.data.id_departemen)
  }

}
