import { Spectator, createComponentFactory } from '@ngneat/spectator/jest';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UsersListComponent } from './users-list.component';
import { RouterTestingModule } from '@angular/router/testing';
import { TuiScrollbarModule } from '@taiga-ui/core';
import { ScrollingModule } from '@angular/cdk/scrolling';
import { TuiAvatarModule, TuiIslandModule } from '@taiga-ui/kit';

describe('UsersListComponent', () => {
  let spectator: Spectator<UsersListComponent>;

  const createComponent = createComponentFactory({
    component: UsersListComponent,
    imports: [
      FormsModule,
      ReactiveFormsModule,
      RouterTestingModule,
      TuiScrollbarModule,
      ScrollingModule,
      TuiAvatarModule,
      TuiIslandModule,
    ],
  });

  beforeEach(() => {
    spectator = createComponent();
  });

  it('should create', () => {
    expect(spectator.component).toBeDefined();
  });
});
