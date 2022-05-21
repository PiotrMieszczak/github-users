import { Injectable } from '@angular/core';
import { UsersListStore } from './users-list.store';
import { filter, map, Observable } from 'rxjs';
import { HttpService } from '../../http.service';
import { assertProperties } from '../../utils/utils';
import { IUser, User } from './users-model';

export const GITHUB_USER_PROPS = [
  'login',
  'id',
  'avatar_url',
  'url',
  'followers_url',
  'repos_url',
  'email',
];

@Injectable({ providedIn: 'root' })
export class UsersListService {
  constructor(
    protected store: UsersListStore,
    private readonly _http: HttpService
  ) {}

  searchByName(query: string): Observable<unknown> {
    return this._http.get(`/users/${query}`).pipe(
      filter(users =>
        users.every((user: Record<string, unknown>) =>
          assertProperties(GITHUB_USER_PROPS, user)
        )
      ),
      map((users: IUser[]) => this.store.add(users.map(user => new User(user))))
    );
  }

  setActive(user: User): void {
    this.store.setActive(user.id);
  }
}
