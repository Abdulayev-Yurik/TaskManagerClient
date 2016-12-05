import {Injectable} from '@angular/core';
import {Http, Response, Headers} from '@angular/http';
import 'rxjs/add/operator/toPromise';
import {TaskList} from "../models/task_list";



@Injectable()
export class TaskListService {
  private headers = new Headers({'Content-Type': 'application/json'});

  constructor(private http: Http) {
  }

  getTaskLists(): Promise<TaskList[]> {
    // heroesUrl = 'api/heroes';  // URL to web api
    alert("Hello from ts");
    return this.http.get('api/taskList')
      .toPromise()
      .then(response => response.json() as TaskList[])
      .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    alert("allert");
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }
}
