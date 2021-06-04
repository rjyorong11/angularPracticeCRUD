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
        this.getAllData()
    }

    getAllData() {
        var fromDatabase = []
        this.http.get(this.url).subscribe((response: any) => {
            response.forEach(element => {
                element["database"] = true
                fromDatabase.push(element)
            });
            this.dataHandler = fromDatabase
           
        })
    }

}