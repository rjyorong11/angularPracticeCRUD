import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-choose',
  templateUrl: './user-choose.component.html',
  styleUrls: ['./user-choose.component.css']
})
export class UserChooseComponent implements OnInit {

  constructor(
    private router: Router
  ) { }

  ngOnInit() {
  }

  sendChosenTypeWhoLogged(userType) {
    this.router.navigate(['/login/' + userType]);
    localStorage.setItem('user-role', userType);
  }

}
