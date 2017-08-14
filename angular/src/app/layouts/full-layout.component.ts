<<<<<<< HEAD
import { Router, ActivatedRoute, NavigationEnd } from '@angular/router';
=======
import { Router } from '@angular/router';
>>>>>>> eda2ddadc7bbe6e20480eaab53f1795a8032df30
import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from './../_services/authentication.service';
import { DataService } from './../_services/data.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './full-layout.component.html',
<<<<<<< HEAD
  styleUrls: ['./full-layout.component.css'],
=======
>>>>>>> eda2ddadc7bbe6e20480eaab53f1795a8032df30
  providers:[DataService]
})

export class FullLayoutComponent implements OnInit {

  public disabled = false;
  public status: {isopen: boolean} = {isopen: false};
  //admin, or departemen
  public role:string;
  public nama_user:string;
<<<<<<< HEAD
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
=======


  //to spesified user as id
  public id;

  constructor(private auth: AuthenticationService, private router:Router, private data: DataService){
    this.role = this.data.role;
    this.nama_user = this.data.decode.nama_user
    console.log('nama_user', this.nama_user)
    // get id for check if mahasiswa then get the id mahasiswa, if fakultas or departemen dthen get the id departemen. id == null admin
    this.id = this.data.getId();
    console.log(this.role)
    console.log('idnya from fulllayout', this.id)    
>>>>>>> eda2ddadc7bbe6e20480eaab53f1795a8032df30
  }
  public toggled(open: boolean): void {
    console.log('Dropdown is now: ', open);
  }

  public toggleDropdown($event: MouseEvent): void {
    $event.preventDefault();
    $event.stopPropagation();
    this.status.isopen = !this.status.isopen;
  }

  ngOnInit(): void {}
  
  logout(){
    this.auth.logout();
    this.router.navigate(['auth']);
  }  
}
