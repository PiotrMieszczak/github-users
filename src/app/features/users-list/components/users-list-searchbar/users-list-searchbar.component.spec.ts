import { Spectator, createComponentFactory } from '@ngneat/spectator/jest';
import { UsersListSearchbarComponent } from './users-list-searchbar.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { UsersListService } from '../../../../store/users-list';
import { TuiInputModule } from '@taiga-ui/kit';
import { TuiTextfieldControllerModule } from '@taiga-ui/core';

describe('UsersListSearchbarComponent', () => {
  let spectator: Spectator<UsersListSearchbarComponent>;

  const createComponent = createComponentFactory({
    component: UsersListSearchbarComponent,
    imports: [
      FormsModule,
      ReactiveFormsModule,
      RouterTestingModule,
      TuiInputModule,
      TuiTextfieldControllerModule,
    ],
    mocks: [UsersListService],
  });

  beforeEach(() => {
    spectator = createComponent();
  });

  it('should create', () => {
    expect(spectator.component).toBeDefined();
  });
});
