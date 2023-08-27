import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ListingsPageComponent } from './listings-page/listings-page.component';
import { ListingsdetailComponent } from './listingsdetail/listingsdetail.component';
import { ContactPageComponent } from './contact-page/contact-page.component';
import { FormsModule } from '@angular/forms';
import { MyListingComponent } from './my-listing/my-listing.component';
import { NewListingComponent } from './new-listing/new-listing.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ListingsPageComponent,
    ListingsdetailComponent,
    ContactPageComponent,
    MyListingComponent,
    NewListingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
