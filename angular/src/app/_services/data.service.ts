import { ToastrModule, ToastrService } from 'toastr-ng2';
import { AuthHttp, JwtHelper, tokenNotExpired } from 'angular2-jwt';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';

@Injectable()

export class DataService {

  // API mahasiswa
  public url_tambah_ekskul = 'http://localhost:8000/mahasiswa/addekskul'; 
  public url_get_sub_kategori = 'http://localhost:8000/mahasiswa/getsubkategori';
  public url_get_kategori = 'http://localhost:8000/mahasiswa/getkategori';  
  public url_get_tingkat = 'http://localhost:8000/mahasiswa/gettingkat';
  public url_get_all_Ekskul = 'http://localhost:8000/mahasiswa/getallekskul';
  public url_get_ekskul_byId = 'http://localhost:8000/mahasiswa/getekskul';
  public url_upload = 'http://localhost:8000/mahasiswa/upload';
  public url_delete = 'http://localhost:8000/mahasiswa/deleteekskul';
  public url_update = 'http://localhost:8000/mahasiswa/updateekskul';  
  

  // API departemen
  public url_get_all_presma = 'http://localhost:8000/departemen/getallpresma';
  public url_get_detil_presma = 'http://localhost:8000/departemen/detilprestasi';
  public url_verif_ekskul = 'http://localhost:8000/departemen/verifikasiekskul';  
  // api fakultas departemen
  public url_get_all_mahasiswa = 'http://localhost:8000/departemen/getallmahasiswa';  
  public url_get_mutu = 'http://localhost:8000/departemen/getmutu';    
  public url_get_mahasiswa = 'http://localhost:8000/departemen/getmahasiswa';  
  public url_download_ipe = 'http://localhost:8000/departemen/downloadipe';
  

  // API admin
    // user
  public url_get_all_user = 'http://localhost:8000/admin/getalluser';  
  public url_add_user = 'http://localhost:8000/admin/adduser';    
  public url_delete_user = 'http://localhost:8000/admin/deleteuser';
  public url_update_user = 'http://localhost:8000/admin/updateuser';  
    // get all
  public url_get_all_sub_kategori = 'http://localhost:8000/admin/getallsubkategori';  
  public url_get_all_kategori = 'http://localhost:8000/admin/getallkategori';
  public url_get_all_skor = 'http://localhost:8000/admin/getallskor';  
    // kategori   
  public url_add_kategori = 'http://localhost:8000/admin/addkategori';
  public url_delete_kategori = 'http://localhost:8000/admin/deletekategori';   
    // sub kategori
  public url_add_sub_kategori = 'http://localhost:8000/admin/addsubkategori';   
  public url_delete_sub_kategori = 'http://localhost:8000/admin/deletesubkategori';    
    // skor
  public url_add_skor = 'http://localhost:8000/admin/addskor';
  public url_delete_skor = 'http://localhost:8000/admin/deleteskor';
  public url_update_skor = 'http://localhost:8000/admin/updateskor';
  public url_get_skor = 'http://localhost:8000/admin/getskor';  
  
      


  public token;
  public nama_user;

  //departemen
  public id_departemen;
  
  //mahasiswa
  public id_mahasiswa;

  //admin
  public id_admin
  
  //jwt
  public decode;
  public role;

  //define jwt objcet
  jwthelper:JwtHelper = new JwtHelper();

  constructor(private toastr: ToastrService){
      this.getLocalStorage();

  }
  //for condition full-layout. admin dan deprtemen sama2 satu kerjaannya, informasi dari users punya role
  getId(){
    this.role = this.decode.role;
    if(this.role == 'departemen'){
      this.id_departemen = this.decode.fk_departemen_id;
      console.log('masuk id departemen', this.id_departemen)
      return this.id_departemen
    }
    else if(this.role == 'admin'){
      this.id_admin = this.decode.fk_departemen_id
      console.log('masuk id admin', this.decode)
      return this.id_admin;      
    }
    else{  
      this.id_mahasiswa = this.decode.id;
      console.log('masuk id mahasiswa', this.id_mahasiswa)
      return this.id_mahasiswa
    }    
  }  

  getLocalStorage(){
      this.token = localStorage.getItem('token');
      this.decode = this.jwthelper.decodeToken(this.token);
      this.nama_user = this.decode.nama_user;
      this.role = this.decode.role;
      if(this.role == 'departemen')
        this.id_departemen = this.decode.fk_departemen_id;
      else if(this.role == 'admin')
        this.id_admin = this.decode.fk_departemen_id
      else if(this.role == 'mahasiswa'){
        this.id_mahasiswa = this.decode.id;
      }
  }
  showSuccess(message:string){
      this.toastr.success(message, "Success !")    
  }
  
  showWarning(message:string){
      this.toastr.warning(message, "Warning !")       
  }

  showError(message:string){
      this.toastr.error(message, "Warning !")     
  
  }
    

}