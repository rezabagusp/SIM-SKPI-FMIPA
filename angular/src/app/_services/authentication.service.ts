import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http'; // add http module
import { Observable } from 'rxjs/Observable';


@Injectable()
export class AuthenticationService {

  public url_login = 'http://localhost:8000/login/masuk';

  public token: string;

  constructor(private http: Http) {
  }

  login(nama_user: string, password_user: string) {
    let send = JSON.stringify({nama_user: nama_user, password_user:password_user });//bikin data inputan lu jadi string json
    console.log("yang akan dikirim vias service: ", send);    
    let header= new Headers();
    header.append('Content-type', 'application/json' );

    return this.http.post(this.url_login, send, {headers:header})
      .map((response: Response) => {
        //login succesful if there is token response
        let token = response.json() && response.json().token;
        console.log('ini token balikan', response.json().token);
        if(token){
          this.token = token;
          localStorage.setItem('token', token);
          localStorage.setItem('nama_user', nama_user);
          return true
        }
        else{
          return false;
        }
      });
  }

  logout() {
      // remove user from local storage to log user out
      this.token = null;
      localStorage.removeItem('token');
      localStorage.removeItem('nama_user');
  }

}
