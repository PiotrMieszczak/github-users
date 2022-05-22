import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersListComponent } from './components/users-list/users-list.component';
import { UsersListRoutingModule } from './users-list-routing.module';
import { UsersListSearchbarComponent } from './components/users-list-searchbar/users-list-searchbar.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TuiInputModule, TuiIslandModule } from '@taiga-ui/kit';
import {
  TuiScrollbarModule,
  TuiTextfieldControllerModule,
} from '@taiga-ui/core';
import { UsersListContainerComponent } from './components/users-list-container/users-list-container.component';
import { ScrollingModule } from '@angular/cdk/scrolling';
import { TuiAvatarModule } from '@taiga-ui/kit';

@NgModule({
  declarations: [
    UsersListComponent,
    UsersListSearchbarComponent,
    UsersListContainerComponent,
  ],
  imports: [
    CommonModule,
    UsersListRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    TuiInputModule,
    TuiTextfieldControllerModule,
    TuiScrollbarModule,
    ScrollingModule,
    TuiAvatarModule,
    TuiIslandModule,
  ],
})
export class UsersListModule {}
