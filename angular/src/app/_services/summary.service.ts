import { Injectable } from '@angular/core';
import { Http, Headers, Response, URLSearchParams} from '@angular/http';
import { AuthHttp, JwtHelper, tokenNotExpired } from 'angular2-jwt';


@Injectable()
export class SummaryService {

  constructor(private http:Http) { }

  GetSummaryMahasiswaById(token, link) {
  	let header = new Headers()
  	header.append('Content-type', 'application/json')
  	header.append('token', token)

  	return this.http.get(link, {headers: header})
  		.map((response:Response) => 
  			response.json()
  		)
  }
  GetSummaryDepartementById(token, link) {
  	let header = new Headers()
  	header.append('Content-type', 'application/json')
  	header.append('token', token)

  	return this.http.get(link, {headers: header})
  		.map((response:Response) => 
  			response.json()
  		)
  }
  GetDepartementList(token, link) {
    let header = new Headers()
    header.append('Content-type', 'application/json')
    header.append('token', token)

    return this.http.get(link, {headers:header})
      .map((response:Response) => 
        response.json()
      )
  }
}
