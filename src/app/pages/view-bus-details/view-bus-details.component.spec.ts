import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewBusDetailsComponent } from './view-bus-details.component';

describe('ViewBusDetailsComponent', () => {
  let component: ViewBusDetailsComponent;
  let fixture: ComponentFixture<ViewBusDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewBusDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewBusDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
