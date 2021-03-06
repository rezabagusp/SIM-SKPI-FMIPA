import { Injectable } from '@angular/core';
import { Http, Headers, Response, URLSearchParams} from '@angular/http';//add http module
import { Subject } from 'rxjs/Subject';
import { AuthHttp, JwtHelper, tokenNotExpired } from 'angular2-jwt';

@Injectable()
export class DepartemenService {

  constructor(private http:Http) { }
  //all presma
  getAllPresma(url, token, id_departemen ){
    let header= new Headers();

    header.append('Content-type', 'application/json' );
		header.append('token', token );//put token to request API


    return this.http.get(url+'/'+id_departemen ,{headers:header})
        .map((response: Response) => 
	        	response.json()
        );        
  }
  
  //detil presma
  getDetilPresmaById(url, token, id_presma ){
    let header= new Headers();

    header.append('Content-type', 'application/json' );
		header.append('token', token );//put token to request API


    return this.http.get(url+'/'+id_presma ,{headers:header})
        .map((response: Response) => 
	        	response.json()
        );        
  }      
  // verif presma
  verifikasiEkskul(url, token, status, id_ekskul, keterangan ){
    let header= new Headers();

    header.append('Content-type', 'application/json' );
		header.append('token', token );//put token to request API


    return this.http.post(url, {id_ekskul: id_ekskul, status_verifikasi: status, keterangan: keterangan}, {headers:header})
        .map((response: Response) => 
	        	response.json()
        );           
  }

  // for fakutlas only
  getAllMahasiswa(url, token){
    let header= new Headers();

    header.append('Content-type', 'application/json' );
		header.append('token', token );//put token to request API


    return this.http.get(url, {headers:header})
        .map((response: Response) => 
	        	response.json()
        );         
  }
  getMahasiswa(url, token, nim){
    let header= new Headers();

    header.append('Content-type', 'application/json' );
		header.append('token', token );//put token to request API


    return this.http.get(url+'/'+nim, {headers:header})
        .map((response: Response) => 
	        	response.json()
        );        
  }
  getMutu(url, token, jumlah_skor){
    let header= new Headers();

    header.append('Content-type', 'application/json' );
		header.append('token', token );//put token to request API


    return this.http.get(url+'/'+jumlah_skor, {headers:header})
        .map((response: Response) => 
	        	response.json()
        );         
  }
  DownloadIPE(url, token, creds){
    let header= new Headers();

    header.append('Content-type', 'application/json' );
		header.append('token', token );//put token to request API


    return this.http.post(url, creds, {headers:header})
        .map((response: Response) => 
	        	response.json()
        );         
  }
  getAllDepartemen(url, token){
    let header= new Headers();

    header.append('Content-type', 'application/json' );
		header.append('token', token );//put token to request API


    return this.http.get(url, {headers:header})
        .map((response: Response) => 
	        	response.json()
        );         
  } 
  getAllDetailIPEMahasiswa(url, token, nim){
    let header= new Headers();

    header.append('Content-type', 'application/json' );
		header.append('token', token );//put token to request API


    return this.http.get(url+'/'+nim, {headers:header})
        .map((response: Response) => 
	        	response.json()
        );       
  }
  postPencarian(url, token, creds){
    let header= new Headers();

    header.append('Content-type', 'application/json' );
		header.append('token', token );//put token to request API


    return this.http.post(url, creds, {headers:header})
        .map((response: Response) => 
	        	response.json()
        );         
  }
  
}
