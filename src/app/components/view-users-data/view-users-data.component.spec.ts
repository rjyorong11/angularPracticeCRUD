import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewUsersDataComponent } from './view-users-data.component';

describe('ViewUsersDataComponent', () => {
  let component: ViewUsersDataComponent;
  let fixture: ComponentFixture<ViewUsersDataComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewUsersDataComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewUsersDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
