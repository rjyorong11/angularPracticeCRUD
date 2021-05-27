// https://jsonplaceholder.typicode.com/users
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })

export class DataService {
    public dataHandler = []
    public url = "https://jsonplaceholder.typicode.com/users"


    constructor(
        private http: HttpClient
    ) {
    }

    getAllData() {
        this.http.get(this.url).subscribe((response: any) => {
            this.dataHandler = response
            console.log(response)
        })
    }

}