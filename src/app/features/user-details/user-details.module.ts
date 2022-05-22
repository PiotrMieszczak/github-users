import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserDetailsContainerComponent } from './components/user-details-container/user-details-container.component';
import { UserDetailsReposComponent } from './components/user-details-repos/user-details-repos.component';
import { UserDetailsFollowersComponent } from './components/user-details-followers/user-details-followers.component';
import { UserDetailsRoutingModule } from './user-details-routing.module';

const COMPONENTS = [
  UserDetailsContainerComponent,
  UserDetailsReposComponent,
  UserDetailsFollowersComponent,
];
const UI_LIB_MODULES = [];

@NgModule({
  declarations: [...COMPONENTS],
  imports: [CommonModule, UserDetailsRoutingModule],
})
export class UserDetailsModule {}
