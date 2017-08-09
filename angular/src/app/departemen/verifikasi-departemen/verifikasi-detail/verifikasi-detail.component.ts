import { DataService } from './../../../_services/data.service';
import { DepartemenService } from './../../../_services/departemen.service';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-verifikasi-detail',
  templateUrl: './verifikasi-detail.component.html',
  styleUrls: ['./verifikasi-detail.component.scss'],
  providers:[DataService, DepartemenService]
})

export class VerifikasiDetailComponent implements OnInit {

  private id_presma;
  public presma;
  // for badge condition status of verification
  public status;
  public keterangan;

  //flag for checkbox
  public checked=false;

  constructor(private router: Router, private activatedRoute: ActivatedRoute, private data: DataService, private DepartemenService: DepartemenService ) {
    console.log('masukd detil component');
    
    //captured the params url
    this.activatedRoute.params.subscribe((params: Params)=>{
      this.id_presma = params['id'];
      console.log('idnya:',this.id_presma);
    })
  }

  ngOnInit() {
    this.getPresmaById();
  }
  getPresmaById(){
    this.DepartemenService.getDetilPresmaById(this.data.url_get_detil_presma, this.data.token, this.id_presma)
    .subscribe(
      data =>{
        this.presma = data;
        this.status = this.presma.status_verifikasi_ekstrakurikuler;
        console.log('atanya', this.presma);
      }
    )
  }

  verifikasiPresma(status_baru){
    this.DepartemenService.verifikasiEkskul(this.data.url_verif_ekskul, this.data.token, status_baru , this.id_presma, this.keterangan)
    .subscribe(
      data =>{
        console.log(data)
        if(data.status){
          swal(
            'Berhasil!',
            data.message,
            'success'
          )
          this.ngOnInit();
          this.router.navigate(['departemen/verifikasiprestasi']); // if succes masuk ke halaman lain                
        }
        else {
          swal(
            'Gagal!',
            data.message,
            'error'
          )             
        }
      }
    )    
  }
  //unverif ditolak
  verifCommentConfirm(){
    swal({
      title: 'Masukan keterangan',
      input: 'text',
      showCancelButton: true,
      confirmButtonText: 'Submit',
      showLoaderOnConfirm: true,
      preConfirm: function (text) {
        return new Promise(function (resolve, reject) {
          setTimeout(function() {
            resolve();
          }, 1000)
        })
      },
      allowOutsideClick: false
    }).then((hasil) => {
        this.keterangan = hasil
        // change the status to ga lolos
        var status_baru = 2
        console.log('keterangan', hasil)
        this.verifikasiPresma(status_baru);
    })
  }

  //verif diterima
  verifConfirm(){
    swal({
        title: 'Apakah anda yakin ?',
        text: "informasi prestasi sesuai dengan bukti",
        type: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Ya!'
    }).then(()=>{
      var status_baru=1;
      this.keterangan='';
      this.verifikasiPresma(status_baru);
    })
  }
  checkbox(){
    if(this.checked == false)
      this.checked = true
    else this.checked = false
  }
  cek(){
    console.log(this.keterangan);
  }
}
