import { Component, OnInit, NgZone, NO_ERRORS_SCHEMA } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Router, ActivatedRoute } from '@angular/router';
import { Validators, FormGroup, FormBuilder } from "@angular/forms";

import { DataService } from './../../_services/data.service';
import { MahasiswaService } from './../../_services/mahasiswa.service';


@Component({
  selector: 'app-profil',
  templateUrl: './profil.component.html',
  styleUrls: ['./profil.component.scss']
})
export class ProfilComponent implements OnInit {

  form :FormGroup;
  private submitted = false;


  constructor(private fb: FormBuilder, private data: DataService ,private router:Router, private mahasiswaservice: MahasiswaService) { }

  ngOnInit() {
    this.initForm();
  }
 
  initForm(){
    this.form = this.fb.group({
      nama: [this.data.nama_mahasiswa, Validators.required],
      nim: [this.data.nim, Validators.required],            
      email: [this.data.email_mahasiswa, Validators.required],
    });
  }

  submit(){
    this.submitted = true;
    var creds = JSON.stringify({email: this.form.value.email, id_mahasiswa: this.data.id_mahasiswa});

    this.mahasiswaservice.updateProfil(this.data.url_update_profil, this.data.token, creds)
    .subscribe(
      data =>{
        if(data.status){
          this.submitted = false;
          this.data.email_mahasiswa = this.form.value.email;
          this.data.showSuccess(data.message)
        }
        else{
          this.submitted = false;          
          this.data.showError(data.message)
        }
      }
    )
  }

}
