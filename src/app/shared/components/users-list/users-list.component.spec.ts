import { Spectator, createComponentFactory } from '@ngneat/spectator/jest';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UsersListComponent } from './users-list.component';
import { RouterTestingModule } from '@angular/router/testing';

describe('UsersListComponent', () => {
  let spectator: Spectator<UsersListComponent>;

  const createComponent = createComponentFactory({
    component: UsersListComponent,
    imports: [FormsModule, ReactiveFormsModule, RouterTestingModule],
  });

  beforeEach(() => {
    spectator = createComponent();
  });

  it('should create', () => {
    expect(spectator.component).toBeDefined();
  });
});
