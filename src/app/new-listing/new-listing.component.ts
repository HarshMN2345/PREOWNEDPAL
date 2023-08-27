import { Component,OnInit } from '@angular/core';
import { ActivatedRoute,Router } from '@angular/router';

@Component({
  selector: 'app-new-listing',
  templateUrl: './new-listing.component.html',
  styleUrls: ['./new-listing.component.css']
})
export class NewListingComponent implements OnInit {
  name: string = '';
  description: string = '';
  price: string = '';

  constructor(
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
  }
  onSubmit():void{
    alert('Your listing has been added!');
    this.router.navigateByUrl('/my-listings');
  }

}

