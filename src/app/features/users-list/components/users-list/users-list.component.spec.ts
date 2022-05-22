import { Spectator, createComponentFactory } from '@ngneat/spectator/jest';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UsersListComponent } from './users-list.component';
import { RouterTestingModule } from '@angular/router/testing';
import { UsersListQuery, UsersListService } from '../../../../store/users-list';
import { of } from 'rxjs';

describe('UsersListComponent', () => {
  let spectator: Spectator<UsersListComponent>;
  let query: UsersListQuery;

  const createComponent = createComponentFactory({
    component: UsersListComponent,
    imports: [FormsModule, ReactiveFormsModule, RouterTestingModule],
    mocks: [UsersListService],
    providers: [UsersListQuery],
  });

  beforeEach(() => {
    spectator = createComponent();
    query = spectator.inject(UsersListQuery);
  });

  it('should create', () => {
    expect(spectator.component).toBeDefined();
  });

  it('should get data from store', () => {
    const spy = jest.spyOn(query, 'selectAll').mockReturnValue(of([]));
    spectator.component.ngOnInit();

    expect(spy).toBeCalledWith();
    expect(spectator.component.users).toEqual([]);
  });
});
