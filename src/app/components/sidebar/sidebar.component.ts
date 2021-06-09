import { Component, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from 'src/app/auth-service/authentication.service';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  @Input() isHidden = false
  public navbarMenus = [
    {path: "/dashboard", display: "Dashboard"},
    {path: "/add-new-user", display: "Add Employee"}
  ]

  constructor(
    public auth: AuthenticationService,
    public router: Router,
    public dataService: DataService
  ) { }

  ngOnInit() {
  }

  logOut() {  
    localStorage.setItem('loggedOut', 'true')
    this.auth.logout()
  }

  hideSideNav() {
    if(this.isHidden) {
      this.isHidden = false
    }else {
      this.isHidden = true
    }
    // console.log(this.isHidden)
  }

}
