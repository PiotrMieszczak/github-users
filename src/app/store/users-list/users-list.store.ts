import { Injectable } from '@angular/core';
import {
  ActiveState,
  EntityState,
  EntityStore,
  StoreConfig,
} from '@datorama/akita';
import { User } from './users-model';

export interface UserListState extends EntityState<User>, ActiveState {}

@Injectable({ providedIn: 'root' })
@StoreConfig({ name: 'posts' })
export class UsersListStore extends EntityStore<UserListState> {
  constructor() {
    super();
  }
}
