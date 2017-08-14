<<<<<<< HEAD
=======

>>>>>>> eda2ddadc7bbe6e20480eaab53f1795a8032df30
import { ToastrService } from 'toastr-ng2';
import { Component, OnInit, HostBinding } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Http, Headers } from '@angular/http';
// jwt helper
import { AuthHttp, JwtHelper, tokenNotExpired } from 'angular2-jwt';
<<<<<<< HEAD
import 'rxjs/add/observable/of';
import 'rxjs/Rx';
// inject Service
import { AuthenticationService } from '../_services/authentication.service';
// slim loading bar
import { SlimLoadingBarService } from 'ng2-slim-loading-bar';

declare var $: JQueryStatic;
=======

import 'rxjs/add/observable/of';
import 'rxjs/Rx';

// inject Service
import { AuthenticationService } from '../_services/authentication.service';
>>>>>>> eda2ddadc7bbe6e20480eaab53f1795a8032df30

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss'],
  providers: []
  })

export class Auth implements OnInit {
  returnUrl: string;
  decode;
  token;
<<<<<<< HEAD
  
=======

>>>>>>> eda2ddadc7bbe6e20480eaab53f1795a8032df30
  // atribut2 auth ngmodel
  private nama_user;
  private password_user;

  //define jwt objcet
  jwthelper:JwtHelper = new JwtHelper();  


  constructor(private route: ActivatedRoute,
              private router: Router,
              private http: Http,
              private authenticationService: AuthenticationService,
              private toastrService: ToastrService,
<<<<<<< HEAD
              private slimLoadingBarService: SlimLoadingBarService
=======
>>>>>>> eda2ddadc7bbe6e20480eaab53f1795a8032df30
              ) { }

  ngOnInit() {
    // get return url from route parameters or default to '/'
    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
    console.log(this.returnUrl);
    console.log(this.route)
<<<<<<< HEAD
    this.loginJquery();
=======
>>>>>>> eda2ddadc7bbe6e20480eaab53f1795a8032df30
  }

  login() {
    // this.router.navigate(['/admin'])
    const header = new Headers();
    header.append('Content-type', 'application/json' );

    this.authenticationService.login(this.nama_user, this.password_user)
    .subscribe(
      result => {
<<<<<<< HEAD
        this.slimLoadingBarService.start(() => {
          console.log('Loading complete');
        });
        if (result) {
          this.slimLoadingBarService.complete();
          console.log(result);
          this.toastrService.success("yeay kamu berhasil masuk", "Success !")
          this.checkstatus();
        }else {
          this.slimLoadingBarService.complete();
=======
        if (result) {
          this.toastrService.success("yeay kamu berhasil masuk", "Success !")
          this.checkstatus();
        }else {
>>>>>>> eda2ddadc7bbe6e20480eaab53f1795a8032df30
          swal(
            'Failed',
            'Invalid Username or Password',
            'info'
          )
        }
     }
    );
  }

  checkstatus(){
    this.token = localStorage.getItem('token');
    this.decode = this.jwthelper.decodeToken(this.token);
    console.log()
    if(this.decode.role == 'departemen')
      this.router.navigate(['departemen/dashboard']); // if succes masuk ke halaman lain
    else if(this.decode.role == 'admin')
      this.router.navigate(['admin/dashboard']); // if succes masuk ke halaman lain      
    else  //mahasiswa
      this.router.navigate(['mahasiswa/dashboard']); // if succes masuk ke halaman lain      
  }

<<<<<<< HEAD
  loginJquery() {
    $('input').blur(function() {
      var $this = $(this);
      if ($this.val())
        $this.addClass('used');
      else
        $this.removeClass('used');
    });
    var $ripples = $('.ripples');
    $ripples.on('click.Ripples', function(e) {
      var $this = $(this);
      var $offset = $this.parent().offset();
      var $circle = $this.find('.ripplesCircle');
      var x = e.pageX - $offset.left;
      var y = e.pageY - $offset.top;
      $circle.css({
        top: y + 'px',
        left: x + 'px'
      });
      $this.addClass('is-active');
    });
    $ripples.on('animationend webkitAnimationEnd mozAnimationEnd oanimationend MSAnimationEnd', function(e) {
      $(this).removeClass('is-active');
    });
  }
=======
>>>>>>> eda2ddadc7bbe6e20480eaab53f1795a8032df30
}
