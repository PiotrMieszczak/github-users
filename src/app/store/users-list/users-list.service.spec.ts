import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';
import { createServiceFactory, SpectatorService } from '@ngneat/spectator/jest';
import { UsersListService } from './users-list.service';
import { UsersListStore } from './users-list.store';
import { environment } from '../../../environments/environment';

const mockPostData = [
  {
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
  },
];

describe('GetData', () => {
  let spectator: SpectatorService<UsersListService>;
  let postsListService: UsersListService;
  let postsListStore: UsersListStore;
  let httpController: HttpTestingController;

  const createService = createServiceFactory({
    service: UsersListService,
    providers: [UsersListStore],
    imports: [HttpClientTestingModule],
  });

  beforeEach(() => {
    spectator = createService();
    postsListService = spectator.inject(UsersListService);
    postsListStore = spectator.inject(UsersListStore);
    httpController = spectator.inject(HttpTestingController);
  });

  it('should get user by name', function () {
    const url = environment.apiUrl + '/users/mojo';

    spectator.service.searchByName('mojo').subscribe(res => {
      expect(res).toEqual(mockPostData);
    });

    const req = httpController.expectOne({
      method: 'GET',
      url: `${url}`,
    });

    req.flush(mockPostData);
  });
});
