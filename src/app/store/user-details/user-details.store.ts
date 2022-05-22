import { Injectable } from '@angular/core';
import { Store, StoreConfig } from '@datorama/akita';
import { Repo, UserDetailed } from './user-detail.model';
import { User } from '../users-list';

export interface UserDetailsState {
  userDetails: UserDetailed | null;
  userFollowers: User[] | null;
  userRepos: Repo[] | null;
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
