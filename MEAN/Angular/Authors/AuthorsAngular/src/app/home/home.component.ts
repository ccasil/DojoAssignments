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
  addAuthor() {
    this._router.navigate(['/add']);
  }
  editAuthor(author) {
    console.log(author);
    this._httpService.selected = author;
    this._router.navigate(['/edit']);
  }
  deleteAuthor(author) {
    const observable = this._httpService.deleteAuthor(author);
    observable.subscribe(data => {
      console.log(data);
      this.getAuthors();
    });
  }
}
