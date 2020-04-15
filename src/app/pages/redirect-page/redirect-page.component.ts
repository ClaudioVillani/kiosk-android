import { Component, OnInit } from '@angular/core';
import { StoreDataService } from '../../../services/store-data/store-data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-redirect-page',
  templateUrl: './redirect-page.component.html',
  styleUrls: ['./redirect-page.component.css']
})
export class RedirectPageComponent implements OnInit {

  constructor(private store: StoreDataService, private router: Router) { }

  storeSubscription;

  ngOnInit() {
    this.storeSubscription = this.store.getCurrentStore()
    .subscribe(
      (data) => {
        console.log('in subscrption', data);
      },
      (error) => {
        console.error('error erro error error', error);
      }
    );
    }

}
