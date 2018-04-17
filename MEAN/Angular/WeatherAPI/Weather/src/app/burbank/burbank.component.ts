import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-burbank',
  templateUrl: './burbank.component.html',
  styleUrls: ['./burbank.component.css']
})
export class BurbankComponent implements OnInit {

  constructor(private _httpService: HttpService) { }
  city: any;

  ngOnInit() {
    const observable = this._httpService.getCity('burbank');
    observable.subscribe(data => {
      this.city = (data as any);
      console.log(this.city);
  });
}
}
