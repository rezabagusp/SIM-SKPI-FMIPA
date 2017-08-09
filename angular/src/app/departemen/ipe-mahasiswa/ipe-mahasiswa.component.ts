
import { DepartemenService } from './../../_services/departemen.service';
import { Component, OnInit, NgZone } from '@angular/core';

import { Http, Response } from '@angular/http';
import { Subject } from 'rxjs/Rx'; // dipake buat datatables
import { Router, ActivatedRoute } from '@angular/router';

import { DataService } from './../../_services/data.service';

@Component({
  selector: 'app-ipe-mahasiswa',
  templateUrl: './ipe-mahasiswa.component.html',
  styleUrls: ['./ipe-mahasiswa.component.scss'],
  providers: []
})
export class IpeMahasiswaComponent implements OnInit {

  private list_mahasiswa=[];

  // datatables
  private dtOptions: DataTables.Settings = {};
  private dtTrigger: Subject<any> = new Subject();  

  constructor(private data: DataService, private departemenService: DepartemenService ,private router:Router) { }

  ngOnInit() {
    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 10,
      retrieve: true
    };    

    this.getAllIpeMahasiswa();
  }

  getAllIpeMahasiswa(){
    this.departemenService.getAllMahasiswa(this.data.url_get_all_mahasiswa, this.data.token)
    .subscribe(
      data=>{
        console.log(data)
        if(data.status){
          this.list_mahasiswa = data.result;
          this.dtTrigger.next();
        }
        else 
          this.data.showError('erro')
      }
    )
  }
  getDetilIpeMahasiswaa(){

  }

  
}
