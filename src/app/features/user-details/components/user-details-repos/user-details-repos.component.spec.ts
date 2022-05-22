import { Spectator, createComponentFactory } from '@ngneat/spectator';

import { UserDetailsReposComponent } from './user-details-repos.component';

describe('UserDetailsReposComponent', () => {
  let spectator: Spectator<UserDetailsReposComponent>;
  const createComponent = createComponentFactory(UserDetailsReposComponent);

  it('should create', () => {
    spectator = createComponent();

    expect(spectator.component).toBeTruthy();
  });
});
