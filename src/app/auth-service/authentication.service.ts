import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { UserService } from 'src/assets/partial-database.database';
import { Router } from '@angular/router';
import Swal from 'sweetalert2'

@Injectable({ providedIn: 'root' })
export class AuthenticationService {
    private currentUserSubject: BehaviorSubject<any>;
    public currentUser: Observable<any>;

    constructor(
        private http: HttpClient,
        public partialDB: UserService,
        public router: Router
        ) {
        this.currentUserSubject = new BehaviorSubject<any>(localStorage.getItem('currentUser'));
        this.currentUser = this.currentUserSubject.asObservable();
    }

    public get currentUserValue() {
        return this.currentUserSubject.value;
    }

    login(userCredential: any) {
        if(this.partialDB.verifyLoggedUser(userCredential)) {
            localStorage.setItem('currentUser', userCredential.Password);
            location.reload()
        }else {
            Swal.fire('Wrong Credentials', "You've entered an invalid credentials", 'error')
        }
    }

    logout() {
        // remove user from local storage to log user out
        localStorage.removeItem('currentUser');
        // this.router.navigate(['/login'])
        location.reload()
    }
}