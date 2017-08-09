import { ToastrService } from 'toastr-ng2';
import { Component, OnInit, NgZone } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import { Subject } from 'rxjs/Rx'; // dipake buat datatables

import { MahasiswaService } from './../../_services/mahasiswa.service'
import { DataService } from './../../_services/data.service';

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

  // datatables
  private dtOptions: DataTables.Settings = {};
  private dtTrigger: Subject<any> = new Subject();
  private message=''; 

  constructor(private http: Http, 
              private toastrService:ToastrService,
              private MahasiswaService:MahasiswaService,
              private data:DataService,
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
  }
  //api service to get option form
  getSubKategori(){
    this.MahasiswaService.getSubKategori(this.data.token, this.data.url_get_sub_kategori)
    .subscribe(
      data=> {
        this.list_sub_kategori = data;
     }
    );
  }
  getKategori(){
    this.MahasiswaService.getKategori(this.data.token, this.data.url_get_kategori)
    .subscribe(
      data=> {
        this.list_kategori = data;
        console.log('list kategori: ', this.list_kategori);
     }
    );    
  }
  getTingkat(){
    this.MahasiswaService.getTingkat(this.data.token, this.data.url_get_tingkat)
    .subscribe(
      data => {
        this.list_tingkat = data
        console.log('list_tingkat: ', this.list_tingkat)
      }
    )
  }
  getAllEkskul(){
    this.MahasiswaService.getAllEkskul(this.data.token, this.data.url_get_all_Ekskul, this.data.id_mahasiswa)
    .subscribe(
      data=> {
        this.list_ekskul = data;
        this.dtTrigger.next();        
        console.log('all ekskul: ', this.list_ekskul)
      }
    )
  }
  dataTables(){
      this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 10,
      retrieve: true
    };
  } 

  onChangeFile(fileinput:any){
    var sementara = <Array<File>> fileinput.target.files
    var ext = sementara[0].type;
    var size = Number(sementara[0].size);
    console.log(this.max_size)
    if(ext !== 'image/jpeg' && ext !=='application/pdf' ){
        swal(
          'Perhatian',
          'file harus *.jpeg/ *.pdf/ *.pdf',
          'warning'
        )
    }
    else if(size > this.max_size)
        swal(
          'Perhatian',
          'ukuran file max 1 MB',
          'warning'
        )      
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
          this.data.showError('error upload');
      })
      console.log(this.filesToUpload)
    }
        
  }
  // downloadPDF(){
  //   console.log('masuk')
  //   var headers = new Headers();
  //   headers.append('Content-Type', 'application/x-www-form-urlencoded');

  //   this.http.post('http://localhost:8000/mahasiswa/asset', null,  {
  //       headers: headers
  //       })
  //       .retry(3)
  //       // .map( (res:any) => res.blob() ) // errors out
  //       .subscribe(
  //         (dataReceived:any) => {
  //           var blob = new Blob([dataReceived._body], {type: 'application/pdf'});
  //           var fileURL = URL.createObjectURL(dataReceived);
  //           window.open(fileURL);            
  //         },
  //         (err:any) => console.log('error'),
  //         () => console.log('Complete')
  //       );
  // }
  // downloadPDF().subscribe(
  //       (res) => {
  //       var fileURL = URL.createObjectURL(res);
  //       window.open(fileURL);
  //       }
  //   );

  // for edit
  clickRow(data:any):void{
    console.log('data click:', data)
    this.form.controls.nama_kegiatan.setValue(data.nama_ekstrakurikuler,  { onlySelf: true });
    this.form.controls.jenis_kegiatan.setValue(this.getSelectedSubKategori(data.sub_kategori.id),  { onlySelf: true });
    this.form.controls.tingkat_kegiatan.setValue(this.getSelectedTingkat(data.tingkat.id),  { onlySelf: true });    
    this.form.controls.kota.setValue(data.kota,  { onlySelf: true });
    this.form.controls.negara.setValue(data.negara,  { onlySelf: true });
    this.tanggal_mulai = new Date(data.tanggal_mulai)
    console.log(this.tanggal_mulai.toISOString().substring(0, 10))
    
    this.tanggal_selesai = new Date(data.tanggal_selesai)
    console.log(this.tanggal_selesai.toISOString().substring(0, 10))

    this.form.controls.tanggal_mulai.setValue(this.tanggal_mulai,  { onlySelf: true });
    this.form.controls.tanggal_selesai.setValue(this.tanggal_selesai,  { onlySelf: true });        
    this.bukti = data.bukti;
    this.id_ekskul = data.id;                
  }

  getSelectedTingkat(id){
    for(let x in this.list_tingkat)
      if(this.list_tingkat[x].id == id){
        console.log(this.list_tingkat[x])
        return this.list_tingkat[x]
      }
  }
  getSelectedSubKategori(id){
    for(let x in this.list_sub_kategori)
      if(this.list_sub_kategori[x].id == id){
        console.log(this.list_sub_kategori[x])
        return this.list_sub_kategori[x]
      }
  }    
  
  submit(){
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
        this.data.showSuccess('Berhasil menambah ekskul')
      }
      else
        this.data.showError('something wrong')
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

  cek(){
    var date = new Date('2017-08-03T00:00:00.000Z')

    console.log(date.toISOString().substring(0, 10))
    console.log('form', this.form);    
    console.log(new Date().toISOString().substring(0, 10));    
    console.log('id_mahasiwa', this.data.id_mahasiswa) 
  }


}
