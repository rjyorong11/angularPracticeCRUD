import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-view-bus-details',
  templateUrl: './view-bus-details.component.html',
  styleUrls: ['./view-bus-details.component.css']
})
export class ViewBusDetailsComponent implements OnInit {
  public getUserType = '';

  constructor() { }

  ngOnInit() {
    this.getUserType = localStorage.getItem('user-role');
  }

}
