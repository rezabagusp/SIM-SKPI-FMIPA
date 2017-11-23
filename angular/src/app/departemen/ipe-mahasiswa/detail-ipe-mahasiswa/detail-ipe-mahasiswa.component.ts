import { ToastrService } from 'toastr-ng2';
import { Component, OnInit, NgZone } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import { Subject } from 'rxjs/Rx'; // dipake buat datatables

import { Router, ActivatedRoute, Params } from '@angular/router';

import { DataService } from './../../../_services/data.service';
import { MahasiswaService } from './../../../_services/mahasiswa.service';
import { DepartemenService } from './../../../_services/departemen.service';

import { Validators, FormGroup, FormBuilder } from "@angular/forms";


@Component({
  selector: 'app-detail-ipe-mahasiswa',
  templateUrl: './detail-ipe-mahasiswa.component.html',
  styleUrls: ['./detail-ipe-mahasiswa.component.scss']
})
export class DetailIpeMahasiswaComponent implements OnInit {

  form :FormGroup;

  private download;
  private list_ekskul=[];
  //for store params
  private params; // id, nama
  private id_mahasiswa;  
  private nama_mahasiswa;
  private nim;
  
  private jumlah_skor  ;
  private kategori = '';
  private minimum_skor  ;


  // datatables
  private dtOptions: DataTables.Settings = {};
  private dtTrigger: Subject<any> = new Subject();

  constructor(private fb: FormBuilder, private data: DataService, private departemenservice: DepartemenService, private MahasiswaService:MahasiswaService,private router: Router, private activatedRoute: ActivatedRoute) {
    //captured the params url
    this.activatedRoute.params.subscribe((params: Params)=>{
      this.params = params;
      this.nama_mahasiswa = params['nama']
      this.id_mahasiswa = params['id'];
      this.nim = params['nim'];
      // console.log('params', params)
    })    

  }

  ngOnInit() {
    this.initForm();
    this.dataTables();
    this.getAllDetailIPEMahasiswa();
    this.download = false;
  }
  dataTables(){
    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 10,
      autoWidth: true,         
      retrieve: true,
      searching: false,
      paging:true,
      columnDefs: [
        { "orderable": false, "targets": [-1] }
      ],        
      destroy: true
    };  
  }
  getAllDetailIPEMahasiswa(){
    this.departemenservice.getAllDetailIPEMahasiswa(this.data.url_get_all_detail_ipe_mahasiswa, this.data.token , this.nim)
    .subscribe(
      data=> {
        // console.log(data)
        if(data.status){
          this.list_ekskul = data.result;
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
        // console.log(data)
        if(data.status)
          this.kategori = data.result;
        else
          this.data.showError(data.message)
      }
    )
  }

  initForm(){
    this.form = this.fb.group({
      tanggal_lulus: ['', Validators.required],      
    });
  }

  getCountedSkor(ekskul){
    var total = 0
    for(let x in this.list_ekskul){
      total+=this.list_ekskul[x].skor.skor
    }
    return total
  }

  // harus post jumlah skor, nim_mahasiswa, dan tanggal_lulus 
  downloadIpe(){
    if(this.form.controls.tanggal_lulus.valid){
      // console.log(this.form)
      let creds = JSON.stringify({nim: this.nim, tanggal_lulus: this.form.value.tanggal_lulus});    
      this.download = true;
      this.departemenservice.DownloadIPE(this.data.url_download_ipe, this.data.token, creds)
      .subscribe(
        data =>{
          console.log('data', data)
          if(data.status){
            this.download = false;
            window.open('assets/public/ipe/'+data.result, '_blank')              

          }
          else{
            this.download = false;
            this.data.showError(data.message);
          }
        }
      )      
    }
  }
}
