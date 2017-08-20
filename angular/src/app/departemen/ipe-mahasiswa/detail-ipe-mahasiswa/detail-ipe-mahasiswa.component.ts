import { ToastrService } from 'toastr-ng2';
import { Component, OnInit, NgZone } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import { Subject } from 'rxjs/Rx'; // dipake buat datatables

import { Router, ActivatedRoute, Params } from '@angular/router';

import { DataService } from './../../../_services/data.service';
import { MahasiswaService } from './../../../_services/mahasiswa.service';
import { DepartemenService } from './../../../_services/departemen.service';



@Component({
  selector: 'app-detail-ipe-mahasiswa',
  templateUrl: './detail-ipe-mahasiswa.component.html',
  styleUrls: ['./detail-ipe-mahasiswa.component.scss']
})
export class DetailIpeMahasiswaComponent implements OnInit {

  private download;
  private list_ekskul=[];
  //for store params
  private params; // id, nama
  private id_mahasiswa;  
  private nama_mahasiswa;
  private nim;
  
  private jumlah_skor = 45;
  private kategori = 'Sangat Baik';
  private minimum_skor = 10;


  // datatables
  private dtOptions: DataTables.Settings = {};
  private dtTrigger: Subject<any> = new Subject();

  constructor(private data: DataService, private departemenservice: DepartemenService, private MahasiswaService:MahasiswaService,private router: Router, private activatedRoute: ActivatedRoute) {
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
    this.download = false;
  }

  getAllEkskulMahasiswa(){
    this.MahasiswaService.getAllEkskul(this.data.token, this.data.url_get_all_Ekskul, this.id_mahasiswa)
    .subscribe(
      data=> {
        console.log(data)
        if(data.status){
          // loop to filter ekskul with status ==1
          for (let x in data.result)
            if(data.result[x].status_verifikasi_ekstrakurikuler==1)
              this.list_ekskul.push(data.result[x])
          console.log('list ekskul', this.list_ekskul)
          this.dtTrigger.next();
          this.jumlah_skor = this.getCountedSkor(this.list_ekskul);
          this.getMutu();
        }
        else 
          this.data.showError(data.message)
      }
    )
  }

  getMutu(){
    this.departemenservice.getMutu(this.data.url_get_mutu, this.data.token, this.jumlah_skor)
    .subscribe(
      data => {
        console.log(data)
        if(data.status)
          this.kategori = data.result;
        else
          this.data.showError(data.message)
      }
    )
  }

  getCountedSkor(ekskul){
    var total = 0
    for(let x in this.list_ekskul){
      total+=this.list_ekskul[x].skor.skor
    }
    return total
  }

  downloadIpe(){
    this.download = true;
    this.departemenservice.DownloadIPE(this.data.url_download_ipe, this.data.token, this.id_mahasiswa)
    .subscribe(
      data =>{
        console.log('data', data)
        if(data.status){
          this.download = false;
          window.open('assets/public/ipe/'+data.result)
        }
        else
          this.data.showError(data.message);
      }
    )
  }
}
