import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsersListSearchbarComponent } from './users-list-searchbar.component';

describe('UsersListSearchbarComponent', () => {
  let component: UsersListSearchbarComponent;
  let fixture: ComponentFixture<UsersListSearchbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [UsersListSearchbarComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UsersListSearchbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
