import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-viewquotes',
  templateUrl: './viewquotes.component.html',
  styleUrls: ['./viewquotes.component.css']
})
export class ViewquotesComponent implements OnInit {

  constructor(
    private _httpService: HttpService,
    private _route: ActivatedRoute,
    private _router: Router
  ) { }

  author: any;

  ngOnInit() {
    this.author = this._httpService.selected;
  }

  findAuthor(author) {
    console.log(author);
    const observable = this._httpService.findAuthor(author);
    observable.subscribe(data => {
      // console.log('DATAAAAAAAA', data);
      this.author = (data as any).data;
    });
  }

  voteUp(quote) {
    console.log(quote);
    const observable = this._httpService.voteUpQuote(this.author, quote);
    // an observable will deliver its data to any part of the app that has subscribed to it
    observable.subscribe(data => {
      this.findAuthor(this.author._id);
    });
  }

  voteDown(quote) {
    console.log(quote);
    const observable = this._httpService.voteDownQuote(this.author, quote);
    // an observable will deliver its data to any part of the app that has subscribed to it
    observable.subscribe(data => {
      this.findAuthor(this.author._id);
    });
  }

  addQuote(author) {
    this._httpService.selected = author;
    this._router.navigate(['/addquote/' + author._id]);
  }

  // CLick 'deleteQuote' button and uses a service to deliver data to the controller
  deleteQuote(quote) {
    console.log(quote);
    const observable = this._httpService.deleteQuote(this.author, quote);
    // an observable will deliver its data to any part of the app that has subscribed to it
    observable.subscribe(data => {
      this.findAuthor(this.author._id);
    });
  }

}
