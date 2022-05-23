import { Injectable } from '@angular/core';
import { UserDetailsStore } from './user-details.store';
import { HttpService } from '../../http.service';
import { concat, filter, map, merge, mergeMap, Observable, tap } from 'rxjs';
import { assertProperties } from '../../utils/utils';
import { GITHUB_USER_PROPS, IUser, User } from '../users-list';
import { IRepo, IUserDetailed, Repo, UserDetailed } from './user-detail.model';

export const USER_DETAILS_PROPS = [
  'login',
  'id',
  'node_id',
  'avatar_url',
  'gravatar_id',
  'url',
  'html_url',
  'followers_url',
  'following_url',
  'gists_url',
  'starred_url',
  'subscriptions_url',
  'organizations_url',
  'repos_url',
  'events_url',
  'received_events_url',
  'type',
  'site_admin',
  'name',
  'company',
  'blog',
  'location',
  'email',
  'hireable',
  'bio',
  'twitter_username',
  'public_repos',
  'public_gists',
  'followers',
  'following',
  'created_at',
  'updated_at',
];

@Injectable({ providedIn: 'root' })
export class UserDetailsService {
  constructor(
    protected store: UserDetailsStore,
    private readonly _http: HttpService
  ) {}

  getData(login: string): Observable<any> {
    const details$ = this.getUserDetails(login);
    const followers$ = this.getFollowers(login);
    const repos$ = this.getRepos(login);
    return merge(details$, followers$, repos$);
  }

  private getUserDetails(login: string): Observable<UserDetailed> {
    return this._http.get(`/users/${login}`).pipe(
      filter(userDetails => assertProperties(USER_DETAILS_PROPS, userDetails)),
      map((userDetails: IUserDetailed) =>
        this.store.update({
          userDetails: new UserDetailed(userDetails),
        })
      )
    );
  }

  private getFollowers(login: string): Observable<User[]> {
    return this._http.get(`/users/${login}/followers?q=per_page=100`).pipe(
      filter(users =>
        users.every((user: Record<string, unknown>) =>
          assertProperties(GITHUB_USER_PROPS, user)
        )
      ),
      map((users: IUser[]) =>
        this.store.update({
          userFollowers: users.map(user => new User(user)),
        })
      )
    );
  }

  private getRepos(login: string): Observable<Repo[]> {
    return this._http.get(`/users/${login}/repos?q=per_page=100`).pipe(
      filter(repos =>
        repos.every((repo: Record<string, unknown>) =>
          assertProperties(['name', 'full_name', 'private'], repo)
        )
      ),
      map((repos: IRepo[]) =>
        this.store.update({
          userRepos: repos.map(repo => new Repo(repo)),
        })
      )
    );
  }
}
