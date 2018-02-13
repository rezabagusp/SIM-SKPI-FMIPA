import { Router, ActivatedRoute, NavigationEnd } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from './../_services/authentication.service';
import { DataService } from './../_services/data.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './full-layout.component.html',
  styleUrls: ['./full-layout.component.css'],
  providers:[DataService]
})

export class FullLayoutComponent implements OnInit {

  public disabled = false;
  public status: {isopen: boolean} = {isopen: false};
  
  //admin,mahasiswa departemen
  public role:string;
  public nama_user:string;

  //mahassiwwa only
  public nim:string;
  public nama_mahasiswa;

  //to spesified user as id
  public id;
  public title: Array<object>;

  constructor(
    private auth: AuthenticationService, 
    private route: ActivatedRoute,
    private router:Router, 
    private data: DataService){

      this.role = this.data.role;
      this.nama_user = this.data.decode.nama_user;
      this.nim = this.data.decode.nim_mahasiswa;
      this.nama_mahasiswa = this.data.nama_mahasiswa
      // get id for check if mahasiswa then get the id mahasiswa, if fakultas or departemen dthen get the id departemen. id == null admin
      this.id = this.data.getId();
      // get data routes
      router.events
        .filter(e => e instanceof NavigationEnd)
        .subscribe(event => {
          this.title = [];
          let currentRoute = this.route.root,
            url = '';
          do {
            const childRoutes = currentRoute.children;
            currentRoute = null;
            childRoutes.forEach(route => {
              if (route.outlet === 'primary') {
                const routeSnapshot = route.snapshot;
                this.title.push(
                  { title: route.snapshot.data }
                );
                currentRoute = route;
              }
            });
          }
          while (currentRoute);
        });
  }
  public toggled(open: boolean): void {
    console.log('Dropdown is now: ', open);
  }

  public toggleDropdown($event: MouseEvent): void {
    $event.preventDefault();
    $event.stopPropagation();
    this.status.isopen = !this.status.isopen;
  }

  ngOnInit(): void {
    this.checkUser();
  }
  
  logout(){
    this.auth.logout();
    this.router.navigate(['auth']);
  }
  checkUser(){
    if(this.data.role == 'departemen')
      this.router.navigate(['departemen/dashboard']); // if succes masuk ke halaman lain
    if(this.data.role == 'mahasiswa')
      this.router.navigate(['mahasiswa/dashboard']); // if succes masuk ke halaman lain
    if(this.data.role == 'admin')
      this.router.navigate(['admin/dashboard']); // if succes masuk ke halaman lain          
  }
  logoutSso(){
    localStorage.removeItem('token');
    window.open('https://accounts.ipb.ac.id/OAuth/logout.php?redirect_uri='+this.data.dir, '_self')
  }
}
