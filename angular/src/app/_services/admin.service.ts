import { Injectable } from '@angular/core';
import { Http, Headers, Response, URLSearchParams} from '@angular/http';//add http module
import { Subject } from 'rxjs/Subject';
import { AuthHttp, JwtHelper, tokenNotExpired } from 'angular2-jwt';


@Injectable()
export class AdminService {

  constructor(private http:Http) { }

  // get all  
  getAllUsers(url, token){
    let header= new Headers();

    header.append('Content-type', 'application/json' );
		header.append('token', token );//put token to request API

    return this.http.get(url ,{headers:header})
        .map((response: Response) => 
	        	response.json()
        );
  }
  getAllSubKategori(url, token){
    let header= new Headers();

    header.append('Content-type', 'application/json' );
		header.append('token', token );//put token to request API

    return this.http.get(url ,{headers:header})
        .map((response: Response) => 
	        	response.json()
        );    
  }
  getAllKategori(url, token){
    let header= new Headers();

    header.append('Content-type', 'application/json' );
		header.append('token', token );//put token to request API

    return this.http.get(url ,{headers:header})
        .map((response: Response) => 
	        	response.json()
        );    
  }
  getAllSkor(url, token){
    let header= new Headers();

    header.append('Content-type', 'application/json' );
		header.append('token', token );//put token to request API

    return this.http.get(url ,{headers:header})
        .map((response: Response) => 
	        	response.json()
        );    
  }    
  getAllMutu(url, token){
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

  // kategori
  addKategori(url, token, creds){
    let header= new Headers();

    header.append('Content-type', 'application/json' );
		header.append('token', token );//put token to request API

    return this.http.post(url ,creds, {headers:header})
        .map((response: Response) => 
	        	response.json()
        );        
  }
  deleteKategori(url, token, creds){
    let header= new Headers();

    header.append('Content-type', 'application/json' );
		header.append('token', token );//put token to request API

    return this.http.post(url ,creds, {headers:header})
        .map((response: Response) => 
	        	response.json()
        );        
  }
  updateKategori(url, token, creds){
    let header= new Headers();

    header.append('Content-type', 'application/json' );
		header.append('token', token );//put token to request API

    return this.http.post(url ,creds, {headers:header})
        .map((response: Response) => 
	        	response.json()
        );        
  }  
  // sub kategori
  addSubKategori(url, token, creds){
    let header= new Headers();

    header.append('Content-type', 'application/json' );
		header.append('token', token );//put token to request API

    return this.http.post(url ,creds, {headers:header})
        .map((response: Response) => 
	        	response.json()
        );        
  }
  deleteSubKategori(url, token, creds){
    let header= new Headers();

    header.append('Content-type', 'application/json' );
		header.append('token', token );//put token to request API

    return this.http.post(url ,creds, {headers:header})
        .map((response: Response) => 
	        	response.json()
        );        
  }
  updateSubKategori(url, token, creds){
    let header= new Headers();

    header.append('Content-type', 'application/json' );
		header.append('token', token );//put token to request API

    return this.http.post(url ,creds, {headers:header})
        .map((response: Response) => 
	        	response.json()
        );        
  }    

  // skor
  checkCombinationSkor(url, token, creds){
    let header= new Headers();

    header.append('Content-type', 'application/json' );
		header.append('token', token );//put token to request API

    return this.http.post(url, creds ,{headers:header})
        .map((response: Response) => 
	        	response.json()
        );
  }
  addSkor(url, token, creds){
    let header= new Headers();

    header.append('Content-type', 'application/json' );
		header.append('token', token );//put token to request API

    return this.http.post(url ,creds, {headers:header})
        .map((response: Response) => 
	        	response.json()
        );        
  }
  deleteSkor(url, token, creds){
    let header= new Headers();

    header.append('Content-type', 'application/json' );
		header.append('token', token );//put token to request API

    return this.http.post(url ,creds, {headers:header})
        .map((response: Response) => 
	        	response.json()
        );        
  }
  updateSkor(url, token, creds){
    let header= new Headers();

    header.append('Content-type', 'application/json' );
		header.append('token', token );//put token to request API

    return this.http.post(url ,creds, {headers:header})
        .map((response: Response) => 
	        	response.json()
        );        
  }    

  //mutu      
  addMutu(url, token, creds){
    let header= new Headers();

    header.append('Content-type', 'application/json' );
		header.append('token', token );//put token to request API

    return this.http.post(url ,creds, {headers:header})
        .map((response: Response) => 
	        	response.json()
        );        
  }
  deleteMutu(url, token, creds){
    let header= new Headers();

    header.append('Content-type', 'application/json' );
		header.append('token', token );//put token to request API

    return this.http.post(url ,creds, {headers:header})
        .map((response: Response) => 
	        	response.json()
        );        
  }
  updateMutu(url, token, creds){
    let header= new Headers();

    header.append('Content-type', 'application/json' );
		header.append('token', token );//put token to request API

    return this.http.post(url ,creds, {headers:header})
        .map((response: Response) => 
	        	response.json()
        );        
  }    
}
