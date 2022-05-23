import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersListRoutingModule } from './users-list-routing.module';
import { UsersListSearchbarComponent } from './components/users-list-searchbar/users-list-searchbar.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TuiInputModule } from '@taiga-ui/kit';
import { TuiTextfieldControllerModule } from '@taiga-ui/core';
import { UsersListContainerComponent } from './components/users-list-container/users-list-container.component';
import { SharedModule } from '../../shared/shared.module';

const COMPONENTS = [UsersListSearchbarComponent, UsersListContainerComponent];

const ANGULAR_MODULES = [CommonModule, ReactiveFormsModule, FormsModule];
const UI_LIB_MODULES = [TuiInputModule, TuiTextfieldControllerModule];

@NgModule({
  declarations: [...COMPONENTS],
  imports: [
    UsersListRoutingModule,
    ...ANGULAR_MODULES,
    ...UI_LIB_MODULES,
    SharedModule,
  ],
})
export class UsersListModule {}
