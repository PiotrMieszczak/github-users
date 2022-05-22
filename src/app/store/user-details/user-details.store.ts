import { Injectable } from '@angular/core';
import { Store, StoreConfig } from '@datorama/akita';
import { UserDetailed } from './user-detail.model';

export interface UserDetailsState {
  userDetails: UserDetailed | null;
  userFollowers: any;
  userRepos: any;
}

@Injectable({ providedIn: 'root' })
@StoreConfig({ name: 'user-details' })
export class UserDetailsStore extends Store<UserDetailsState> {
  constructor() {
    super({
      userDetails: null,
      userFollowers: null,
      userRepos: null,
    });
  }
}
