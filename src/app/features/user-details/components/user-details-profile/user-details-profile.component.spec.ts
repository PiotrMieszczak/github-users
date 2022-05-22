import { Spectator, createComponentFactory } from '@ngneat/spectator';

import { UserDetailsProfileComponent } from './user-details-profile.component';

describe('UserDetailsProfileComponent', () => {
  let spectator: Spectator<UserDetailsProfileComponent>;
  const createComponent = createComponentFactory(UserDetailsProfileComponent);

  it('should create', () => {
    spectator = createComponent();

    expect(spectator.component).toBeTruthy();
  });
});
