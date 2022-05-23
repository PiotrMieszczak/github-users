import { NgModule } from '@angular/core';
import { UsersListComponent } from './components/users-list/users-list.component';
import { TuiScrollbarModule } from '@taiga-ui/core';
import { ScrollingModule } from '@angular/cdk/scrolling';
import { TuiAvatarModule, TuiIslandModule } from '@taiga-ui/kit';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [UsersListComponent],
  imports: [
    CommonModule,
    TuiScrollbarModule,
    ScrollingModule,
    TuiAvatarModule,
    TuiIslandModule,
    RouterModule,
  ],
  exports: [UsersListComponent],
})
export class SharedModule {}
