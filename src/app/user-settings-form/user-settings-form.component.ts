import { Component, OnInit } from '@angular/core';
import { NgForm, NgModel } from '@angular/forms';
import { UserSettings } from '../data/user-settings';
import { DataService } from '../data/data.service';

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

  constructor(private dataService: DataService) { }

  ngOnInit(): void {
  }

  onSubmit(f: NgForm): void{
    console.log('onSbumit: ', f.valid);
    this.dataService.postForm(this.userSettings).subscribe(
      result => console.log('success: ', result),
      error => console.log('error: ', error)
    );
    /* .subscribe(
          function for successfull response,
          function in case of error
    ) */
  }

  onBlur(field: NgModel){
    console.log('onBlur: ', field.valid);
  }
}
