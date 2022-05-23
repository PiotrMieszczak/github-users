import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserDetailsContainerComponent } from './components/user-details-container/user-details-container.component';
import { UserDetailsReposComponent } from './components/user-details-repos/user-details-repos.component';
import { UserDetailsRoutingModule } from './user-details-routing.module';
import { UserDetailsProfileComponent } from './components/user-details-profile/user-details-profile.component';
import { SharedModule } from '../../shared/shared.module';
import { TuiAvatarModule, TuiIslandModule } from '@taiga-ui/kit';
import { TuiLabelModule, TuiScrollbarModule } from '@taiga-ui/core';
import { ScrollingModule } from '@angular/cdk/scrolling';

const COMPONENTS = [UserDetailsContainerComponent, UserDetailsReposComponent];
const UI_LIB_MODULES = [
  TuiIslandModule,
  TuiAvatarModule,
  TuiLabelModule,
  TuiScrollbarModule,
  ScrollingModule,
];

@NgModule({
  declarations: [...COMPONENTS, UserDetailsProfileComponent],
  imports: [
    CommonModule,
    UserDetailsRoutingModule,
    SharedModule,
    ...UI_LIB_MODULES,
  ],
})
export class UserDetailsModule {}
