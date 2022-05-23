import { Injectable } from '@angular/core';
import { Query } from '@datorama/akita';
import { UserDetailsStore, UserDetailsState } from './user-details.store';

@Injectable({ providedIn: 'root' })
export class UserDetailsQuery extends Query<UserDetailsState> {
  constructor(protected override store: UserDetailsStore) {
    super(store);
  }
}
