import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from 'src/app/auth-service/authentication.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  public navbarMenus = [
    {path: "/dashboard", display: "Dashboard"}
  ]

  constructor(
    public auth: AuthenticationService
  ) { }

  ngOnInit() {
  }

  logOut() {  
    this.auth.logout()
  }

}
