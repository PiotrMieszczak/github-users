import { Spectator, createComponentFactory } from '@ngneat/spectator';

import { UserDetailsContainerComponent } from './user-details-container.component';

describe('UserDetailsContainerComponent', () => {
  let spectator: Spectator<UserDetailsContainerComponent>;
  const createComponent = createComponentFactory(UserDetailsContainerComponent);

  it('should create', () => {
    spectator = createComponent();

    expect(spectator.component).toBeTruthy();
  });
});
