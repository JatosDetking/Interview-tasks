import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-menu-bar',
  templateUrl: './menu-bar.component.html',
  styleUrls: ['./menu-bar.component.css']
})
export class MenuBarComponent {

  constructor(
    private router:Router,
    public userService:UserService
  ) {}
  goToLoginPage(){
    this.router.navigate(['login'])
  }
  goToRegisterPage(){
    this.router.navigate(['register'])
  } 
  goToServicesPage(){
    this.router.navigate(['services'])
  }
  goToEventsPage(){
    this.router.navigate(['events'])
  } 
  logOut(){
    this.userService.logout();
  }
}
