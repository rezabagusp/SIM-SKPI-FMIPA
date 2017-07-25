import { AuthHttp, JwtHelper, tokenNotExpired } from 'angular2-jwt';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';

@Injectable()

export class DataService {
    public token;
    public username;
    public status;

    //jwt
    public decode;
    public role;

    //URL SERVICE


    //define object jwt
    jwthelper:JwtHelper = new JwtHelper();

    constructor(private auth:AuthHttp){
        this.getLocalStorage();

    }

    getLocalStorage(){
        this.token = localStorage.getItem('token');
        this.decode = this.jwthelper.decodeToken(this.token);
        this.username = this.decode.username;
        this.role = this.decode.role;
    }

}