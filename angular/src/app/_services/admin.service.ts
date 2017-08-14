import { Injectable } from '@angular/core';
import { Http, Headers, Response, URLSearchParams} from '@angular/http';//add http module
import { Subject } from 'rxjs/Subject';
import { AuthHttp, JwtHelper, tokenNotExpired } from 'angular2-jwt';


@Injectable()
export class AdminService {

  constructor(private http:Http) { }

  getAllUsers(url, token){
    let header= new Headers();

    header.append('Content-type', 'application/json' );
		header.append('token', token );//put token to request API

    return this.http.get(url ,{headers:header})
        .map((response: Response) => 
	        	response.json()
        );
  }

  addUser(url, token, creds){
    let header= new Headers();

    header.append('Content-type', 'application/json' );
		header.append('token', token );//put token to request API

    return this.http.post(url ,creds, {headers:header})
        .map((response: Response) => 
	        	response.json()
        );    

  }
  deleteUser(url, token, creds){
    let header= new Headers();

    header.append('Content-type', 'application/json' );
		header.append('token', token );//put token to request API

    return this.http.post(url ,creds, {headers:header})
        .map((response: Response) => 
	        	response.json()
        );    
  }
}
