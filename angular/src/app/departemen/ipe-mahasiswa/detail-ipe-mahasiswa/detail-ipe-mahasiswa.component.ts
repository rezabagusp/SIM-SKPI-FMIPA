import { ToastrService } from 'toastr-ng2';
import { Component, OnInit, NgZone } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import { Subject } from 'rxjs/Rx'; // dipake buat datatables

import { Router, ActivatedRoute, Params } from '@angular/router';

import { DataService } from './../../../_services/data.service';
import { MahasiswaService } from './../../../_services/mahasiswa.service';


@Component({
  selector: 'app-detail-ipe-mahasiswa',
  templateUrl: './detail-ipe-mahasiswa.component.html',
  styleUrls: ['./detail-ipe-mahasiswa.component.scss']
})
export class DetailIpeMahasiswaComponent implements OnInit {

  private list_ekskul;  
  //for store params
  private params; // id, nama
  private id_mahasiswa;  
  private nama_mahasiswa;
  private nim;
  private jumlah_skor = 45;
  private kategori = 'Sangat Baik'
  

  // datatables
  private dtOptions: DataTables.Settings = {};
  private dtTrigger: Subject<any> = new Subject();

  constructor(private data: DataService, private MahasiswaService:MahasiswaService,private router: Router, private activatedRoute: ActivatedRoute) {
    //captured the params url
    this.activatedRoute.params.subscribe((params: Params)=>{
      this.params = params;
      this.nama_mahasiswa = params['nama']
      this.id_mahasiswa = params['id'];
      this.nim = params['nim'];
      console.log('params', params)
    })    

  }

  ngOnInit() {
    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 10,
      retrieve: true
    };
    this.getAllEkskulMahasiswa();
  }

  getAllEkskulMahasiswa(){
    this.MahasiswaService.getAllEkskul(this.data.token, this.data.url_get_all_Ekskul, this.id_mahasiswa)
    .subscribe(
      data=> {
        this.list_ekskul = data;
        this.dtTrigger.next();        
        console.log('all ekskul: ', this.list_ekskul)
      }
    )
  }

  downloadIpe(){
    console.log('download ipe')
  }
}
