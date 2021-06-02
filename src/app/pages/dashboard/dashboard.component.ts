import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2'
import { DataService } from 'src/app/services/data.service';
import { UserService } from 'src/assets/partial-database.database';
import { increment, decrement, reset, employeeAddedSuccessfully } from '../../_helpers/counter.actions';
import { Store } from '@ngrx/store';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  public concatedData = []
  public isToEdit = false
  public selectedItem = {}
  public actionType = ''
  public index = 0

  constructor(
    private store: Store<{ count: number }>,
    public dataService: DataService,
    public usersService: UserService
  ) { }

  ngOnInit() {
    var addedEmployeeHandler = []
    this.store.select('count').subscribe((x: any) => {
      x.status.newlyAddedEmployee.forEach(element => {
        const addressAdded = Object.assign({address: {city: element.employee.city, street: element.employee.street}}, {name: element.employee.firstname + ' ' + element.employee.lastname}, element.employee)
        addedEmployeeHandler.push(addressAdded)
      });      
      this.concatedData = this.dataService.dataHandler.concat(addedEmployeeHandler)
    })
  }

  displaySelectedItem(index, type, boolean) {
    this.index = index
    this.actionType = type
    this.isToEdit = boolean
    this.selectedItem = this.concatedData[index]
  }

  deleteSelectedUser(index) {
    Swal.fire({
      title: 'Are you sure?',
      text: "You want to delete " + this.concatedData[index].name + "?",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      if (result.isConfirmed) {
        this.concatedData.splice(index, 1)
        console.log(this.concatedData)
        Swal.fire(
          'Deleted!',
          'Your file has been deleted.',
          'success'
        )
      }
    })
  }

  updateTheSelectedItem() {
    this.concatedData[this.index] = this.selectedItem
  }

}
