import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import { UserService } from 'src/assets/partial-database.database';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {
  public url;
  public allEmployee = []

  public numberSelect = 0
  public addedEmployeerHandler = []
  @Input() concatedData = [];
  @Output() deleteSelectedMember = new EventEmitter<any>();
  public isToEdit = false
  public selectedItem = {};
  public actionType = '';
  public index = 0;

  constructor(
    public dataService: DataService,
    public usersService: UserService
  ) { }

  ngOnInit() {
    this.allEmployee = this.concatedData
    console.log(this.url)
  }

  displaySelectedItem(index, type, boolean) {
    for (let i = 0; i < this.usersService.employeesImages.length; i++) {
      console.log()
      if(this.usersService.employeesImages[i].name === this.concatedData[index].name) {
        this.url = this.usersService.employeesImages[i].profile
      }else {
        this.url = undefined
      }
    }
    this.index = index
    this.actionType = type
    this.isToEdit = boolean
    this.selectedItem = this.concatedData[index]
  }

  deleteSelectedUser(index, user) {
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
        if (this.concatedData[index].database == true) {
          this.dataService.dataHandler.splice(index, 1)
        } else {
          this.deleteSelectedMember.emit(user)
        }
        this.concatedData.splice(index, 1)
        Swal.fire(
          'Deleted!',
          'Your file has been deleted.',
          'success'
        )
      }
    })
  }
  updateTheSelectedItem() {
    this.usersService.employeesImages.forEach(element => {
      if(element.name == this.concatedData[this.index].name) {
        element.profile = this.url
      }else {
        this.usersService.employeesImages.push({name: this.concatedData[this.index].name, profile: this.url})
      }
    })
    this.concatedData[this.index] = this.selectedItem
  }

  getTheWidthResize(width) {
    if (width.target.innerWidth < 750) {
      document.getElementById('getMargin').style.marginLeft = '0'
    } else {
      document.getElementById('getMargin').style.marginLeft = '200px'
    }
  }

  getInputedLength(value) {
    if (value.target.value == '') {
      this.allEmployee = this.concatedData
    } else {
      var dataHandler = []
      for (let index = 0; index < Number(value.target.value); index++) {
        dataHandler.push(this.concatedData[index])
      }
      this.allEmployee = dataHandler
    }
  }

  // Kini siya nga function kay filter search
  searchEvent(value) {
    var partialArray = []
    this.concatedData.forEach(element => {
      if (JSON.stringify(element).toLowerCase().includes(value.target.value)) {
        if (!partialArray.includes(element)) {
          partialArray.push(element)
        }
      }
    })
    if (partialArray.length != 0) {
      this.allEmployee = partialArray
    }
  }

  onSelectFile(event) {
    if (event.target.files && event.target.files[0]) {
      var reader = new FileReader();

      reader.readAsDataURL(event.target.files[0]); // read file as data url

      reader.onload = (event) => { // called once readAsDataURL is completed
        this.url = event.target.result;
      }
    }
  }

}
