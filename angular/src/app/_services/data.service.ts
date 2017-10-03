import { ToastrModule, ToastrService } from 'toastr-ng2';
import { AuthHttp, JwtHelper, tokenNotExpired } from 'angular2-jwt';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';

@Injectable()

export class DataService {
  public dir = 'http://localhost:8000'
  // API mahasiswa
  public url_tambah_ekskul = this.dir+'/mahasiswa/addekskul'; 
  public url_get_sub_kategori = this.dir+'/mahasiswa/getsubkategori';
  public url_get_kategori = this.dir+'/mahasiswa/getkategori';  
  public url_get_tingkat = this.dir+'/mahasiswa/gettingkat';
  public url_get_all_Ekskul = this.dir+'/mahasiswa/getallekskul';
  public url_get_ekskul_byId = this.dir+'/mahasiswa/getekskul';
  public url_upload = this.dir+'/mahasiswa/upload';
  public url_delete = this.dir+'/mahasiswa/deleteekskul';
  public url_update = this.dir+'/mahasiswa/updateekskul';  
  public url_submit_ekskul = this.dir+'/mahasiswa/submitekskul';
  public url_update_profil = this.dir+'/mahasiswa/updateprofil';      
  

  // API departemen
  public url_get_all_presma = this.dir+'/departemen/getallpresma';
  public url_get_detil_presma = this.dir+'/departemen/detilprestasi';
  public url_verif_ekskul = this.dir+'/departemen/verifikasiekskul';  
  // api fakultas departemen
  public url_get_all_mahasiswa = this.dir+'/departemen/getallmahasiswa';  
  public url_get_mutu = this.dir+'/departemen/getmutu';    
  public url_get_mahasiswa = this.dir+'/departemen/getmahasiswa';  
  public url_download_ipe = this.dir+'/departemen/downloadipe';
  public url_get_all_departemen = this.dir+'/departemen/getalldepartemen';  
  public url_post_pencarian = this.dir+'/departemen/postpencarian';    
  public url_get_all_detail_ipe_mahasiswa = this.dir+'/departemen/getalldetailipemahasiswa';    
  
  

  // API admin
    // user
  public url_get_all_user = this.dir+'/admin/getalluser';  
  public url_add_user = this.dir+'/admin/adduser';    
  public url_delete_user = this.dir+'/admin/deleteuser';
  public url_update_user = this.dir+'/admin/updateuser';  
    // get all
  public url_get_all_sub_kategori = this.dir+'/admin/getallsubkategori';  
  public url_get_all_kategori = this.dir+'/admin/getallkategori';
  public url_get_all_skor = this.dir+'/admin/getallskor'; 
  public url_get_all_mutu = this.dir+'/admin/getallmutu';    
    // kategori   
  public url_add_kategori = this.dir+'/admin/addkategori';
  public url_delete_kategori = this.dir+'/admin/deletekategori';   
    // sub kategori
  public url_add_sub_kategori = this.dir+'/admin/addsubkategori';   
  public url_delete_sub_kategori = this.dir+'/admin/deletesubkategori';    
    // skor
  public url_add_skor = this.dir+'/admin/addskor';
  public url_delete_skor = this.dir+'/admin/deleteskor';
  public url_update_skor = this.dir+'/admin/updateskor';
  public url_get_skor = this.dir+'/admin/getskor';  
    // mutu
  public url_add_mutu = this.dir+'/admin/addmutu';
  public url_delete_mutu = this.dir+'/admin/deletemutu';
  public url_update_mutu = this.dir+'/admin/updatemutu';

  /*API Summary*/
  /*Mahasiswa*/

  public url_summary_mahasiswa = this.dir + '/summary/mahasiswasummary'
  public url_summary_departement = this.dir + '/summary/departementsummary'
  public url_summary_listdepartement = this.dir + '/summary/departementdata'



  public token;
  public nama_user;

  //departemen
  public id_departemen;
  
  //mahasiswa
  public id_mahasiswa;
  public nama_mahasiswa;
  public nim;
  public email_mahasiswa;

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
    else if(this.role == 'mahasiswa'){
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
        this.nama_mahasiswa = this.decode.nama_mahasiswa
        this.nim = this.decode.nim_mahasiswa;  
        this.email_mahasiswa = this.decode.email_user;      
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