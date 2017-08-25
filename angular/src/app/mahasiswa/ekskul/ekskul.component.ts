import { ToastrService } from 'toastr-ng2';
import { Component, OnInit, NgZone } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import { Subject } from 'rxjs/Rx'; // dipake buat datatables

import { MahasiswaService } from './../../_services/mahasiswa.service'
import { DataService } from './../../_services/data.service';
import { DepartemenService } from './../../_services/departemen.service';

import { Validators, FormGroup, FormBuilder } from "@angular/forms";

@Component({
  selector: 'app-ekskul',
  templateUrl: './ekskul.component.html',
  styleUrls: ['./ekskul.component.scss'],
})

export class EkskulComponent implements OnInit {
  
  //modal state for formgroup atribute datepicker which is not compit by same formcontrol nam
  private state=0;

  //init form 
  private list_sub_kategori = [];
  private list_kategori = [];
  private list_tingkat = [];

  //for datatables data
  private list_ekskul = [];
  private jumlah_skor;
  private kategori;
  private status_verifikasi = 1; // to diterima; 0-uncheck, 1-diterima, 2-ditolak

  //exception
  public max_size = Math.pow(10,6);
  public uploadProgress: number = 0;  

  form: FormGroup;
  //ng model form
  private nama_kegiatan;
  private jenis_kegiatan;
  private tingkat_kegiatan;
  private kota;
  private negara;
  private tanggal_mulai;
  private tanggal_selesai;
  private filesToUpload: Array<File>;
  private bukti;
  private id_ekskul;
  private fileValid:boolean;
  private today;
  private dateValid:boolean;
  private ispropose:boolean;

  // datatables
  private dtOptions: DataTables.Settings = {};
  private dtTrigger: Subject<any> = new Subject();
  private message=''; 

  constructor(private http: Http, 
              private toastrService:ToastrService,
              private MahasiswaService:MahasiswaService,
              private data:DataService,
              private departemenservice: DepartemenService ,
              private fb: FormBuilder){
    // init loading fileupload
    this.MahasiswaService.progress$.subscribe(status => {
      this.uploadProgress = status;
    });
    this.today = new Date().toISOString().substring(0, 10);
    // get form select at the first time
    this.getSubKategori();
    this.getKategori();
    this.getTingkat();
  }

  ngOnInit() {   
    // init
    this.initForm();  
    this.dataTables();    
    this.getAllEkskul();          
  
  }

  changeState(state){
    if (this.state!=state)
      this.state=state;
    console.log('status, ', this.state)
  }
  initForm(){

    this.form = this.fb.group({
      nama_kegiatan: ['', Validators.required],
      jenis_kegiatan: ['', Validators.required],
      tingkat_kegiatan: ['', Validators.required],
      kota: ['', Validators.required],
      negara: ['', Validators.required],
      tanggal_mulai: ['', Validators.required],
      tanggal_selesai: ['', Validators.required] 
    });
  }
  resetForm(){
    this.form.controls.nama_kegiatan.setValue('',  { onlySelf: true });
    this.form.controls.jenis_kegiatan.setValue('',  { onlySelf: true });
    this.form.controls.tingkat_kegiatan.setValue('',  { onlySelf: true });    
    this.form.controls.kota.setValue('',  { onlySelf: true });
    this.form.controls.negara.setValue('',  { onlySelf: true });
    this.form.controls.tanggal_mulai.setValue(this.today,  { onlySelf: true });
    this.form.controls.tanggal_selesai.setValue(this.today,  { onlySelf: true });
    this.fileValid = false;
  }
  //api service to get option form
  getSubKategori(){
    this.MahasiswaService.getSubKategori(this.data.token, this.data.url_get_sub_kategori)
    .subscribe(
      data=> {
        if(data.status){
          this.list_sub_kategori = data.result;
        }
        else
          this.data.showError(data.message)
     }
    );
  }
  getKategori(){
    this.MahasiswaService.getKategori(this.data.token, this.data.url_get_kategori)
    .subscribe(
      data=> {
        if(data.status)
          this.list_kategori = data.result;
        else
          this.data.showError(data.message);

     }
    );    
  }
  getTingkat(){
    this.MahasiswaService.getTingkat(this.data.token, this.data.url_get_tingkat)
    .subscribe(
      data => {
        if(data.status)
          this.list_tingkat = data.result
        else
          this.data.showError(data.message);
      }
    )
  }
  getAllEkskul(){
    this.MahasiswaService.getAllEkskul(this.data.token, this.data.url_get_all_Ekskul, this.data.id_mahasiswa)
    .subscribe(
      data=> {
        if(data.status){
          this.list_ekskul = data.result;
          this.jumlah_skor=this.getCountedSkor(this.list_ekskul);
          this.getMutu();
          this.dtTrigger.next();
          console.log('all ekskul: ', this.list_ekskul)
        }
        else{
          this.data.showError(data.message);
        }
      }
    )
  }
  dataTables(){
      this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 25,
      retrieve: true,
      autoWidth:true,
      order: [9, 'desc'],
      columnDefs: [
        { "orderable": false, "targets": [-1, -2, -3] }
      ],      
    };
  } 
  getCountedSkor(ekskul){
    var total = 0
    for(let x in this.list_ekskul){
      if(this.list_ekskul[x].status_verifikasi_ekstrakurikuler == this.status_verifikasi)
        total+=this.list_ekskul[x].skor.skor
    }
    return total
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

  // file
  onChangeFile(fileinput:any){
    var sementara = <Array<File>> fileinput.target.files
    var ext = sementara[0].type;
    var size = Number(sementara[0].size);
    console.log(this.max_size)
    if(ext !== 'image/jpeg' && ext !=='image/png' ){
        swal(
          'Perhatian',
          'file harus *.jpeg/ *.png',
          'warning'
        )
    }
    else{
      this.filesToUpload = <Array<File>> fileinput.target.files;
      this.MahasiswaService.uploadFile(this.data.url_upload, this.data.token, this.filesToUpload).
      then(data =>{
        console.log(data)
        if(JSON.parse(JSON.stringify(data)).status){
          this.fileValid = true;
          this.bukti = JSON.parse(JSON.stringify(data)).nama;
        }
        else   
          this.data.showError(JSON.parse(JSON.stringify(data)).message);
      })
      console.log(this.filesToUpload)
    }
        
  }

  // for edit
  clickRow(data:any):void{
    this.form.controls.nama_kegiatan.setValue(data.nama_ekstrakurikuler,  { onlySelf: true });
    this.form.controls.jenis_kegiatan.setValue(this.getSelectedSubKategori(data.skor.sub_kategori.id),  { onlySelf: true });
    this.form.controls.tingkat_kegiatan.setValue(this.getSelectedTingkat(data.skor.tingkat.id),  { onlySelf: true });    
    this.form.controls.kota.setValue(data.kota,  { onlySelf:   true });
    this.form.controls.negara.setValue(data.negara,  { onlySelf: true });
    this.tanggal_mulai = new Date(data.tanggal_mulai)
    
    this.tanggal_selesai = new Date(data.tanggal_selesai)

    this.form.controls.tanggal_mulai.setValue(this.tanggal_mulai,  { onlySelf: true });
    this.form.controls.tanggal_selesai.setValue(this.tanggal_selesai,  { onlySelf: true });        
    this.bukti = data.bukti_ekstrakurikuler;

    this.id_ekskul = data.id;                
  }
  getSelectedTingkat(id){
    for(let x in this.list_tingkat)
      if(this.list_tingkat[x].id == id){
        return this.list_tingkat[x]
      }
  }
  getSelectedSubKategori(id){
    for(let x in this.list_sub_kategori)
      if(this.list_sub_kategori[x].id == id){
        return this.list_sub_kategori[x]
      }
  }
  
  addEkskul(){
    var creds = JSON.stringify({
                                nama_ekstrakurikuler: this.form.value.nama_kegiatan,
                                fk_sub_kategori_id:this.form.value.jenis_kegiatan.id,
                                fk_tingkat_id:this.form.value.tingkat_kegiatan.id,
                                kota: this.form.value.kota,
                                negara: this.form.value.negara,
                                tanggal_mulai: this.form.value.tanggal_mulai,
                                tanggal_selesai: this.form.value.tanggal_selesai,
                                bukti: this.bukti,
                                id_mahasiswa: this.data.id_mahasiswa
                                })

    this.MahasiswaService.addEkskul(this.data.url_tambah_ekskul, this.data.token, creds)
    .subscribe((result)=>{
      if (result.status){   
        console.log(result)
        this.form.reset();
        this.ngOnInit();
        this.dtTrigger.next();        
        this.data.showSuccess(result.message)
      }
      else
        this.data.showError(result.message)
    })
  }
  deleteEkskul(value){
    console.log(value);
    this.deleteConfirm().then(()=>{
      var creds = JSON.stringify({id: value, id_mahasiswa: this.data.id_mahasiswa})
      this.MahasiswaService.deleteEkskul(this.data.url_delete, this.data.token, creds)
      .subscribe(
        data=>{
          if(data.status){
            swal(
              'Terhapus!',
              'Ekskul berhasil dihapus.',
              'success'
            )
          // Calling the DT trigger to manually render the table
          this.ngOnInit();
          this.dtTrigger.next();
          }else{
            swal(
              'Gagal!',
              'Ekskul gagal dihapus.',
              'failed'
            )            
          }          
      })
    })
  }
  updateEkskul(){
    var creds = JSON.stringify({
                                nama_ekstrakurikuler: this.form.value.nama_kegiatan,
                                fk_sub_kategori_id:this.form.value.jenis_kegiatan.id,
                                fk_tingkat_id:this.form.value.tingkat_kegiatan.id,
                                kota: this.form.value.kota,
                                negara: this.form.value.negara,
                                tanggal_mulai: this.form.value.tanggal_mulai,
                                tanggal_selesai: this.form.value.tanggal_selesai,
                                bukti: this.bukti,
                                id: this.id_ekskul,
                                id_mahasiswa: this.data.id_mahasiswa
                                })
                                console.log('yang bakaaln dirikim', creds)
    this.MahasiswaService.updateEkskul(this.data.url_update, this.data.token, creds)
    .subscribe((result)=>{
      console.log('ersutlnyaadf', result)
      if (result.status){   
        this.ngOnInit();
        this.dtTrigger.next();
        this.data.showSuccess('Berhasil update ekskul')
      }
      else
        this.data.showError('something wrong')
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
  checkPeriode(){
    let s = new Date(this.form.value.tanggal_mulai);
    let e = new Date(this.form.value.tanggal_selesai);
    if (s <= e) {
      return true
    }else {
      return false
    }
  }

  submit(data){
    let creds = JSON.stringify({
      id_ekskul: data.id,
      status_submit: !data.status_submit
    })
    this.ispropose = true;
    console.log(creds)
    this.MahasiswaService.submit(this.data.url_submit_ekskul, this.data.token, creds)
    .subscribe(
      data =>{
        if(data.status){
          this.ispropose=false;
          this.ngOnInit();
          this.data.showSuccess(data.message);
        }
        else{
          this.ispropose=false;
          this.data.showError(data.message);
        }
      }
    )
  }
  

  cek(){
    var date = new Date('2017-08-03T00:00:00.000Z')

    console.log(date.toISOString().substring(0, 10))
    console.log('form', this.form);    
    console.log(new Date().toISOString().substring(0, 10));    
    console.log('id_mahasiwa', this.data.id_mahasiswa) 
  }


}
