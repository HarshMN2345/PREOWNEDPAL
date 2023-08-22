import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListingsdetailComponent } from './listingsdetail.component';

describe('ListingsdetailComponent', () => {
  let component: ListingsdetailComponent;
  let fixture: ComponentFixture<ListingsdetailComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListingsdetailComponent]
    });
    fixture = TestBed.createComponent(ListingsdetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
