import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })

export class UserService {
    public newlyAddedEmployee = []
    public grantLogged = false
    public credential = {
        name: 'rjyorong11',
        Password: 'gwapoko'
    }

    constructor() {}


    verifyLoggedUser(credential) {
        if(JSON.stringify(credential) == JSON.stringify(this.credential)) {
            return true
        }
        return false
    }
    
}