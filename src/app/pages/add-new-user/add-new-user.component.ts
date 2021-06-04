import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/assets/partial-database.database';
import { Observable } from 'rxjs';
import { increment, decrement, reset, employeeAddedSuccessfully } from '../../_helpers/counter.actions';
import { Store } from '@ngrx/store';
import Swal from 'sweetalert2'
import { FormBuilder, FormControl, FormGroup, Validators  } from '@angular/forms';



@Component({
  selector: 'app-add-new-user',
  templateUrl: './add-new-user.component.html',
  styleUrls: ['./add-new-user.component.css']
})
export class AddNewUserComponent implements OnInit {
  public count$: Observable<any>
  public newlyAddedMembers: FormGroup;
  public submitted = false

  constructor(
    private store: Store<{ count: number }>,
    public usersService: UserService,
    public router: Router,
    public employee: FormBuilder
  ) {
    // console.log(store.select('store'))
  }

  ngOnInit() {
    this.newlyAddedMembers = this.employee.group({
      name: ['', Validators.required],
      email: ['', Validators.required],
      phone: ['', Validators.required],
      username: ['', Validators.required],
      street: ['', Validators.required],
      city: ['', Validators.required]
    })
  }

  get registerFormControl() {
    return this.newlyAddedMembers.controls
  }

  onSubmit() {
    this.submitted = true;
    if (this.newlyAddedMembers.valid) {
      this.store.dispatch(employeeAddedSuccessfully(this.newlyAddedMembers.value))
      this.router.navigate(['dashboard'])
      Swal.fire(
        'Addded!',
        'A new employee was successfully added!.',
        'success'
      )
    }
  }

  checkObjectAddedIsEmpty(obj) {
    for (var key in obj) {
      if (obj[key] !== null && obj[key] != "") {
        return false;
      }        
    }
    return true;
  }

}
