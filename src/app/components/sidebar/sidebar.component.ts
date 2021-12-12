import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthenticationService } from 'src/app/auth-service/authentication.service';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  @Input() isHidden = false;
  @Output() displayCurrentRoute = new EventEmitter();
  public navbarMenus = [
    {path: "/dashboard", display: "Dashboard"},
    {path: "/add-new-user", display: "User Profile"},
    {path: "/feedback", display: "Feedback"}
  ]

  constructor(
    public auth: AuthenticationService,
    public router: Router,
    public activatedRoute: ActivatedRoute,
    public dataService: DataService
  ) { }

  ngOnInit() {
    this.changingHeader('Dashboard');
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

  changingHeader(data) {
    this.displayCurrentRoute.emit(data);
  }

}
