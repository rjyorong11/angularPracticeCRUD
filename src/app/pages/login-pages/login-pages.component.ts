import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthenticationService } from 'src/app/auth-service/authentication.service';
import { DataService } from '../../services/data.service'

@Component({
  selector: 'app-login-pages',
  templateUrl: './login-pages.component.html',
  styleUrls: ['./login-pages.component.css']
})
export class LoginPagesComponent implements OnInit {
  public showPassword = "password";
  public username = '';
  public chosenType = '';

  constructor(
    public auth: AuthenticationService,
    public router: Router,
    public activatedRoute: ActivatedRoute,
    public dataService: DataService
  ) { }

  ngOnInit() {
    let user = localStorage.getItem('currentUser')
    if(user != null) {
      this.router.navigate(['/dashboard'])
    }
    this.chosenType = this.activatedRoute.snapshot.params['type'];
    
  }

  onLogin(userCred) {
    this.auth.login(userCred.form.value)
    userCred.reset()
  }

  passwordShow() {
    if(this.showPassword == "text") {
      this.showPassword = "password"
    }else {
      this.showPassword = "text"
    }
  }

}
