import { Injectable } from '@angular/core';
import { QueryEntity } from '@datorama/akita';
import { UserDetailsStore, UserDetailsState } from './user-details.store';

@Injectable({ providedIn: 'root' })
export class UserDetailsQuery extends QueryEntity<UserDetailsState> {
  constructor(protected override store: UserDetailsStore) {
    super(store);
  }
}
