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
  task = {};
  newTask: any;
  editTask: any;
  edit = false;

  constructor(private _httpService: HttpService) { }
  ngOnInit() {
    this.getTasksFromService();
    this.newTask = { title: '', description: '' };
  }

  getTasksFromService() {
    const observable = this._httpService.getTasks();
    observable.subscribe(data => {
      console.log('Got our tasks!', data);
      this.tasks = data['tasks'];
      console.log('this.tasks', this.tasks);
    });
  }

  getTaskFromService(id) {
    if (id) {
      const observable = this._httpService.getTask(id);
      observable.subscribe(data => {
        console.log('Got our task!', data);
        this.task = data['tasks'];
        console.log('this.task', this.task);
        console.log('TITLE', this.task['title']);
        this.editTask = { id: this.task['_id'], title: this.task['title'], description: this.task['description'] };
        console.log('this.editTask', this.editTask);
        this.edit = true;
      });
    } else {
      console.log('Error');
    }
  }

  onButtonClickOne(id: Number): void {
    this.getTaskFromService(id);
    console.log('Click event is working, id:', id);
  }

  onSubmit() {
    // Code to send off the form data (this.newTask) to the Service
    const observable = this._httpService.addTask(this.newTask);
    observable.subscribe(data => {
      console.log('Got data from post back!', data);
    });
    this.getTasksFromService();
    // Reset this.newTask to a new, clean object.
    this.newTask = { title: '', description: '' };
  }

editSubmit(id) {
  console.log(id);
  const observable = this._httpService.editTask(id, this.editTask);
  observable.subscribe(data => {
    console.log('Got data from put back!', data);
    this.getTasksFromService();
    this.edit = false;
  });
}

  deleteTaskFromService(id) {
    const observable =  this._httpService.deleteTask(id);
    observable.subscribe(data => {
      console.log('Removed the task');
      this.getTasksFromService();
      this.task = {};
    });
  }
}
