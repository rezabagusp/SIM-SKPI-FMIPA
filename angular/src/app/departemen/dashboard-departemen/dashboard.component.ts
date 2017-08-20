import { DataService } from './../../_services/data.service';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  templateUrl: 'dashboard.component.html',
  providers:[DataService]
})
export class DashboardComponent {
  private jumlah_pengajuan_ekskul;
  private jumlah_uncheck;
  private jumlah_ditolak;
  private jumlah_diterima;

  constructor( private data:DataService) { 
    console.log("dashboard departemen")
    console.log('id_departemen', this.data.id_departemen)
  }

  


}
