import { Spectator, createComponentFactory } from '@ngneat/spectator';

import { UserDetailsFollowersComponent } from './user-details-followers.component';

describe('UserDetailsFollowersComponent', () => {
  let spectator: Spectator<UserDetailsFollowersComponent>;
  const createComponent = createComponentFactory(UserDetailsFollowersComponent);

  it('should create', () => {
    spectator = createComponent();

    expect(spectator.component).toBeTruthy();
  });
});
