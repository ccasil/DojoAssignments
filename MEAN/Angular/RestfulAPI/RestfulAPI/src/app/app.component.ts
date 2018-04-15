import { Component, OnInit } from '@angular/core';
import { HttpService } from './http.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  // Set the attribute tasks to be an array.
  title = 'Restful Tasks API';
  tasks = [];
  constructor(private _httpService: HttpService) { }
  ngOnInit() {
    // this.onButtonClick();
  }
  getTasksFromService() {
    const observable = this._httpService.getTasks();
    observable.subscribe(data => {
      console.log('Got our tasks!', data);

      this.tasks = data['tasks'];
      console.log(this.tasks);
    });
  }
  onButtonClickAll(event) {
    this.getTasksFromService();
    console.log('Click event is working, event:', event);
  }
  getTaskFromService(id) {
    if (id) {
      const observable = this._httpService.getTask(id);
      observable.subscribe(data => {
        console.log('Got our task!', data);
        this.tasks = data['data'];
        console.log(this.tasks);
      });
    } else {
      console.log('Error');
    }
  }
  onButtonClickOne(id: Number): void {
  this.getTaskFromService(id);
  console.log('Click event is working, id:', id);
  }
}
