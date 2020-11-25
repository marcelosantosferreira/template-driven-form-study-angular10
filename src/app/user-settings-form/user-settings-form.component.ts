import { Component, OnInit } from '@angular/core';
import { NgForm, NgModel } from '@angular/forms';
import { UserSettings } from '../data/user-settings';
import { DataService } from '../data/data.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-user-settings-form',
  templateUrl: './user-settings-form.component.html',
  styleUrls: ['./user-settings-form.component.css']
})
export class UserSettingsFormComponent implements OnInit {

  originalUserSettings : UserSettings = {
    name: null ,
    email: null,
    subscriptionType: null,
    receiveNewsletter: true
  };

  userSettings: UserSettings = {...this.originalUserSettings};
  postError = false;
  postErrorMessage = '';
  subscriptionTypes : Observable<string[]>;

  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    this.subscriptionTypes = this.dataService.getSubscriptionTypes();
  }

  onSubmit(f: NgForm): void{

    if (f.valid) {
      this.dataService.postForm(this.userSettings).subscribe(
        result => console.log('success: ', result),
        error => this.handleHttpError(error)
      );
      this.postError = false;
    }else{
      this.postError = true;
      this.postErrorMessage = 'Please fix the above errors';
    }
  }

  handleHttpError(e: any){
    console.log('error: ', e);
    //alert(error.message + '\n' + error.name + '\n' + error.status + ' - ' + error.statusText);
    this.postError = true;
    this.postErrorMessage = e.message;
  }
}
