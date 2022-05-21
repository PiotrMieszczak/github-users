import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UsersListContainerComponent } from './components/users-list-container/users-list-container.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/users-list',
    pathMatch: 'full',
  },
  {
    path: 'users-list',
    component: UsersListContainerComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UsersListRoutingModule {}
