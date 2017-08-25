

import { Component, OnInit, NgZone } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Subject } from 'rxjs/Rx'; // dipake buat datatables
import { Router, ActivatedRoute } from '@angular/router';
import { Validators, FormGroup, FormBuilder } from "@angular/forms";

import { DataService } from './../../_services/data.service';
import { DepartemenService } from './../../_services/departemen.service';


@Component({
  selector: 'app-ipe-mahasiswa',
  templateUrl: './ipe-mahasiswa.component.html',
  styleUrls: ['./ipe-mahasiswa.component.scss'],
  providers: [DataService]
})
export class IpeMahasiswaComponent implements OnInit {

  form :FormGroup;

  //data form
  private list_search=[
    {
      id: 1,
      label: 'Departemen'
    },
    {
      id: 2,
      label: 'Nama mahasiswa'
    },
    {
      id: 3,
      label: 'NIM'
    }
  ]
  private list_hasil_pencarian=[];
  private list_departemen=[];


  // ngmodel
  private nim='';
  private mahasiswa;
  private departemen;
  private search_by;
  private search_data;

  // datatables
  private dtOptions: DataTables.Settings = {};
  private dtTrigger: Subject<any> = new Subject();  

  constructor(private fb: FormBuilder, private data: DataService, private departemenService: DepartemenService ,private router:Router) { }

  ngOnInit() {
      this.dtOptions = {
        pagingType: 'full_numbers',
        pageLength: 10,
        autoWidth: true,         
        retrieve: true,
        searching: false,
        paging:true,
        order: [2, 'asc'],
        columnDefs: [
          { "orderable": false, "targets": [-1] }
        ],        
        destroy: true
      };  
      this.initForm();

    //this.getAllIpeMahasiswa();
  }
  initForm(){
    this.form = this.fb.group({
      nama_mahasiswa: ['', Validators.required],
      nim: ['', Validators.required],
      departemen: ['', Validators.required],
      search_by:['', Validators.required]
    });
    this.getAllDepartemen();
  }
  getAllDepartemen(){
    this.departemenService.getAllDepartemen(this.data.url_get_all_departemen, this.data.token)
    .subscribe(
      data =>{
        console.log(data)
        if(data.status){
          this.list_departemen = data.result;
          for(let x in this.list_departemen){
            if(this.list_departemen[x].nama_departemen==='fakultas')
                delete this.list_departemen[x];
          }
        }
        else
          this.data.showError(data.message)
      }
    )
  }

  changeSearch(data){
    this.form.controls.nama_mahasiswa.setValue('',  { onlySelf: true });
    this.form.controls.nim.setValue('',  { onlySelf: true });
    this.form.controls.departemen.setValue('',  { onlySelf: true });
    console.log(data)

  }

  setSearch(){
    if(this.form.value.search_by.id == 2){//nama
      this.search_by=this.list_search[1].label
      this.search_data=this.form.value.nama_mahasiswa
    }
    else if(this.form.value.search_by.id == 3){// nim
      this.search_by=this.list_search[2].label
      this.search_data=this.form.value.nim
    }
    else if(this.form.value.search_by.id == 1){ // departemen
      this.search_by=this.list_search[0].label
      this.search_data=this.form.value.departemen.id
    }    
  }
  
  submit(){
    this.setSearch();
    console.log('search by', this.search_by)
    console.log(this.form)
    let creds = JSON.stringify({
      search_by: this.search_by,
      search_data: this.search_data
    })
    console.log(this.search_by, this.search_data)
    this.departemenService.postPencarian(this.data.url_post_pencarian, this.data.token, creds)
    .subscribe(
      data =>{
        console.log(data)
        if(data.status){
          this.data.showSuccess(data.message)
          this.list_hasil_pencarian = data.result
          this.dtTrigger.next();
        }
        else{
          this.data.showWarning(data.message)
        }
      }
    )
  }
  
}