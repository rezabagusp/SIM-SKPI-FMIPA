import { ToastrService } from 'toastr-ng2';
import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { JwtHelper, tokenNotExpired } from 'angular2-jwt'


@Injectable()
export class DepartemenGuard implements CanActivate {
    public token: string;
    public decode;
    private jwtHelper: JwtHelper = new JwtHelper();
    constructor(private toast:ToastrService ) {}
    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot ) {
        this.token = localStorage.getItem('token')
        this.decode = this.jwtHelper.decodeToken(this.token);

        if (this.decode.role === 'departemen') {
            return true;
        } else {
          this.toast.warning('Silahkan login terlebih dahulu!', 'Warning!');
        }
}
}
