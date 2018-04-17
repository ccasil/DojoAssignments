import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-sanjose',
  templateUrl: './sanjose.component.html',
  styleUrls: ['./sanjose.component.css']
})
export class SanjoseComponent implements OnInit {

  constructor(private _httpService: HttpService) { }
  city: any;

  ngOnInit() {
    const observable = this._httpService.getCity('sanjose');
    observable.subscribe(data => {
      this.city = (data as any);
      console.log(this.city);
    });
  }
}
