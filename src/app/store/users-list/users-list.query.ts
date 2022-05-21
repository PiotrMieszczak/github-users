import { Injectable } from '@angular/core';
import { QueryEntity } from '@datorama/akita';
import { UserListState, UsersListStore } from './users-list.store';

@Injectable({ providedIn: 'root' })
export class UsersListQuery extends QueryEntity<UserListState> {
  constructor(protected override store: UsersListStore) {
    super(store);
  }
}
