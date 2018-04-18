import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-sell',
  templateUrl: './sell.component.html',
  styleUrls: ['./sell.component.css']
})
export class SellComponent implements OnInit {

  value = 0;
  owned = 0;
  quantity = 0;

  constructor(private _httpService: HttpService) { }

  ngOnInit() {
    this.value = this._httpService.getValue();
    this.owned = this._httpService.getOwned();
  }
  sellCoin() {
    console.log(this._httpService.getOwned());

    if (this._httpService.getOwned() >= this.quantity) {
      this._httpService.balance += this.value * this.quantity;
      this._httpService.value -= this.quantity;
      this._httpService.log.push({ action: 'Sold', quantity: this.quantity, value: this.value, id: this._httpService.log.length })
      if (this._httpService.value <= 1) {
        this._httpService.value = 1;
      }
      this._httpService.owned -= this.quantity;
      this.value = this._httpService.getValue();
      this.owned = this._httpService.getOwned();

    }


  }
}
