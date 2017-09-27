import { Component, OnInit } from '@angular/core';

import { Validators, FormGroup, FormBuilder } from "@angular/forms";
import { AdminService } from './../../_services/admin.service';
import { DataService } from './../../_services/data.service';
import { Subject } from 'rxjs/Rx'; // dipake buat datatables

@Component({
  selector: 'app-jenis-kegiatan',
  templateUrl: './jenis-kegiatan.component.html',
  styleUrls: ['./jenis-kegiatan.component.scss']
})
export class JenisKegiatanComponent implements OnInit {

  form :FormGroup;

  private list_sub_kategori;
  private list_kategori;

  // datatables
  private dtOptions: DataTables.Settings = {};
  private dtTrigger: Subject<any> = new Subject();  

  // ng model
  private nama_kategori;

  constructor(private fb: FormBuilder, private adminService : AdminService, private data: DataService) { }

  ngOnInit() {
    this.datatables();
    this.getAllSubKategori();
    this.getAllKategori();    
    this.initForm();
  }

  datatables(){
      this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 5,
      autoWidth: true,     
      columnDefs: [
        { "orderable": false, "targets": [-1] }
      ],         
      retrieve: true,
      searching: false 
    };    
  }
  initForm(){
    this.form = this.fb.group({
      kategori: ['', Validators.required],
      sub_kategori: ['', Validators.required],
    });
    this.nama_kategori='';
  }

  getAllKategori(){
    this.adminService.getAllKategori(this.data.url_get_all_kategori, this.data.token)
    .subscribe(
      data =>{
        if(data.status){
          this.list_kategori=data.result;
          console.log(this.list_kategori);
        }
        else 
          this.data.showError(data.message)
      }
    )
  }

  getAllSubKategori(){
    this.adminService.getAllSubKategori(this.data.url_get_all_sub_kategori, this.data.token)
    .subscribe(
      data => {
        if(data.status){
          this.list_sub_kategori = data.result;
          this.dtTrigger.next();
          console.log(data.result)
        }
        else
          this.data.showError(data.message)

      }
    )
  }

  //sub kategori
  addJeniskegiatan(){
    console.log(this.form)
    let creds = JSON.stringify({nama_sub_kategori: this.form.value.sub_kategori, id_kategori: this.form.value.kategori.id});

    this.adminService.addSubKategori(this.data.url_add_sub_kategori, this.data.token, creds)
    .subscribe(
      data=>{
        if(data.status){
          this.data.showSuccess(data.message)
          this.ngOnInit();
        }
        else
          this.data.showError(data.message)
      }
    )

  }
  deleteSubKategori(id){
    let creds = JSON.stringify({id_sub_kategori: id})
    this.deleteConfirm()
    .then(()=>{
      this.adminService.deleteSubKategori(this.data.url_delete_sub_kategori, this.data.token, creds)
      .subscribe( 
        data =>{
          console.log('balikannya', data)
          if(data.status){
            this.ngOnInit();
            this.data.showSuccess(data.message);         
          }
          else{
            console.log('masuk elswe')
            this.data.showError(data.messsage);
          }
        }
      )
    })
  }
  

  //kategori 
  addKategori(){
    let creds = JSON.stringify({nama_kategori: this.nama_kategori})
    console.log(creds)
    this.adminService.addKategori(this.data.url_add_kategori, this.data.token, creds)
    .subscribe(
      data =>{
        if(data.status){
          this.data.showSuccess(data.message)
          this.ngOnInit();
        }
        else
          this.data.showError(data.message)
      }
    )
  }
  deleteKategori(id){
    let creds = JSON.stringify({id_kategori:id});
    this.deleteConfirm()
    .then(()=>{
      this.adminService.deleteKategori(this.data.url_delete_kategori, this.data.token, creds)
      .subscribe(
        data=>{
          if(data.status){
            this.ngOnInit();
            this.data.showSuccess(data.message)            
          }
          else
            this.data.showError(data.message)
        }
      )
    })
  }


  deleteConfirm(){
    return swal({
        title: 'apakah anda yakin ?',
        text: "data tidak dapat dikembalikan",
        type: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Ya, hapus!'
      })  
  }
}
