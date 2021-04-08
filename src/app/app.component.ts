import {Component, OnInit, OnDestroy} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent implements OnInit, OnDestroy{
  public appPages = [
    {title: 'タスク登録', url: '/folder/home', icon: 'home'},
    {title: 'タスク一覧', url: '/tasks', icon: 'list'},
  ];
  public labels = ['Family', 'Friends', 'Notes', 'Work', 'Travel', 'Reminders'];

  constructor() {
  }
  ngOnInit() {
  }
  ngOnDestroy() {
  }
}
