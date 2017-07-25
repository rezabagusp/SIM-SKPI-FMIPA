import { Component, OnInit, HostBinding } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

// inject Service
import { AuthenticationService } from '../_services/authentication.service';
import 'rxjs/add/observable/of';
import { Http, Headers } from '@angular/http';
import 'rxjs/Rx';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [AuthenticationService]
  })

export class LoginComponent implements OnInit {
  returnUrl: string;
  // atribut2 login
  private nama_user;
  private password_user;

  constructor(private route: ActivatedRoute,
              private router: Router,
              private http: Http,
              private authenticationService: AuthenticationService) { }

  ngOnInit() {
    // get return url from route parameters or default to '/'
    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
    console.log('url sekarang', this.returnUrl);
  }



  login() {

    const header = new Headers();
    header.append('Content-type', 'application/json' );

    this.authenticationService.login(this.nama_user, this.password_user)
    .subscribe(
      result => {
        console.log('resultnya:', result)
        if (result) {
          swal(
            'Success',
            'Click Ok',
            'success'
          )
          this.router.navigate(['dashboard']); // if succes masuk ke halaman lain
        }else {
          swal(
            'Failed',
            'Invalid Username or Password',
            'info'
          )
        }
     }
    );
  }

  test() {
    swal(
      'Failed',
      'wrong Username or Password',
      'info'
    )
  }
}
