import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyListingComponent } from './my-listing.component';

describe('MyListingComponent', () => {
  let component: MyListingComponent;
  let fixture: ComponentFixture<MyListingComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MyListingComponent]
    });
    fixture = TestBed.createComponent(MyListingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
