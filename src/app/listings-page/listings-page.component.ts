import { Component,OnInit } from '@angular/core';
import { Listing, fakeListings } from '../fake-data';

@Component({
  selector: 'app-listings-page',
  templateUrl: './listings-page.component.html',
  styleUrls: ['./listings-page.component.css']
})
export class ListingsPageComponent implements OnInit {
    listings : Listing[] = [];

    constructor() { }

    ngOnInit(): void {
      this.listings = fakeListings;
    }

}