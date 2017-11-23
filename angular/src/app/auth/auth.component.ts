import { ToastrService } from 'toastr-ng2';
import { Component, OnInit, HostBinding } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Http, Headers } from '@angular/http';
// jwt helper
import { AuthHttp, JwtHelper, tokenNotExpired } from 'angular2-jwt';
import 'rxjs/add/observable/of';
import 'rxjs/Rx';
// inject Service
import { AuthenticationService } from '../_services/authentication.service';
// slim loading bar
import { SlimLoadingBarService } from 'ng2-slim-loading-bar';

declare var $: JQueryStatic;

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
              private slimLoadingBarService: SlimLoadingBarService
              ) { }

  ngOnInit() {
    // get return url from route parameters or default to '/'
    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
    console.log(this.returnUrl);
    console.log(this.route)
    this.loginJquery();
  }

  login() {
    // this.router.navigate(['/admin'])
    const header = new Headers();
    header.append('Content-type', 'application/json' );

    this.authenticationService.login(this.nama_user, this.password_user)
    .subscribe(
      result => {
        this.slimLoadingBarService.start(() => {
          console.log('Loading complete');
        });
        if(result) {
          this.slimLoadingBarService.complete();
          console.log(result);
          this.toastrService.success("yeay kamu berhasil masuk", "Success !")
          this.checkstatus();
        }else {
          this.slimLoadingBarService.complete();
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

  loginSSO(){
    window.open('https://accounts.ipb.ac.id/module.php/core/loginuserpass.php?AuthState=_5e6cdbd104a3b712af3798ee56a6c8a599ee37582d%3Ahttps%3A%2F%2Faccounts.ipb.ac.id%2Fsaml2%2Fidp%2FSSOService.php%3Fspentityid%3Dhttps%253A%252F%252Faccounts.ipb.ac.id%252Fmodule.php%252Fsaml%252Fsp%252Fmetadata.php%252Fdefault-sp%26cookieTime%3D150643`0063%26RelayState%3Dhttps%253A%252F%252Faccounts.ipb.ac.id%252FOAuth%252Fauthorize.php%253Fredirect_url%253Dhttps%25253A%25252F%25252Flocalhost:8000%25252Flogin%25252Fauth2%2526scope%253Dcore_applications%2526state%253D3%2528%2525230%25252F%2521%257E%2526response_type%253Dcode%2526client_id%253Dfmipa.skpi', '_self')
  }
}
