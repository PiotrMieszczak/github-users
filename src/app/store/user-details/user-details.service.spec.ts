import { createServiceFactory, SpectatorService } from '@ngneat/spectator/jest';
import { UsersListStore } from '../users-list';
import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';
import { environment } from '../../../environments/environment';
import { UserDetailsService } from './user-details.service';
import { UserDetailsStore } from './user-details.store';

const mockUserData = {
  login: 'mojo',
  id: 13878579,
  node_id: 'MDEyOk9yZ2FuaXphdGlvbjEzODc4NTc5',
  avatar_url: 'https://avatars.githubusercontent.com/u/13878579?v=4',
  gravatar_id: '',
  url: 'https://api.github.com/users/mojo',
  html_url: 'https://github.com/mojo',
  followers_url: 'https://api.github.com/users/mojo/followers',
  following_url: 'https://api.github.com/users/mojo/following{/other_user}',
  gists_url: 'https://api.github.com/users/mojo/gists{/gist_id}',
  starred_url: 'https://api.github.com/users/mojo/starred{/owner}{/repo}',
  subscriptions_url: 'https://api.github.com/users/mojo/subscriptions',
  organizations_url: 'https://api.github.com/users/mojo/orgs',
  repos_url: 'https://api.github.com/users/mojo/repos',
  events_url: 'https://api.github.com/users/mojo/events{/privacy}',
  received_events_url: 'https://api.github.com/users/mojo/received_events',
  type: 'Organization',
  site_admin: false,
  name: null,
  company: null,
  blog: '',
  location: null,
  email: null,
  hireable: null,
  bio: null,
  twitter_username: null,
  public_repos: 1,
  public_gists: 0,
  followers: 0,
  following: 0,
  created_at: '2015-08-20T00:57:35Z',
  updated_at: '2016-02-28T08:57:09Z',
};

const mockRepoData = [
  {
    name: 'mojo',
    html_url: 'https://github.com/mojo',
    description: 'tesst desc',
  },
];
describe('getUserDetails', () => {
  let spectator: SpectatorService<UserDetailsService>;
  let postsListStore: UserDetailsStore;
  let httpController: HttpTestingController;

  const createService = createServiceFactory({
    service: UserDetailsService,
    providers: [UserDetailsStore],
    imports: [HttpClientTestingModule],
  });

  beforeEach(() => {
    spectator = createService();
    postsListStore = spectator.inject(UsersListStore);
    httpController = spectator.inject(HttpTestingController);
  });

  it('should make 3 http calls for getting data', () => {
    const userUrl = environment.apiUrl + `/users/mojo`;
    const followersUrl =
      environment.apiUrl + '/users/mojo/followers?q=per_page=100';
    const reposUrl = environment.apiUrl + '/users/mojo/repos?q=per_page=100';

    spectator.service.getData('mojo').subscribe();

    const reqUserDetails = httpController.expectOne({
      method: 'GET',
      url: `${userUrl}`,
    });
    const reqFollowersUrl = httpController.expectOne({
      method: 'GET',
      url: `${followersUrl}`,
    });
    const reqReposUrl = httpController.expectOne({
      method: 'GET',
      url: `${reposUrl}`,
    });

    reqUserDetails.flush(mockUserData);
    reqFollowersUrl.flush([mockUserData]);
    reqReposUrl.flush(mockRepoData);
  });
});
