import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(
    private _route: ActivatedRoute,
    private _router: Router,
    private _httpService: HttpService
  ) { }

  authors = [];
  ngOnInit() {
    this.getAuthors();
  }

  getAuthors() {
    const observable = this._httpService.getAuthors();
    observable.subscribe(data => {
      this.authors = (data as any).data;
    });
  }

  // Click 'addAuthor' button and navigates to /addauthor component
  addAuthor() {
    this._router.navigate(['/addauthor']);
  }

  // Click 'viewQuotes' button and navigates to /viewQuotes component
  viewQuotes(author) {
    this._httpService.selected = author;
    this._router.navigate(['/viewquotes']);
  }

  // Click 'editAuthor' button and navigates to /edit component
  editAuthor(author) {
    console.log(author);
    this._httpService.selected = author;
    this._router.navigate(['/editauthor']);
  }

  // CLick 'deleteAuthor' button and uses a service to deliver data to the controller
  deleteAuthor(author) {
    const observable = this._httpService.deleteAuthor(author);
    // an observable will deliver its data to any part of the app that has subscribed to it
    observable.subscribe(data => {
      console.log(data);
      this.getAuthors();
    });
  }
}
