// https://jsonplaceholder.typicode.com/users
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UserService } from 'src/assets/partial-database.database';

@Injectable({ providedIn: 'root' })

export class DataService {
    public dataHandler = []
    public url = "https://jsonplaceholder.typicode.com/users"


    constructor(
        private http: HttpClient,
        public usersService: UserService
    ) {
    }

    getAllData() {
        this.http.get(this.url).subscribe((response: any) => {
            this.dataHandler = response
            this.dataHandler.concat(this.usersService.newlyAddedEmployee)
        })
    }

}