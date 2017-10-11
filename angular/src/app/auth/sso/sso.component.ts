import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { AuthenticationService } from '../../_services/authentication.service';


@Component({
  selector: 'app-sso',
  templateUrl: './sso.component.html',
  styleUrls: ['./sso.component.scss']
})
export class SsoComponent implements OnInit {
  public token;
  
  constructor(private router: Router, private activatedRoute: ActivatedRoute, private auth: AuthenticationService) { 
    this.activatedRoute.params.subscribe((params: Params)=>{
      this.token = params['token'];
      console.log('params', params);
    })       
  }

  ngOnInit() {
    let status = this.auth.sso(this.token);
    if(status){
      this.router.navigate(['mahasiswa/dashboard']); // if succes masuk ke halaman lain
    }
    else 
      this.router.navigate(['auth']);
  }

}
