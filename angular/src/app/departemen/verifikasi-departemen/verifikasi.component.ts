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

  constructor(private http: Http, private data: DataService, private DepartemenService:DepartemenService) {
    console.log('verifikasi departemen') 
    console.log('id_departemen', this.data.id_departemen)
    console.log('token', this.data.token)
   }

  ngOnInit() {   
      this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 10,
      retrieve: true
    };

    this.getAllPresma();
  }

  getAllPresma(){
    this.DepartemenService.getAllPresma(this.data.url_get_all_presma, this.data.token, this.data.id_departemen)
    .subscribe(
      data =>{
        if(data.status){
          console.log(data)
          this.list_presma = data.result;
          this.dtTrigger.next();
          console.log('masuk promise ', this.list_presma)
        }
      }
    )
  }
}
