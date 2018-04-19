import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-addquote',
  templateUrl: './addquote.component.html',
  styleUrls: ['./addquote.component.css']
})
export class AddquoteComponent implements OnInit {

  author: any;
  quote: string;
  error: string;

  constructor(
    private _httpService: HttpService,
    private _route: ActivatedRoute,
    private _router: Router
  ) { }

  ngOnInit() {
    this.author = this._httpService.selected;
  }
  cancelButton() {
    this._router.navigate(['/home']);
  }

  // submitButton pressed newAuthor service
  submitButton() {
    const observable = this._httpService.newQuote(this.quote);
    observable.subscribe(data => {
      if ((data as any).message === 'Success') {
        this._router.navigate(['/home']);
      } else {
        // error message display
        this.error = 'Quote must be at least 5 characters';
      }
    });
    console.log(this.quote);
  }

}
