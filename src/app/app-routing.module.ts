import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { ListingsPageComponent } from './listings-page/listings-page.component';
import { ListingsdetailComponent } from './listingsdetail/listingsdetail.component';
import { ContactPageComponent } from './contact-page/contact-page.component';
import { MyListingComponent } from './my-listing/my-listing.component';
import { NewListingComponent } from './new-listing/new-listing.component';

const routes: Routes = [
  {
    component: HeaderComponent,
    path:''
  },
  {
    component: ListingsPageComponent,
    path:'listings'
  },
  {
    component: ListingsdetailComponent,
    path:'listings/:id'
  },
  {
    component: ContactPageComponent,
    path:'contact/:id'
  },
  {
    component: MyListingComponent,
    path:'my-listings'
  },
  {
    component: NewListingComponent,
    path:'new-listing'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
