import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { UserSettings } from './user-settings';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }

  postForm(userSettings: UserSettings): Observable<any>{
    return of(userSettings);
  }

  getSubscriptionTypes(): Observable<string[]> {
    return of(['Monthly','Annual','Lifetime']);
  }
}
