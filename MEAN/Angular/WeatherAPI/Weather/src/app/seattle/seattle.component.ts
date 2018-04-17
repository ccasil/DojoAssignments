import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';

@Component({
    selector: 'app-seattle',
    templateUrl: './seattle.component.html',
    styleUrls: ['./seattle.component.css']
})
export class SeattleComponent implements OnInit {

    constructor(private _httpService: HttpService) { }
    city: any;

    ngOnInit() {
        const observable = this._httpService.getCity('seattle');
        observable.subscribe(data => {
            this.city = (data as any);
            console.log(this.city);
        });
    }
}
