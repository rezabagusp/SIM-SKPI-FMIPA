
import { ToastrService } from 'toastr-ng2';
import { Component, OnInit, HostBinding } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Http, Headers } from '@angular/http';
// jwt helper
import { AuthHttp, JwtHelper, tokenNotExpired } from 'angular2-jwt';

import 'rxjs/add/observable/of';
import 'rxjs/Rx';

// inject Service
import { AuthenticationService } from '../_services/authentication.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss'],
  providers: []
  })

export class Auth implements OnInit {
  returnUrl: string;
  decode;
  token;

  // atribut2 auth ngmodel
  private nama_user;
  private password_user;

  //define jwt objcet
  jwthelper:JwtHelper = new JwtHelper();  


  constructor(private route: ActivatedRoute,
              private router: Router,
              private http: Http,
              private authenticationService: AuthenticationService,
              private toastrService: ToastrService,
              ) { }

  ngOnInit() {
    // get return url from route parameters or default to '/'
    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
    console.log(this.returnUrl);
    console.log(this.route)
  }

  login() {
    // this.router.navigate(['/admin'])
    const header = new Headers();
    header.append('Content-type', 'application/json' );

    this.authenticationService.login(this.nama_user, this.password_user)
    .subscribe(
      result => {
        if (result) {
          this.toastrService.success("yeay kamu berhasil masuk", "Success !")
          this.checkstatus();
        }else {
          swal(
            'Failed',
            'Invalid Username or Password',
            'info'
          )
        }
     }
    );
  }

  checkstatus(){
    this.token = localStorage.getItem('token');
    this.decode = this.jwthelper.decodeToken(this.token);
    console.log()
    if(this.decode.role == 'departemen')
      this.router.navigate(['departemen/dashboard']); // if succes masuk ke halaman lain
    else if(this.decode.role == 'admin')
      this.router.navigate(['admin/dashboard']); // if succes masuk ke halaman lain      
    else  //mahasiswa
      this.router.navigate(['mahasiswa/dashboard']); // if succes masuk ke halaman lain      
  }

}
