import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class HttpService {

  constructor(private _http: HttpClient) { }
  selected: any;
  getAuthors() {
    return this._http.get('/authors');
  }

  newAuthor(name) {
    return this._http.post('/new', { name: name });
  }

  editAuthor(author) {
    console.log(author);
    return this._http.put('/edit', { id: author._id, name: author.name });
  }

  deleteAuthor(author) {
    console.log('deleting ', author);
    return this._http.delete('/delete/' + author._id);
  }

}
