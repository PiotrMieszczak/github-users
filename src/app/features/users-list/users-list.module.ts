import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersListComponent } from './components/users-list/users-list.component';
import { UsersListRoutingModule } from './users-list-routing.module';
import { UsersListSearchbarComponent } from './components/users-list-searchbar/users-list-searchbar.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TuiInputModule } from '@taiga-ui/kit';
import { TuiTextfieldControllerModule } from '@taiga-ui/core';

@NgModule({
  declarations: [UsersListComponent, UsersListSearchbarComponent],
  imports: [
    CommonModule,
    UsersListRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    TuiInputModule,
    TuiTextfieldControllerModule,
  ],
})
export class UsersListModule {}
