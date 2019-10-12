import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ActivationService {

  constructor(private httpClient: HttpClient) { }

  activate(activationKey: string): Observable<void> {
    return this.httpClient.get<void>(environment.apiUrl + `auth/oauth/account/activate?key=${activationKey}`);
  }
}
