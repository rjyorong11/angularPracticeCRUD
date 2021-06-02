import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/assets/partial-database.database';
import { Observable } from 'rxjs';
import { increment, decrement, reset, employeeAddedSuccessfully } from '../../_helpers/counter.actions';
import { Store } from '@ngrx/store';
import Swal from 'sweetalert2'



@Component({
  selector: 'app-add-new-user',
  templateUrl: './add-new-user.component.html',
  styleUrls: ['./add-new-user.component.css']
})
export class AddNewUserComponent implements OnInit {
  public count$: Observable<any>

  constructor(
    private store: Store<{ count: number }>,
    public usersService: UserService,
    public router: Router,
  ) { 
    // console.log(store.select('store'))
  }

  ngOnInit() {
  }

  onSubmit(value) {
    if(!this.checkObjectAddedIsEmpty(value.form.value)) { 
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
          this.store.dispatch(employeeAddedSuccessfully(value.form.value))
          this.router.navigate(['dashboard'])
          value.reset()
          Swal.fire(
            'Addded!',
            'New user successfully added!.',
            'success'
          )
        }
      })
    }else {
      Swal.fire('Sorry', 'You must fill all input fields', 'error')
    } 
  }

  checkObjectAddedIsEmpty(obj) {
    for (var key in obj) {
      if (obj[key] !== null && obj[key] != "")
          return false;
  }
  return true;
  }

}
