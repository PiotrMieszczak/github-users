import { Injectable } from '@angular/core';
import { UsersListStore } from './users-list.store';
import { filter, map, Observable } from 'rxjs';
import { HttpService } from '../../http.service';
import { assertProperties } from '../../utils/utils';
import { IUser, User } from './users-model';

export const GITHUB_USER_PROPS = [
  'avatar_url',
  'events_url',
  'followers_url',
  'following_url',
  'gists_url',
  'gravatar_id',
  'html_url',
  'id',
  'login',
  'node_id',
  'organizations_url',
  'received_events_url',
  'repos_url',
  'site_admin',
  'starred_url',
  'subscriptions_url',
  'type',
  'url',
];

@Injectable({ providedIn: 'root' })
export class UsersListService {
  constructor(
    protected store: UsersListStore,
    private readonly _http: HttpService
  ) {}

  searchByName(searchedWord: string): Observable<unknown> {
    const query = `${searchedWord}+in:login&type=Users&per_page=100`;
    return this._http.get(`/search/users?q=${query}`).pipe(
      filter(({ items }) =>
        items.every((user: Record<string, unknown>) =>
          assertProperties(GITHUB_USER_PROPS, user)
        )
      ),
      map(({ items }: { items: IUser[] }) =>
        this.store.set(items.map(user => new User(user)))
      )
    );
  }

  setQuery(query: string): void {
    this.store.update({ query });
  }
  setActive(user: User): void {
    this.store.setActive(user.id);
  }
}
