import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class HttpService {

  constructor(private _http: HttpClient) {
    this.getTasks();
    this.getTask(1);
  }
  getTasks() {
    // our http response is an Observable, store it in a variable
    const tempObservable = this._http.get('/tasks');
    // subscribe to the Observable and provide the code we would like to do with our data from the response
    tempObservable.subscribe(data => console.log('Got our tasks!', data));
  }
  getTask(id) {
    // our http response is an Observable, store it in a variable
    const tempObservable = this._http.get('/tasks/' + id + '');
    // subscribe to the Observable and provide the code we would like to do with our data from the response
    tempObservable.subscribe(data => console.log('Got our task!', data));
  }
}
