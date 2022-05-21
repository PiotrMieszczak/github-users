import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersListComponent } from './components/users-list/users-list.component';
import { UsersListRoutingModule } from './users-list-routing.module';
import { UsersListSearchbarComponent } from './components/users-list-searchbar/users-list-searchbar.component';

@NgModule({
  declarations: [UsersListComponent, UsersListSearchbarComponent],
  imports: [CommonModule, UsersListRoutingModule],
})
export class UsersListModule {}
