import { Observable } from 'rxjs/Observable';
import { Injectable } from '@angular/core';
import 'rxjs/add/observable/of';



@Injectable({
  providedIn: 'root'
})
export class AppService {

  constructor() { }
  public getUsers() {
    let fakeUsers = [
    {id: 1, firstName: 'Dhiraj', lastName: 'Ray', email: 'dhiraj@gmail.com'},
    {id: 2, firstName: 'Tom', lastName: 'Jac', email: 'Tom@gmail.com'},
    {id: 3, firstName: 'Hary', lastName: 'Pan', email: 'hary@gmail.com'},
    {id: 4, firstName: 'praks', lastName: 'pb', email: 'praks@gmail.com'},
    ];
    return Observable.of(fakeUsers);
    }
}
