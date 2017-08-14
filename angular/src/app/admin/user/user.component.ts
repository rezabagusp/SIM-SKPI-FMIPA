import { Component, OnInit } from '@angular/core';
import { DataService } from './../../_services/data.service';
import { AdminService } from './../../_services/admin.service';
import { Validators, FormGroup, FormBuilder } from "@angular/forms";

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss'],
  providers: [ ]
})
export class UserComponent implements OnInit {

  private list_user=[];

  form: FormGroup;

  //ng model atribut
  private nama_user;
  private email_user;
  private password_user;
  private list_departemen = [
    {
      id:1,
      nama: 'Statistika'
    },
    {
      id:2,
      nama: 'Geofisikas dan Meteorologi'
    },
    {
      id:3,
      nama: 'Biologi'
    },
    {
      id:4,
      nama: 'Kimia'
    },
    {
      id:5,
      nama: 'Matematika'
    },    
    {
      id:6,
      nama: 'Ilmu Komputer'
    },    
    {
      id:7,
      nama: 'Fisika'
    },    
    {
      id:8,
      nama: 'Biokimia'
    },
    {
      id:9,
      nama: 'fakultas'
    },    
  ]
  private list_role = [
    {
      id:1,
      nama: 'Admin'
    },    
    {
      id:2,
      nama: 'departemen'
    }
  ]

  constructor(private data: DataService, private admin: AdminService, private fb: FormBuilder) {  console.log('data token', this.data.token)}

  ngOnInit() {
    this.initForm();
    this.getAllUser();

  }
  initForm(){
    this.form = this.fb.group({
      nama_user: ['', Validators.required],
      email_user: ['', Validators.required],
      password_user: ['', Validators.required],
      role: ['', Validators.required],
      departemen: ['', Validators.required],
    });
  }

  getAllUser(){
    this.admin.getAllUsers(this.data.url_get_all_user, this.data.token)
    .subscribe(
      data =>{
        if(data.status)
          this.list_user=data.result;
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

  cek(){
    console.log(this.form)
  }

  getSelectedRole(role:string){
    for(let x in this.list_role)
      if(this.list_role[x].nama == role)
        return this.list_role[x];
  }
  getSelectedDepartemen(id){
    for(let x in this.list_departemen)
      if(this.list_departemen[x].id == id)
        return this.list_departemen[x];
  }  
  //for edit user
  clickRow(data:any):void{
    console.log('data click:', data)
    this.form.controls.nama_user.setValue(data.nama_user,  { onlySelf: true });
    this.form.controls.email_user.setValue(data.email_user,  { onlySelf: true });
    this.form.controls.password_user.setValue(data.password_user,  { onlySelf: true });   

    this.form.controls.role.setValue(this.getSelectedRole(data.role),  { onlySelf: true });
    this.form.controls.departemen.setValue(this.getSelectedDepartemen(data.fk_departemen_id),  { onlySelf: true });        
  }

  addUser(){
    console.log('adduser')
    var creds = JSON.stringify({
                                nama_user: this.form.value.nama_user,
                                email_user: this.form.value.email_user,
                                password_user: this.form.value.password_user,
                                role: this.form.value.role.id,
                                id_departemen: this.form.value.departemen.id
                                })

    this.admin.addUser(this.data.url_add_user, this.data.token, creds)
    .subscribe((result)=>{
      if (result.status){   
        console.log(result)
        this.form.reset();
        this.ngOnInit();  
        this.data.showSuccess('Berhasil menambah user')
      }
      else
        this.data.showError('something wrong')
    })    

  }
  deleteUser(value){
    this.deleteConfirm()
    .then(()=>{
      var creds = JSON.stringify({id_user: value})
      this.admin.deleteUser(this.data.url_delete_user, this.data.token, creds)
      .subscribe(
        data =>{
          if(data.status){
            this.data.showSuccess('Berhasil menghapus user');
            this.ngOnInit();
          }
          else
            this.data.showError('something wrong')
        }
      )
    })

  }
  updateUser(){
    console.log('adduser')
    var creds = JSON.stringify({
                                nama_user: this.form.value.nama_user,
                                email_user: this.form.value.email_user,
                                password_user: this.form.value.password_user,
                                role: this.form.value.role.id,
                                id_departemen: this.form.value.departemen.id
                                })

    this.admin.addUser(this.data.url_add_user, this.data.token, creds)
    .subscribe((result)=>{
      if (result.status){   
        console.log(result)
        this.form.reset();
        this.ngOnInit();  
        this.data.showSuccess('Berhasil Update user')
      }
      else
        this.data.showError('something wrong')
    })    

  }  
}
