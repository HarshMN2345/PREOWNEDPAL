import { Component,OnInit } from '@angular/core';
import { Listing, fakeListings } from '../fake-data';

@Component({
  selector: 'app-my-listing',
  templateUrl: './my-listing.component.html',
  styleUrls: ['./my-listing.component.css']
})
export class MyListingComponent implements OnInit {
  listings : Listing[] = [];
    constructor() { }

    ngOnInit(): void {
      this.listings = fakeListings;
    }
    onDeleteClick(id: number,name:string): void {
      alert(`Delete listing named ${name}? (Normally this would actually delete the listing.)`)
    }
}
