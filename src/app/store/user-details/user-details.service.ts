import { Injectable } from '@angular/core';
import { UserDetailsStore } from './user-details.store';
import { HttpService } from '../../http.service';
import { filter, forkJoin, map, Observable } from 'rxjs';
import { assertProperties } from '../../utils/utils';
import { GITHUB_USER_PROPS, IUser, User } from '../users-list';
import { IRepo, IUserDetailed, Repo, UserDetailed } from './user-detail.model';

export const USER_DETAILS_PROPS = [
  'login',
  'id',
  'avatar_url',
  'followers_url',
  'repos_url',
  'name',
  'company',
  'email',
  'location',
  'bio',
  'public_repos',
  'followers',
];

@Injectable({ providedIn: 'root' })
export class UserDetailsService {
  constructor(
    protected store: UserDetailsStore,
    private readonly _http: HttpService
  ) {}

  getData(login: string): Observable<any> {
    return forkJoin([
      this.getUserDetails(login),
      this.getFollowers(login),
      this.getRepos(login),
    ]);
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
          assertProperties(['name', 'url', 'description'], repo)
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
