import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-chicago',
  templateUrl: './chicago.component.html',
  styleUrls: ['./chicago.component.css']
})
export class ChicagoComponent implements OnInit {

  constructor(private _httpService: HttpService) { }
  city: any;

  ngOnInit() {
    const observable = this._httpService.getCity('chicago');
    observable.subscribe(data => {
      this.city = (data as any);
      console.log(this.city);
    });
  }
}

