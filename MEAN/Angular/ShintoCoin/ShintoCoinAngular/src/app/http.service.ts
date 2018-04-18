import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class HttpService {

  value = 1;
  owned = 0;
  balance = 0;
  coins: any;
  log = [];
  answered = false;
  selected: any;

  constructor(private _http: HttpClient) { }

  getValue() {
    return this.value;
  }
  getOwned() {
    return this.owned;
  }
  getBalance() {
    return this.balance;
  }
}
