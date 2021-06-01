import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2'
import { DataService } from 'src/app/services/data.service';
import { UserService } from 'src/assets/partial-database.database';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  public isToEdit = false
  public selectedItem = {}
  public actionType = ''
  public index = 0

  constructor(
    public dataService: DataService,
    public usersService: UserService
  ) { }

  ngOnInit() {
  }

  displaySelectedItem(index, type, boolean) {
    this.index = index
    this.actionType = type
    this.isToEdit = boolean
    this.selectedItem = this.dataService.dataHandler.concat(this.usersService.newlyAddedEmployee)[index]
  }

  deleteSelectedUser(index) {
    Swal.fire({
      title: 'Are you sure?',
      text: "You want to delete " + this.dataService.dataHandler[index].name + "?",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      if (result.isConfirmed) {
        this.dataService.dataHandler.splice(index, 1)
        Swal.fire(
          'Deleted!',
          'Your file has been deleted.',
          'success'
        )
      }
    })
  }

  updateTheSelectedItem() {
    this.dataService.dataHandler[this.index] = this.selectedItem
    console.log(this.selectedItem)
  }

}
