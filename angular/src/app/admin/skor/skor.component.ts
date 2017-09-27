import { Component, OnInit, AfterViewInit, ViewChild } from '@angular/core';

import { Validators, FormGroup, FormBuilder } from "@angular/forms";
import { AdminService } from './../../_services/admin.service';
import { DataService } from './../../_services/data.service';
import { MahasiswaService } from './../../_services/mahasiswa.service';


import { Subject } from 'rxjs/Rx'; // dipake buat datatables
import { DataTableDirective } from 'angular-datatables';

@Component({
  selector: 'app-skor',
  templateUrl: './skor.component.html',
  styleUrls: ['./skor.component.scss']
})
export class SkorComponent implements OnInit {
  @ViewChild(DataTableDirective) 
  dtElement: DataTableDirective;
  form :FormGroup;

  private list_skor;
  private list_sub_kategori;
  private list_tingkat;

  private combination_valid:boolean=false;


  // datatables
  private dtOptions: DataTables.Settings = {};
  private dtTrigger: Subject<any> = new Subject();  

  constructor(private fb: FormBuilder, private adminService : AdminService, private data: DataService, private mahasiswaService:MahasiswaService) {  
        this.initForm();
   }

  ngOnInit() {
    this.datatables();
    this.getAllSkor();
    this.resetForm();

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
  initForm(){
    this.form = this.fb.group({
      tingkat: ['', Validators.required],
      sub_kategori: ['', Validators.required],
      skor: ['', Validators.required],      
    });
    this.getAllSubKategori();
    this.getTingkat();
  }
  resetForm(){
    this.form.reset();
    this.combination_valid=false;
  }
  getAllSkor(){
    this.adminService.getAllSkor(this.data.url_get_all_skor, this.data.token)
    .subscribe(
      data =>{
        console.log(data)
        if(data.status){
          this.list_skor = data.result;
          this.dtTrigger.next();
        }
        else 
          this.data.showError(data.message)
      }
    )
  }
  getAllSubKategori(){
    this.adminService.getAllSubKategori(this.data.url_get_all_sub_kategori, this.data.token)
    .subscribe(
      data =>{
        if(data.status){
          this.list_sub_kategori = data.result;
        }
        else
          this.data.showError(data.message)
      }
    )
  }
  getTingkat(){

    this.mahasiswaService.getTingkat(this.data.token, this.data.url_get_tingkat)
    .subscribe(
      data =>{

        if(data.status){
          this.list_tingkat = data.result;

        }
        else
          this.data.showError(data.message)
      }
    )
  }
  onChange(){
    if(this.form.controls.tingkat.valid && this.form.controls.sub_kategori.valid){
      console.log('valid buat chek')
      this.checkCombinationSkor();
    }
  }
  checkCombinationSkor(){
    let creds = JSON.stringify({id_tingkat: this.form.value.tingkat.id, id_sub_kategori: this.form.value.sub_kategori.id})    
    this.adminService.checkCombinationSkor(this.data.url_get_skor, this.data.token, creds)
    .subscribe(
      data =>{
        console.log(data)
        if(data.status){
          this.combination_valid = true;
          this.dtTrigger.next();
        }
        else{       
          this.resetForm();
          this.data.showWarning(data.message)
          console.log(this.form)
        }
      }
    )    
  }
  clickRow(data){
    this.form.controls.skor.setValue(data.skor,  { onlySelf: true });    
    this.form.controls.tingkat.setValue(data.tingkat,  { onlySelf: true });
    this.form.controls.sub_kategori.setValue(data.sub_kategori,  { onlySelf: true });            
    console.log(this.form)
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
  addSkor(){
    console.log('submit', this.form)
    let creds= JSON.stringify({
      id_tingkat: this.form.value.tingkat.id,
      id_sub_kategori: this.form.value.sub_kategori.id,
      skor: this.form.value.skor
    })
    
    this.adminService.addSkor(this.data.url_add_skor, this.data.token, creds)
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
  deleteRowSkor(id){
    let creds = JSON.stringify({id_skor: id})
    this.deleteConfirm()
    .then(()=>{
      this.adminService.deleteSkor(this.data.url_delete_skor, this.data.token, creds)
      .subscribe(
        data =>{
          if(data.status){
            this.data.showSuccess(data.message);
            this.ngOnInit();
          }
          else
            this.data.showError(data.message);
        }
      )
    }).catch((err)=>{
      this.data.showError('ERROR')
    })
  }
  updateSkor(){
    let creds = JSON.stringify({
      id_sub_kategori: this.form.value.sub_kategori.id,
      id_tingkat: this.form.value.tingkat.id,
      skor: this.form.value.skor
    })

    this.adminService.updateSkor(this.data.url_update_skor, this.data.token, creds)
    .subscribe(
      data =>{
        if(data.status){
          this.data.showSuccess(data.message)
          this.ngOnInit();
        }
        else this.data.showError(data.message)
      }
    )
  }
  
}
