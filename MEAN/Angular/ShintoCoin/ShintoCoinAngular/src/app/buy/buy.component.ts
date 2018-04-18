import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-buy',
  templateUrl: './buy.component.html',
  styleUrls: ['./buy.component.css']
})
export class BuyComponent implements OnInit {

  value = 0;
  owned = 0;
  quantity = 0;

  constructor(private _httpService: HttpService) { }

  ngOnInit() {
    this.value = this._httpService.getValue();
    this.owned = this._httpService.getOwned();
  }
  buyCoin() {
    console.log(this._httpService.getOwned());

    if (this._httpService.getBalance() >= this.quantity * this._httpService.getValue()) {
      this._httpService.owned += this.quantity;
      this._httpService.value++;
      this.owned = this._httpService.getOwned();
      this._httpService.log.push({ action: 'Bought', quantity: this.quantity, value: this.value, id: this._httpService.log.length });
      this.value = this._httpService.getValue();
      this.owned = this._httpService.getOwned();
    }


  }
}
