import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { filter, map, Observable, take, tap } from 'rxjs';
import { UserDetailsService } from '../../../../store/user-details/user-details.service';
import { User } from '../../../../store/users-list';
import { UserDetailsQuery } from '../../../../store/user-details/user-details.query';
import {
  Repo,
  UserDetailed,
} from '../../../../store/user-details/user-detail.model';

@Component({
  selector: 'app-user-details-container',
  templateUrl: './user-details-container.component.html',
  styleUrls: ['./user-details-container.component.scss'],
})
export class UserDetailsContainerComponent {
  followers$: Observable<User[]>;
  userDetails$: Observable<UserDetailed | null>;
  repos$: Observable<Repo[]>;
  loaded = false;

  constructor(
    private readonly _router: ActivatedRoute,
    private readonly _userDetailsService: UserDetailsService,
    private readonly _userDetailsQuery: UserDetailsQuery
  ) {
    this.startRouterSub();
    this.followers$ = this.getFollowers();
    this.userDetails$ = this.getUserDetails();
    this.repos$ = this.getUserRepos();
  }

  private startRouterSub(): void {
    this._router.paramMap
      .pipe(
        tap(() => (this.loaded = false)),
        map(paramMap => paramMap.get('login')),
        filter(Boolean)
      )
      .subscribe((login: string) => {
        this.loaded = true;
        this.getData(login);
      });
  }

  private getData(login: string): void {
    this._userDetailsService.getData(login).pipe(take(1)).subscribe();
  }

  private getFollowers(): Observable<User[]> {
    return this._userDetailsQuery.select(state => state.userFollowers);
  }

  private getUserDetails(): Observable<UserDetailed | null> {
    return this._userDetailsQuery.select(state => state.userDetails);
  }

  private getUserRepos(): Observable<Repo[]> {
    return this._userDetailsQuery.select(state => state.userRepos);
  }
}
