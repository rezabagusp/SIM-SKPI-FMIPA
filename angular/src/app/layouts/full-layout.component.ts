import { AuthenticationService } from './../_services/authentication.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './full-layout.component.html',
  providers:[AuthenticationService]
})
export class FullLayoutComponent implements OnInit {

  public disabled = false;
  public status: {isopen: boolean} = {isopen: false};

  public toggled(open: boolean): void {
    console.log('Dropdown is now: ', open);
  }
  public toggleDropdown($event: MouseEvent): void {
    $event.preventDefault();
    $event.stopPropagation();
    this.status.isopen = !this.status.isopen;
  }

  constructor(private auth: AuthenticationService, private router: Router){
  }

  ngOnInit(): void {}

  logout(){
    this.auth.logout();
    this.router.navigate(['login']);
  }

}
