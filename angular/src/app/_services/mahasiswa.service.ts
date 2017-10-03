import { Injectable } from '@angular/core';
import { Http, Headers, Response, URLSearchParams} from '@angular/http';//add http module
import { Subject } from 'rxjs/Subject';
import { AuthHttp, JwtHelper, tokenNotExpired } from 'angular2-jwt';


@Injectable()
export class MahasiswaService {
	//atribut for loading bar upload
  progressObserver = new Subject<number>();
  progress$ = this.progressObserver.asObservable();
	progress: number = 0;	

  constructor(private http:Http) { }
	getEkskulById(token, link, data){
    let header= new Headers();

    header.append('Content-type', 'application/json' );
		header.append('token', token );//put token to request API

    return this.http.post(link, {id_ekskul: data},{headers:header})
        .map((response: Response) => 
	        	response.json()
        );
	}

  getSubKategori(token, link){
    let header= new Headers();

    header.append('Content-type', 'application/json' );
		header.append('token', token );//put token to request API


    return this.http.get(link, {headers:header})
        .map((response: Response) => 
	        	response.json()
        )    
  }
  
  getKategori(token, link){
    let header= new Headers();

    header.append('Content-type', 'application/json' );
		header.append('token', token );//put token to request API


    return this.http.get(link, {headers:header})
        .map((response: Response) => 
	        	response.json()
        );
  }
  getTingkat(token, link){
    let header= new Headers();

    header.append('Content-type', 'application/json' );
		header.append('token', token );//put token to request API


    return this.http.get(link, {headers:header})
        .map((response: Response) => 
	        	response.json()
        );
	}

	//get all ekskul spesifix mhs
  getAllEkskul(token, link, data){
    let header= new Headers();

    header.append('Content-type', 'application/json' );
		header.append('token', token );//put token to request API


    return this.http.get(link+'/'+data, {headers:header})
        .map((response: Response) => 
	        	response.json()
        );    
  }
	addEkskul(url: string, token, creds) {
    let header= new Headers();

    header.append('Content-type', 'application/json' );
		header.append('token', token );//put token to request API

    return this.http.post(url, creds ,{headers:header})
        .map((response: Response) => 
	        	response.json()
        );
	}
	deleteEkskul(url, token, creds){
    let header= new Headers();

    header.append('Content-type', 'application/json' );
		header.append('token', token );//put token to request API


    return this.http.post(url, creds, {headers:header})
        .map((response: Response) => 
	        	response.json()
        );    		
	}
	updateEkskul(url, token, creds){
    let header= new Headers();

    header.append('Content-type', 'application/json' );
		header.append('token', token );//put token to request API


    return this.http.post(url, creds, {headers:header})
        .map((response: Response) => 
	        	response.json()
        );    		

	}
	uploadFile(url, token, files: Array<File>, nim){
		return new Promise((resolve, reject) => {
			var formData: any = new FormData();
			var xhr = new XMLHttpRequest();
			for(var i = 0; i < files.length; i++) {
				formData.append(nim ,files[i],files[i].name);
			}

			formData.append('nim_mahasiswa', nim);
			xhr.onreadystatechange = function () {
				if (xhr.readyState == 4) {
					if (xhr.status == 200) {
						resolve(JSON.parse(xhr.response));
					} else {
						reject(xhr.response);
					}
				}
			}
			setInterval(() => {}, 500);

			xhr.upload.onprogress = (event) => {
    			this.progress = Math.round(event.loaded / event.total * 100);
    			this.progressObserver.next(this.progress);
			};

			xhr.open("POST", url, true);
			xhr.setRequestHeader('token', token);//put token to header
			xhr.send(formData);
		});
	}
	submit(url, token, creds){
    let header= new Headers();

    header.append('Content-type', 'application/json' );
		header.append('token', token );//put token to request API

    return this.http.post(url, creds ,{headers:header})
        .map((response: Response) => 
	        	response.json()
        );		
	}
	updateProfil(url, token, creds){
    let header= new Headers();

    header.append('Content-type', 'application/json' );
		header.append('token', token );//put token to request API

    return this.http.post(url, creds ,{headers:header})
        .map((response: Response) => 
	        	response.json()
        );			
	}

}
