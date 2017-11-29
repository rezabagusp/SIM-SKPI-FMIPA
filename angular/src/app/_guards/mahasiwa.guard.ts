import { Injectable } from '@angular/core';
import { Router, CanActivate, CanActivateChild, ActivatedRoute } from '@angular/router';
// toaster
import { ToastrService } from 'toastr-ng2';
import { AuthHttp, JwtHelper, tokenNotExpired } from 'angular2-jwt';

@Injectable()
export class MahasiwaGuard implements CanActivate {
  // test jwt for encode status
  jwtHelper: JwtHelper = new JwtHelper();
  token;
  roles;
  constructor(private router: Router,
              private toastrService: ToastrService,
              private route: ActivatedRoute ) {
    this.token = localStorage.getItem('token');
    const user = this.jwtHelper.decodeToken(this.token)
    this.roles = user.role;
    
  }  

  canActivate() {
    if ( localStorage.getItem('token') && !this.jwtHelper.isTokenExpired(localStorage.getItem('token')) && this.roles == 'mahasiswa' ) {
      return true;
    }

    this.toastrService.warning('You have no permission');
    // not logged in so redirect to login page
    this.router.navigate(['/login']);
    
    console.log('mahasiswa guard');
    return false;
  }

}
