import { Component, OnInit } from '@angular/core';
import { ActionSheetController, AlertController } from '@ionic/angular';


@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.page.html',
  styleUrls: ['./task-list.page.scss'],
})
export class TaskListPage implements OnInit {
  tasks: {name: string}[] = [];

  constructor(public actionSheetController: ActionSheetController,
              public alertCtrl: AlertController) { }

  ngOnInit() {
  }

  ionViewWillEnter() {
    if ('tasks' in localStorage) {
      this.tasks = JSON.parse(localStorage.tasks);
    }
  }
  async changeTask(i) {
    const actionSheet = await this.actionSheetController.create({
      header: 'タスクの変更',
      buttons: [
        {
          text: '削除',
          role: 'destructive',
          icon: 'trash',
          handler: () => {
            console.log('Destructive clicked');
            this.tasks.splice(i, 1);
            localStorage.tasks = JSON.stringify(this.tasks);
          }
        }, {
        text: '変更',
          icon: 'create',
          handler: () => {
          console.log('Archive clicked');
          this._renameTask(i);
          }
        }, {
        text: '閉じる',
          icon: 'close',
          role: 'cancel',
          handler: () => {
          console.log('Cancel clicked');
          }
        },
      ]
    });
    actionSheet.present();
  }

  async _renameTask(i) {
    const prompt = await this.alertCtrl.create({
      header: '変更後のタスク',
      inputs: [
        {name: 'task',
        placeholder: 'タスク',
        value: this.tasks[i].name
        },
      ],
      buttons: [
        {
          text: '閉じる'
        },
        {
          text: '保存',
          handler: data => {
            this.tasks[i] = {name: data.task };
            localStorage.tasks = JSON.stringify(this.tasks);
          }
        }
      ]
    });
    prompt.present();
  }

}
