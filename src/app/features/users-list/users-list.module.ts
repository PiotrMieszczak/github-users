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
import { RouterModule } from '@angular/router';

const COMPONENTS = [
  UsersListComponent,
  UsersListSearchbarComponent,
  UsersListContainerComponent,
];

const ANGULAR_MODULES = [
  CommonModule,
  ReactiveFormsModule,
  FormsModule,
  RouterModule,
];
const UI_LIB_MODULES = [
  TuiInputModule,
  TuiTextfieldControllerModule,
  TuiScrollbarModule,
  ScrollingModule,
  TuiAvatarModule,
  TuiIslandModule,
];

@NgModule({
  declarations: [...COMPONENTS],
  imports: [UsersListRoutingModule, ...ANGULAR_MODULES, ...UI_LIB_MODULES],
})
export class UsersListModule {}
