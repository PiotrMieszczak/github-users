import { NgModule } from '@angular/core';
import { UsersListComponent } from './components/users-list.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/users-list',
    pathMatch: 'full',
  },
  {
    path: 'users-list',
    component: UsersListComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UsersListRoutingModule {}
