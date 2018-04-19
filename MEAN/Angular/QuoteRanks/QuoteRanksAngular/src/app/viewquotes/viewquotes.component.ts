import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-viewquotes',
  templateUrl: './viewquotes.component.html',
  styleUrls: ['./viewquotes.component.css']
})
export class ViewquotesComponent implements OnInit {

  author: any;

  constructor(
    private _httpService: HttpService,
    private _route: ActivatedRoute,
    private _router: Router
  ) { }

  ngOnInit() {
    this.author = this._httpService.selected;
  }

  // cancelButton pressed navigates to /home route
  cancelButton() {
    this._router.navigate(['/home']);
  }

  addQuote(author) {
    this._httpService.selected = author;
    this._router.navigate(['/addquote']);
  }

}