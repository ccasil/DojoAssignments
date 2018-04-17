import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-mine',
  templateUrl: './mine.component.html',
  styleUrls: ['./mine.component.css']
})
export class MineComponent implements OnInit {

  constructor(private _httpService: HttpService) { }

  value = 0;
  owned = 0;
  quantity = 0;
  answer = 0;

  ngOnInit() {
    this.value = this._httpService.getValue();
    this.owned = this._httpService.getOwned();
  }

  mineCoin() {
    if (this.answer === 13 && this._httpService.answered === false) {
      this._httpService.value++;
      this._httpService.owned++;
      this._httpService.answered = true;
      this._httpService.log.push({ action: 'Mined', quantity: 1, value: this.value, id: this._httpService.log.length });
      console.log('mined');
      this._httpService.answered = true;
    }
  }
}
