import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class StoreDataService {
  domain: string = environment.apiDomain;
  currentStoreUrl = `v1/api/stores`;

  constructor(private http: HttpClient) { }

  getCurrentStore() {
    console.log('getting current store');
    console.log(`${this.domain}${this.currentStoreUrl}`);
    return this.http.get(`${this.domain}${this.currentStoreUrl}`)
     }
}
