import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { UserSettings } from './user-settings';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor() { }

  postForm(userSettings: UserSettings): Observable<UserSettings>{
    return of(userSettings);
  }
}
