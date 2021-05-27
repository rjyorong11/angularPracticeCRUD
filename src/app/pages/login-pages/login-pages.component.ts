import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from 'src/app/auth-service/authentication.service';

@Component({
  selector: 'app-login-pages',
  templateUrl: './login-pages.component.html',
  styleUrls: ['./login-pages.component.css']
})
export class LoginPagesComponent implements OnInit {
  public showPassword = "password"
  public username = ''

  constructor(
    public auth: AuthenticationService,
    public router: Router
  ) { }

  ngOnInit() {
    let user = localStorage.getItem('currentUser')
    if(user != null) {
      this.router.navigate(['/dashboard'])
    }
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
