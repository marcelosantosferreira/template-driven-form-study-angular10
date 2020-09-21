import { Component, OnInit } from '@angular/core';
import { UserSettings } from '../data/user-settings';

@Component({
  selector: 'app-user-settings-form',
  templateUrl: './user-settings-form.component.html',
  styleUrls: ['./user-settings-form.component.css']
})
export class UserSettingsFormComponent implements OnInit {

  originalUserSettings : UserSettings = {
    name: null ,
    email: null,
    receiveNewsletter: true
  };

  userSettings: UserSettings = {...this.originalUserSettings}; /* 2 objects to prevent data loss: back button, cancel button */

  constructor() { }

  ngOnInit(): void {
  }

}
