import {Component, OnInit} from "@angular/core";
import {TaskList} from "../models/task_list";
import {TaskListService} from "../services/task.list.service";

@Component({
  moduleId: module.id.toString(),
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
  providers: [TaskListService]
})
export class DashboardComponent implements OnInit {

  taskLists: TaskList[];


  constructor(private taskListService: TaskListService) {
  }

  ngOnInit() {
    this.getTaskLists();
    alert(this.taskLists)
  }

  getTaskLists(): void {
    this.taskListService.getTaskLists().then(taskLists => this.taskLists = taskLists);
  }

}
