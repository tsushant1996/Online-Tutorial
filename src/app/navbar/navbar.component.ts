import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent  {

  isCollapsed  = false;

  constructor(public auth: AuthService) { }

  collapsed(event: any): void {
    console.log(event);
  }
  expanded(event: any): void {
    console.log(event);
  }
  logout() {
    this.auth.logout();
  }

}
