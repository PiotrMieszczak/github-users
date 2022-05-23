import { Spectator, createComponentFactory } from '@ngneat/spectator/jest';

import { UserDetailsContainerComponent } from './user-details-container.component';
import { RouterTestingModule } from '@angular/router/testing';
import { UserDetailsService } from '../../../../store/user-details/user-details.service';
import { UserDetailsQuery } from '../../../../store/user-details/user-details.query';
import { UserDetailsStore } from '../../../../store/user-details/user-details.store';
import {
  IUserDetailed,
  Repo,
  UserDetailed,
} from '../../../../store/user-details/user-detail.model';
import { ActivatedRoute, convertToParamMap } from '@angular/router';
import { of } from 'rxjs';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { UserDetailsModule } from '../../user-details.module';

const mockRepoData = {
  name: 'mojo',
  html_url: 'https://github.com/mojo',
  description: 'tesst desc',
};

describe('UserDetailsContainerComponent', () => {
  let spectator: Spectator<UserDetailsContainerComponent>;
  let query: UserDetailsQuery;
  let service: UserDetailsService;
  let store: UserDetailsStore;
  let router: ActivatedRoute;

  const createComponent = createComponentFactory({
    component: UserDetailsContainerComponent,
    imports: [HttpClientTestingModule, UserDetailsModule],
    providers: [
      UserDetailsService,
      UserDetailsQuery,
      UserDetailsStore,
      {
        provide: ActivatedRoute,
        useValue: { paramMap: of(convertToParamMap({ login: 'mojo' })) },
      },
    ],
  });

  beforeEach(() => {
    spectator = createComponent();
    store = new UserDetailsStore();
    query = spectator.inject(UserDetailsQuery);
    service = spectator.inject(UserDetailsService);
    router = spectator.inject(ActivatedRoute);
  });

  it('should create', () => {
    expect(spectator.component).toBeTruthy();
  });

  it('should get data from store', () => {
    const mockFollowers = [
      new UserDetailed({ login: 'mojo' } as IUserDetailed),
    ];
    const mockDetails = new UserDetailed({ login: 'mojo' } as IUserDetailed);
    const mockRepos = [new Repo(mockRepoData)];

    store.update({
      userFollowers: mockFollowers,
      userDetails: mockDetails,
      userRepos: mockRepos,
    });

    spectator.detectChanges();

    spectator.component.followers$.subscribe(res => {
      expect(res).toEqual(mockFollowers);
    });

    spectator.component.userDetails$.subscribe(res => {
      expect(res).toEqual(mockDetails);
    });

    spectator.component.repos$.subscribe(res => {
      expect(res).toEqual(mockRepos);
    });
  });
});
