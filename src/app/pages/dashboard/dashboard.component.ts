import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from 'src/app/auth-service/authentication.service';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(
    public dataService: DataService
  ) { }

  ngOnInit() {
    this.dataService.getAllData()
  }
}
