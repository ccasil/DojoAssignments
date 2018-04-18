
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {

  constructor(private _httpService: HttpService,
    private _route: ActivatedRoute,
    private _router: Router) { }


  name: string;
  error: string;

  ngOnInit() {
  }

  cancelButton() {
    this._router.navigate(['/home']);
  }

  submitButton() {
    const observable = this._httpService.newAuthor(this.name);
    observable.subscribe(data => {
      if ((data as any).message === 'Success') {
        this._router.navigate(['/home']);
      } else {
        this.error = 'Name must be at least 3 characters';
      }
    });
    console.log(this.name);
  }
}
