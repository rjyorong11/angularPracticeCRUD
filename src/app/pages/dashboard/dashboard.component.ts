import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  // public concatedData = []
  // public addedEmployeerHandler = []

  constructor(
    // private store: Store<{ count: number }>,
    // public dataService: DataService,
    // public usersService: UserService
    private router: Router
  ) { }

  ngOnInit() {
    // var addedEmployeeHandler = []
    // this.store.select('count').subscribe((x: any) => {
    //   console.log(x)
    //   x.forEach(element => {
    //     const addressAdded = Object.assign({address: {city: element.employee.city, street: element.employee.street}}, {name: element.employee.firstname + ' ' + element.employee.lastname}, {database: false}, element.employee)
    //     addedEmployeeHandler.push(addressAdded)
    //   });      
    //   this.addedEmployeerHandler = addedEmployeeHandler
    //   this.concatedData = this.dataService.dataHandler.concat(addedEmployeeHandler)
    // })
  }

  // getEmitedIndex(user) {
  //   this.addedEmployeerHandler.splice(this.addedEmployeerHandler.indexOf(user), 1)
  //   this.store.dispatch(deleteEmployee({index: this.addedEmployeerHandler.indexOf(user)}))
  //   console.log(user)
  // }

  viewBusDetails(busId) {
    this.router.navigate(['/bus-details/' + busId]);
  }
}
