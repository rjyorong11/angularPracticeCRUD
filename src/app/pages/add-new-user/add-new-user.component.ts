import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/assets/partial-database.database';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-add-new-user',
  templateUrl: './add-new-user.component.html',
  styleUrls: ['./add-new-user.component.css']
})
export class AddNewUserComponent implements OnInit {

  constructor(
    public usersService: UserService,
    public router: Router
  ) { }

  ngOnInit() {
  }

  onSubmit(value) {
    console.log(value.form.value)
    value.form.value["name"] = value.form.value.firstname + ' ' + value.form.value.lastname
    value.form.value["address"] = {
      street: value.form.value.street,
      city: value.form.value.city
    }
    this.usersService.newlyAddedEmployee.push(value.form.value)    
    Swal.fire({
      title: 'Are you sure?',
      text: "You want to add the user or check before submit?",
      icon: 'info',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, Add new User!'
    }).then((result) => {
      if (result.isConfirmed) {
        this.router.navigate(['dashboard'])
        value.reset()
        Swal.fire(
          'Addded!',
          'New user successfully added!.',
          'success'
        )
      }
    })
  }

}
