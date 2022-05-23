import { Spectator, createComponentFactory } from '@ngneat/spectator';

import { UserDetailsReposComponent } from './user-details-repos.component';
import { TuiScrollbarModule } from '@taiga-ui/core';
import { ScrollingModule } from '@angular/cdk/scrolling';
import { TuiIslandModule } from '@taiga-ui/kit';

describe('UserDetailsReposComponent', () => {
  let spectator: Spectator<UserDetailsReposComponent>;
  const createComponent = createComponentFactory({
    component: UserDetailsReposComponent,
    imports: [TuiScrollbarModule, ScrollingModule, TuiIslandModule],
  });

  it('should create', () => {
    spectator = createComponent();

    expect(spectator.component).toBeTruthy();
  });
});
