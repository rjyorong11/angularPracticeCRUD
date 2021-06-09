import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent implements OnInit {
  public isHidden = false
  public logout = false

  constructor(
  ) { }

  ngOnInit() {
    let user = localStorage.getItem('currentUser')
    this.logout = (user != null)
  }

  getTheWidthResize(width) {
    if(width.target.innerWidth < 750) {
      this.isHidden = true
    }else {
      this.isHidden = false
    }
  }

}
