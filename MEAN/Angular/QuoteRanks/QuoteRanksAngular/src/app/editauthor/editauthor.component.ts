import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-editauthor',
  templateUrl: './editauthor.component.html',
  styleUrls: ['./editauthor.component.css']
})
export class EditauthorComponent implements OnInit {

  constructor(
    private _httpService: HttpService,
    private _route: ActivatedRoute,
    private _router: Router
  ) { }

  author: any;
  error: string;

  // Load name in input
  ngOnInit() {
    this.author = this._httpService.selected;
  }

  // submitButton clicked and update author
  submitButton() {
    const observable = this._httpService.editAuthor(this.author);
    observable.subscribe(data => {
      console.log(data);
      if ((data as any).message === 'Success') {
        this._router.navigate(['/home']);
      } else {
        this.error = 'Name must be at least 3 characters';
      }
    });
  }
}
