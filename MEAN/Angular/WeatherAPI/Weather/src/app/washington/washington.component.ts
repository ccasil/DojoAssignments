import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-washington',
  templateUrl: './washington.component.html',
  styleUrls: ['./washington.component.css']
})
export class WashingtonComponent implements OnInit {

  constructor(private _httpService: HttpService) { }
  city: any;

  ngOnInit() {
    const observable = this._httpService.getCity('washington');
    observable.subscribe(data => {
      this.city = (data as any);
      console.log(this.city);
    });
  }

}
