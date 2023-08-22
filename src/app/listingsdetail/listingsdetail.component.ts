import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Listing, fakeListings } from '../fake-data';

@Component({
  selector: 'app-listingsdetail',
  templateUrl: './listingsdetail.component.html',
  styleUrls: ['./listingsdetail.component.css']
})
export class ListingsdetailComponent implements OnInit {
  listing: Listing | undefined;

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    const parsedId = Number(id);

    // Use filter instead of find to handle potential multiple listings with the same ID
    this.listing = fakeListings.find(listing => listing.id === parsedId);
  }
}

