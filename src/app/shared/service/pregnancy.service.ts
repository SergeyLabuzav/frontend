import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PregnancyService {

  constructor(private httpClient: HttpClient) { }

  fetchActive(): Observable<any> {
    return this.httpClient.get<void>(environment.apiUrl + 'baby/pregnancy');
  }
}
