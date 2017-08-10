import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from './../../_services/authentication.service';
import { DataService } from './../../_services/data.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './full-layout.component.html',
  providers:[DataService]
})

export class FullLayoutComponent implements OnInit {

  public disabled = false;
  public status: {isopen: boolean} = {isopen: false};
  //admin, or departemen
  public role:string;
  public nama_user:string;


  //to spesified user as id
  public id;

  constructor(private auth: AuthenticationService, private router:Router, private data: DataService){
    this.role = this.data.role;
    this.nama_user = this.data.decode.nama_user
    console.log('nama_user', this.nama_user)
    // get id for check if mahasiswa then get the id mahasiswa, if fakultas or departemen dthen get the id departemen. id == null admin
    this.id = this.data.getId();
    console.log(this.role)
    console.log('idnya from fulllayout', this.id)  
    console.log('full layout departemen')  
  }
  public toggled(open: boolean): void {
    console.log('Dropdown is now: ', open);
  }

  public toggleDropdown($event: MouseEvent): void {
    $event.preventDefault();
    $event.stopPropagation();
    this.status.isopen = !this.status.isopen;
  }

  ngOnInit(): void {}
  
  logout(){
    this.auth.logout();
    this.router.navigate(['auth']);
  }  
}
