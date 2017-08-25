import { Component, OnInit, AfterViewInit, ViewChild } from '@angular/core';

import { Validators, FormGroup, FormBuilder } from "@angular/forms";
import { AdminService } from './../../_services/admin.service';
import { DataService } from './../../_services/data.service';
import { MahasiswaService } from './../../_services/mahasiswa.service';


import { Subject } from 'rxjs/Rx'; // dipake buat datatables
import { DataTableDirective } from 'angular-datatables';

@Component({
  selector: 'app-mutu',
  templateUrl: './mutu.component.html',
  styleUrls: ['./mutu.component.scss']
})
export class MutuComponent implements OnInit {

  form :FormGroup;  

  private list_mutu;
  private id_mutu;
  // datatables
  private dtOptions: DataTables.Settings = {};
  private dtTrigger: Subject<any> = new Subject();  
  constructor(private fb: FormBuilder, private adminService : AdminService, private data: DataService, private mahasiswaService:MahasiswaService) { }

  ngOnInit() {
    this.initForm();
    this.datatables();    
    this.getAllMutu();
  }
  initForm(){
    this.form = this.fb.group({
      nama_mutu: ['', Validators.required],
      batas_bawah: ['', Validators.required],
      batas_atas: ['', Validators.required],      
    });
  }
  datatables(){
      this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 25,
      autoWidth: true,     
      columnDefs: [
        { "orderable": false, "targets": [-1] }
      ],         
      retrieve: true,
      searching: false,
      paging:true,
      order: [1, 'asc'],
      destroy: true
    };    
  }
  getAllMutu(){
    this.adminService.getAllMutu(this.data.url_get_all_mutu, this.data.token)
    .subscribe(
      data =>{
        console.log(data)
        if(data.status){
          this.list_mutu = data.result;
          this.dtTrigger.next();
        }
        else
          this.data.showError(data.message)
      }
    )
  }
  addMutu(){
    let creds = JSON.stringify({
      nama_mutu: this.form.value.nama_mutu,
      batas_bawah: this.form.value.batas_bawah,
      batas_atas: this.form.value.batas_atas
    })

    console.log(creds)
    this.adminService.addMutu(this.data.url_add_mutu, this.data.token, creds)
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
  }
  deleteMutu(id){
    let creds = JSON.stringify({id_mutu: id})
    this.deleteConfirm()
    .then(()=>{
      this.adminService.deleteMutu(this.data.url_delete_mutu, this.data.token, creds)
      .subscribe(
        data =>{
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
  updateMutu(){
    let creds = JSON.stringify({
      nama_mutu: this.form.value.nama_mutu,
      batas_bawah: this.form.value.batas_bawah,
      batas_atas: this.form.value.batas_atas,
      id_mutu: this.id_mutu
    })
    console.log(creds)

    this.adminService.updateMutu(this.data.url_update_mutu, this.data.token, creds)
    .subscribe(
      data =>{
        if(data.status){
          this.ngOnInit();
          this.data.showSuccess(data.message)
        }
        else
          this.data.showError(data.message)
      }
    )
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
  clickRow(data){
    this.form.controls.nama_mutu.setValue(data.nama_mutu,  { onlySelf: true });
    this.form.controls.batas_bawah.setValue(data.batas_bawah,  { onlySelf: true });
    this.form.controls.batas_atas.setValue(data.batas_atas,  { onlySelf: true });
    this.id_mutu = data.id;
  }

}
