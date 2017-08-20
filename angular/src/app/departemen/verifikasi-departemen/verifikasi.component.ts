import { DataService } from './../../_services/data.service';
import { DepartemenService } from './../../_services/departemen.service';
import { Component, OnInit, NgZone } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Subject } from 'rxjs/Rx'; // dipake buat datatables

@Component({
  selector: 'app-verifikasi',
  templateUrl: './verifikasi.component.html',
  styleUrls: ['./verifikasi.component.scss'],
  providers:[]
})
export class VerifikasiComponent implements OnInit {


  private list_presma=[]
  // datatables
  private dtOptions: DataTables.Settings = {};
  private dtTrigger: Subject<any> = new Subject();

  constructor(private http: Http, private data: DataService, private DepartemenService:DepartemenService) {}

  ngOnInit() {   
      this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 10,
      retrieve: true,
      order: [6, 'desc']
    };

    this.getAllPresma();
  }

  getAllPresma(){
    this.DepartemenService.getAllPresma(this.data.url_get_all_presma, this.data.token, this.data.id_departemen)
    .subscribe(
      data =>{
        console.log(data)
        if(data.status){
          this.list_presma = data.result;
          this.dtTrigger.next();
        }
        else 
          this.data.showError(data.message)

      }
    )
  }
}