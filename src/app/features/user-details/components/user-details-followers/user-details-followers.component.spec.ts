import { Spectator, createComponentFactory } from '@ngneat/spectator';

import { UserDetailsFallowersComponent } from './user-details-followers.component';

describe('UserDetailsFallowersComponent', () => {
  let spectator: Spectator<UserDetailsFallowersComponent>;
  const createComponent = createComponentFactory(UserDetailsFallowersComponent);

  it('should create', () => {
    spectator = createComponent();

    expect(spectator.component).toBeTruthy();
  });
});
