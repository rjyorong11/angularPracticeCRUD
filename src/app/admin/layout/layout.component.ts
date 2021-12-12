import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent implements OnInit {
  public isHidden = false
  public logout = false
  public displayHeader = '';

  constructor(
  ) { }

  ngOnInit() {
    let user = localStorage.getItem('currentUser')
    this.logout = (user != null);
    this.getTheWidthResize({target: { innerWidth: window.innerWidth}});
  }

  getTheWidthResize(width) {
    if(width.target.innerWidth < 600) {
      this.isHidden = true
    }else {
      this.isHidden = false
    }
  }

  getDataDisplayToHeader(data) {
    this.displayHeader = data;
  }

}
