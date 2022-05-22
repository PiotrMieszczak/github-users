import { Spectator, createComponentFactory } from '@ngneat/spectator/jest';

import { UserDetailsContainerComponent } from './user-details-container.component';
import { RouterTestingModule } from '@angular/router/testing';
import { UserDetailsService } from '../../../../store/user-details/user-details.service';

describe('UserDetailsContainerComponent', () => {
  let spectator: Spectator<UserDetailsContainerComponent>;
  const createComponent = createComponentFactory({
    component: UserDetailsContainerComponent,
    imports: [RouterTestingModule],
    mocks: [UserDetailsService],
  });

  it('should create', () => {
    spectator = createComponent();

    expect(spectator.component).toBeTruthy();
  });
});
